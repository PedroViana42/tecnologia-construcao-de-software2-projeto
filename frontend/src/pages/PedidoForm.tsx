import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { pedidoSchema, PedidoFormData } from '../schemas';
import { api } from '../services/api';
import { Sessao, Filme, Lanche, Combo } from '../types';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

export function PedidoForm() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isEditing = !!id;

  const [sessoes, setSessoes] = useState<Sessao[]>([]);
  const [filmes, setFilmes] = useState<Record<string, Filme>>({});
  const [lanches, setLanches] = useState<Lanche[]>([]);
  const [combos, setCombos] = useState<Combo[]>([]);

  const { register, handleSubmit, setValue, watch, control, formState: { errors } } = useForm<PedidoFormData>({
    resolver: zodResolver(pedidoSchema),
    defaultValues: {
      quantidadeIngressos: 1,
      tipoIngresso: 'Inteira',
      lancheId: '',
      comboId: ''
    }
  });

  const watchedValues = watch();

  useEffect(() => {
    loadData();
  }, [id]);

  const loadData = async () => {
    try {
      const [sessoesData, filmesData, lanchesData, combosData] = await Promise.all([
        api.getSessoes(),
        api.getFilmes(),
        api.getLanches(),
        api.getCombos(),
      ]);

      setSessoes(sessoesData);
      setFilmes(filmesData.reduce((acc, f) => ({ ...acc, [f.id]: f }), {}));
      setLanches(lanchesData);
      setCombos(combosData);

      if (isEditing) {
        const pedido = await api.getPedido(id!);
        setValue('sessaoId', pedido.sessaoId);
        setValue('quantidadeIngressos', pedido.quantidadeIngressos);
        setValue('tipoIngresso', pedido.tipoIngresso);
        setValue('lancheId', pedido.lancheId || '');
        setValue('comboId', pedido.comboId || '');
      }
    } catch (error) {
      console.error(error);
      alert('Erro ao carregar dados');
    }
  };

  const calculateTotal = () => {
    const precoIngressoBase = 40;
    const precoIngresso = watchedValues.tipoIngresso === 'Meia' ? precoIngressoBase / 2 : precoIngressoBase;
    let total = (watchedValues.quantidadeIngressos || 0) * precoIngresso;

    if (watchedValues.lancheId) {
      const lanche = lanches.find(l => l.id === watchedValues.lancheId);
      if (lanche) total += lanche.preco;
    }

    if (watchedValues.comboId) {
      const combo = combos.find(c => c.id === watchedValues.comboId);
      if (combo) total += combo.preco;
    }

    return total;
  };

  const onSubmit = async (data: PedidoFormData) => {
    const total = calculateTotal();
    const payload = {
      ...data,
      valorTotal: total,
      dataPedido: new Date().toISOString(),
      lancheId: data.lancheId || undefined,
      comboId: data.comboId || undefined,
    };

    try {
      if (isEditing) {
        await api.updatePedido(id!, payload as any);
      } else {
        await api.createPedido(payload as any);
      }
      navigate('/pedidos');
    } catch (error) {
      console.error(error);
      alert('Erro ao salvar pedido');
    }
  };

  return (
    <Container>
      <div className="mb-12 text-center">
        <h2 className="marquee-title">{isEditing ? 'Editar Pedido' : 'Novo Pedido'}</h2>
      </div>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="g-5">
          <Col md={8}>
            <Card className="glass-card mb-8">
              <Card.Body className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <i className="bi bi-ticket-perforated text-accent text-2xl"></i>
                  <h5 className="font-display font-extrabold text-xl mb-0 uppercase tracking-tighter">Informações da Sessão</h5>
                </div>
                
                <Form.Group className="mb-8">
                  <Form.Label>Sessão</Form.Label>
                  <Form.Select {...register('sessaoId')} isInvalid={!!errors.sessaoId}>
                    <option value="">Selecione uma sessão</option>
                    {sessoes.map(s => (
                      <option key={s.id} value={s.id}>
                        {filmes[s.filmeId]?.titulo} - {new Date(s.data).toLocaleDateString('pt-BR')} às {s.horario}
                      </option>
                    ))}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">{errors.sessaoId?.message}</Form.Control.Feedback>
                </Form.Group>

                <Row className="g-4">
                  <Form.Group as={Col} md="6">
                    <Form.Label>Quantidade de Ingressos</Form.Label>
                    <Form.Control 
                      type="number" 
                      {...register('quantidadeIngressos', { valueAsNumber: true })} 
                      isInvalid={!!errors.quantidadeIngressos}
                    />
                    <Form.Control.Feedback type="invalid">{errors.quantidadeIngressos?.message}</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="6">
                    <Form.Label>Tipo de Ingresso</Form.Label>
                    <Form.Select {...register('tipoIngresso')}>
                      <option value="Inteira">Inteira (R$ 40,00)</option>
                      <option value="Meia">Meia (R$ 20,00)</option>
                    </Form.Select>
                  </Form.Group>
                </Row>
              </Card.Body>
            </Card>

            <Card className="glass-card mb-8">
              <Card.Body className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <i className="bi bi-cup-straw text-accent text-2xl"></i>
                  <h5 className="font-display font-extrabold text-xl mb-0 uppercase tracking-tighter">Bomboniere (Opcional)</h5>
                </div>
                <Row className="g-4">
                  <Form.Group as={Col} md="6">
                    <Form.Label>Lanche</Form.Label>
                    <Form.Select {...register('lancheId')}>
                      <option value="">Nenhum lanche</option>
                      {lanches.map(l => (
                        <option key={l.id} value={l.id}>{l.nome} (R$ {l.preco.toFixed(2)})</option>
                      ))}
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} md="6">
                    <Form.Label>Combo</Form.Label>
                    <Form.Select {...register('comboId')}>
                      <option value="">Nenhum combo</option>
                      {combos.map(c => (
                        <option key={c.id} value={c.id}>{c.nome} (R$ {c.preco.toFixed(2)})</option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="glass-card sticky-top" style={{ top: '120px' }}>
              <Card.Body className="p-8">
                <h5 className="font-display font-extrabold text-xl mb-8 uppercase tracking-tighter border-b border-white/10 pb-4">Resumo</h5>
                <div className="font-body space-y-4 text-sm">
                  <div className="flex justify-between text-white/60">
                    <span>Ingressos ({watchedValues.quantidadeIngressos || 0}x):</span>
                    <span className="text-white">R$ {((watchedValues.quantidadeIngressos || 0) * (watchedValues.tipoIngresso === 'Meia' ? 20 : 40)).toFixed(2)}</span>
                  </div>
                  
                  {watchedValues.lancheId && (
                    <div className="flex justify-between text-white/60">
                      <span>Lanche:</span>
                      <span className="text-white">R$ {lanches.find(l => l.id === watchedValues.lancheId)?.preco.toFixed(2)}</span>
                    </div>
                  )}

                  {watchedValues.comboId && (
                    <div className="flex justify-between text-white/60">
                      <span>Combo:</span>
                      <span className="text-white">R$ {combos.find(c => c.id === watchedValues.comboId)?.preco.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="pt-6 border-t border-white/10 mt-6">
                    <div className="flex justify-between items-end">
                      <span className="font-display font-bold uppercase text-xs tracking-widest text-white/40">Total</span>
                      <span className="text-3xl font-display font-extrabold text-accent">R$ {calculateTotal().toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 mt-12">
                  <Button className="btn-cinematic w-full" type="submit">
                    {isEditing ? 'Atualizar Pedido' : 'Registrar Pedido'}
                  </Button>
                  <Button variant="outline-secondary" className="rounded-full font-bold border-2 text-white/60 hover:text-white" onClick={() => navigate('/pedidos')}>
                    Cancelar
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
