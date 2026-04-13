import React, { useEffect, useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { pedidoSchema, PedidoFormData } from '../schemas';
import { api } from '../services/api';
import { Sessao, Filme, LancheCombo } from '../types';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { CineModal } from '../components/CineModal';

export function PedidoForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const isEditing = !!id;

  const preSelectedFilmeId = location.state?.filmeId;

  const [sessoes, setSessoes] = useState<Sessao[]>([]);
  const [filmes, setFilmes] = useState<Record<string, Filme>>({});
  const [itensBomboniere, setItensBomboniere] = useState<LancheCombo[]>([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [alertConfig, setAlertConfig] = useState<{isOpen: boolean, title: string, message: string} | null>(null);

  const { register, handleSubmit, setValue, watch, control, formState: { errors } } = useForm<PedidoFormData>({
    resolver: zodResolver(pedidoSchema),
    defaultValues: {
      cliente: '',
      ingressos: [{ tipo: 'Inteira', quantidade: 1 }],
      lancheId: '',
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'ingressos'
  });

  const watchedValues = watch();

  useEffect(() => {
    loadData();
  }, [id]);

  const loadData = async () => {
    try {
      const [sessoesData, filmesData, itensData] = await Promise.all([
        api.getSessoes(),
        api.getFilmes(),
        api.getLanches(),
      ]);

      const filteredSessoes = preSelectedFilmeId 
        ? sessoesData.filter(s => s.filmeId === preSelectedFilmeId)
        : sessoesData;

      setSessoes(filteredSessoes);
      setFilmes(filmesData.reduce((acc, f) => ({ ...acc, [f.id]: f }), {}));
      setItensBomboniere(itensData);

      if (isEditing) {
        const pedido = await api.getPedido(id!);
        setValue('cliente', pedido.cliente);
      }
    } catch (error) {
      console.error(error);
    }
  };


  const selectedLancheId = watchedValues.lancheId;
  const lancheSelecionado = itensBomboniere.find(i => i.id === Number(selectedLancheId));
  const valorLanche = lancheSelecionado ? Number(lancheSelecionado.preco) : 0;

  const selectedSessaoId = watchedValues.sessaoId;
  const sessaoSelecionada = sessoes.find(s => s.id === Number(selectedSessaoId));
  const precoIngressoBase = sessaoSelecionada ? Number(sessaoSelecionada.valorIngresso) : 0;

  const calculateTotal = () => {
    const valorIngressos = (watchedValues.ingressos || []).reduce((sum, item) => {
      const preco = item.tipo === 'Meia' ? precoIngressoBase / 2 : precoIngressoBase;
      return sum + ((Number(item.quantidade) || 0) * preco);
    }, 0);
    
    return valorIngressos + valorLanche;
  };

  const valorTotal = calculateTotal();

  const handleOpenConfirm = () => {
    if (!watchedValues.sessaoId) {
      setAlertConfig({
        isOpen: true,
        title: 'Sessão Não Selecionada',
        message: 'Por favor, selecione uma sessão antes de prosseguir com a compra.'
      });
      return;
    }
    setShowConfirmModal(true);
  };

  const onFinalSubmit = async (data: PedidoFormData) => {
    setIsSubmitting(true);
    try {
      const sessaoId = Number(data.sessaoId);
      
      const ingressoPromises = [];
      for (const item of data.ingressos) {
        for (let i = 0; i < item.quantidade; i++) {
          ingressoPromises.push(api.createIngresso({
            sessaoId: sessaoId,
            tipo: item.tipo
          }));
        }
      }
      
      const ingressosCriados = await Promise.all(ingressoPromises);
      const ingressoIds = ingressosCriados.map(ing => ing.id);

      const lancheComboIds = data.lancheId ? [Number(data.lancheId)] : [];
      
      const pedidoPayload = {
        cliente: data.cliente,
        ingressoIds,
        lancheComboIds
      };

      await api.createPedido(pedidoPayload);
      
      setSuccess(true);
      setTimeout(() => {
        document.body.style.overflow = 'unset';
        navigate('/');
      }, 3000);
    } catch (error: any) {
      console.error("ERRO AO SALVAR PEDIDO:", error);
      setAlertConfig({
        isOpen: true,
        title: 'Erro no Pedido',
        message: error.message || 'Houve um problema ao finalizar seu pedido. Por favor, tente novamente.'
      });
    } finally {
      setIsSubmitting(false);
      setShowConfirmModal(false);
    }
  };

  if (success) {
    return (
      <Container className="text-center py-20 bg-bg min-h-screen">
        <div className="premium-card p-12 max-w-2xl mx-auto bg-surface shadow-xl">
          <i className="bi bi-check-circle-fill text-6xl text-accent mb-8 block animate-bounce"></i>
          <h2 className="font-display font-bold text-4xl mb-6 text-text">Compra Realizada!</h2>
          <p className="text-text-muted font-body text-lg leading-relaxed mb-10">
            Seu pedido foi processado com sucesso. <br />
            Prepare a pipoca e aproveite o espetáculo!
          </p>
          <div className="text-accent font-display font-bold uppercase text-xs tracking-[0.3em] bg-accent/5 py-4 rounded-lg">
            Redirecionando para o catálogo...
          </div>
        </div>
      </Container>
    );
  }

  return (
    <div className="bg-bg min-h-screen pb-24">
      <Container className="py-12">
        <div className="mb-16 text-center">
          <h2 className="marquee-title">{isEditing ? 'Editar Pedido' : 'Finalizar Compra'}</h2>
          {!isEditing && preSelectedFilmeId && (
            <p className="text-accent font-display font-bold uppercase text-[10px] tracking-widest mt-4">
              Você está comprando ingresso para: <span className="text-text">{filmes[preSelectedFilmeId]?.titulo}</span>
            </p>
          )}
        </div>

        <Form onSubmit={handleSubmit(onFinalSubmit)}>
          <Row className="g-10">
            <Col lg={8}>
              <div className="space-y-8">
                {/* Passo 1: Sessão */}
                <Card className="premium-card bg-surface shadow-md overflow-visible">
                  <Card.Body className="p-10">
                    <div className="flex items-center gap-4 mb-10">
                      <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-display font-black text-sm shadow-lg shadow-accent/20">01</div>
                      <h5 className="font-display font-bold text-2xl mb-0 text-[#111111]">Escolha sua Sessão</h5>
                    </div>
                    
                    <Form.Group className="mb-0">
                      <Form.Label className="form-label">Horários Disponíveis</Form.Label>
                      <Form.Select 
                        {...register('sessaoId')} 
                        isInvalid={!!errors.sessaoId}
                        className="form-control-lg !bg-bg border-none"
                      >
                        <option value="">Selecione o horário desejado</option>
                        {sessoes.map(s => (
                          <option key={s.id} value={s.id}>
                            {filmes[s.filmeId]?.titulo} | {new Date(s.horario).toLocaleDateString('pt-BR')} às {new Date(s.horario).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                          </option>
                        ))}
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">{errors.sessaoId?.message}</Form.Control.Feedback>
                    </Form.Group>
                  </Card.Body>
                </Card>

                {/* Passo 2: Ingressos */}
                <Card className="premium-card bg-surface shadow-md overflow-visible">
                  <Card.Body className="p-10">
                    <div className="flex items-center justify-between mb-10">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-display font-black text-sm">02</div>
                        <h5 className="font-display font-bold text-2xl mb-0 text-text">Detalhes dos Ingressos</h5>
                      </div>
                      <Button 
                        variant="outline-danger" 
                        size="sm" 
                        className="rounded-full font-display font-bold text-[10px] uppercase tracking-widest px-4 border-2"
                        onClick={() => append({ tipo: 'Inteira', quantidade: 1 })}
                      >
                        + Adicionar Tipo
                      </Button>
                    </div>
                    
                    <div className="space-y-6">
                      {fields.map((field, index) => (
                        <div key={field.id} className="p-6 bg-bg rounded-xl relative animate-fade-in border border-transparent hover:border-accent/10 transition-all">
                          {fields.length > 1 && (
                            <button 
                              type="button"
                              className="absolute -top-2 -right-2 w-6 h-6 bg-white border border-border rounded-full flex items-center justify-center text-text-muted hover:text-accent hover:border-accent transition-colors shadow-sm"
                              onClick={() => remove(index)}
                            >
                              <i className="bi bi-x-lg text-[10px]"></i>
                            </button>
                          )}
                          <Row className="g-6">
                            <Form.Group as={Col} md="6">
                              <Form.Label className="form-label">Tipo</Form.Label>
                              <Form.Select 
                                {...register(`ingressos.${index}.tipo` as const)} 
                                className="!bg-surface border-none"
                              >
                                <option value="Inteira">Inteira (R$ {precoIngressoBase.toFixed(2)})</option>
                                <option value="Meia">Meia (R$ {(precoIngressoBase / 2).toFixed(2)})</option>
                              </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} md="6">
                              <Form.Label className="form-label">Quantidade</Form.Label>
                              <Form.Control 
                                type="number" 
                                min="1"
                                {...register(`ingressos.${index}.quantidade` as const, { valueAsNumber: true })} 
                                className="!bg-surface border-none py-3"
                              />
                            </Form.Group>
                          </Row>
                        </div>
                      ))}
                    </div>
                  </Card.Body>
                </Card>

                {/* Passo 3: Bomboniere */}
                <Card className="premium-card bg-surface shadow-md overflow-visible">
                  <Card.Body className="p-10">
                    <div className="flex items-center gap-4 mb-10">
                      <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-display font-black text-sm">03</div>
                      <h5 className="font-display font-bold text-2xl mb-0 text-text">Bomboniere Especial</h5>
                    </div>
                    <Form.Group>
                      <Form.Label className="form-label">Deseja adicionar um combo?</Form.Label>
                      <Form.Select {...register('lancheId')} className="!bg-bg border-none">
                        <option value="">Apenas os ingressos</option>
                        {itensBomboniere.map(item => (
                          <option key={item.id} value={item.id}>{item.nome} (+ R$ {item.preco.toFixed(2)})</option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Card.Body>
                </Card>

              </div>
            </Col>

            {/* Resumo Sidebar */}
            <Col lg={4}>
              <Card className="premium-card bg-surface shadow-lg sticky-top !border-none" style={{ top: '100px' }}>
                <Card.Body className="p-10">
                  <h5 className="font-display font-bold text-xl mb-8 border-b border-border pb-6 text-text">Resumo do Pedido</h5>
                  <div className="font-body space-y-6">
                    <div className="space-y-4">
                      {watchedValues.ingressos?.map((ing, idx) => {
                        const preco = ing.tipo === 'Meia' ? precoIngressoBase / 2 : precoIngressoBase;
                        if (!ing.quantidade) return null;
                        return (
                          <div key={idx} className="flex justify-between text-sm">
                            <span className="text-text-muted">{ing.tipo} ({ing.quantidade}x)</span>
                            <span className="text-text font-bold">R$ {(ing.quantidade * preco).toFixed(2)}</span>
                          </div>
                        );
                      })}
                    </div>
                    
                    {lancheSelecionado && (
                      <div className="flex justify-between text-sm">
                        <span className="text-text-muted">Lanches/Combos ({lancheSelecionado.nome})</span>
                        <span className="text-text font-bold">R$ {valorLanche.toFixed(2)}</span>
                      </div>
                    )}


                    <div className="pt-8 border-t border-border mt-8">
                      <div className="flex justify-between items-end">
                        <span className="font-display font-bold uppercase text-[10px] tracking-widest text-text-muted">Total a Pagar</span>
                        <span className="text-4xl font-display font-extrabold text-accent">R$ {valorTotal.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12">
                    <Button 
                      className="btn-cinematic w-full !py-4 shadow-xl shadow-accent/20" 
                      type="button"
                      onClick={handleOpenConfirm}
                    >
                      Confirmar e Finalizar
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Form>

        {/* Modal de Identificação Customizado */}
        <CineModal
          isOpen={showConfirmModal}
          onClose={() => setShowConfirmModal(false)}
          title="Identificação do Cliente"
          onConfirm={handleSubmit(onFinalSubmit)}
          confirmText="Finalizar Pagamento"
          isConfirming={isSubmitting}
        >
          <p className="text-text-muted text-sm mb-8 leading-relaxed">Para finalizar sua compra de <strong className="text-accent text-xl">R$ {valorTotal.toFixed(2)}</strong>, informe seu nome para o ingresso:</p>
          <div className="space-y-3">
            <label className="text-[10px] uppercase tracking-widest text-text-muted font-bold">Nome do Titular</label>
            <input 
              type="text"
              className="cinemodal-input"
              {...register('cliente')}
              placeholder="Digite seu nome completo"
              autoFocus
            />
            {errors.cliente && <p className="text-danger text-xs mt-2">{errors.cliente.message}</p>}
          </div>
        </CineModal>

        {/* Modal de Alerta/Erro */}
        {alertConfig && (
          <CineModal
            isOpen={alertConfig.isOpen}
            onClose={() => setAlertConfig(null)}
            title={alertConfig.title}
            confirmText="OK"
            onConfirm={() => setAlertConfig(null)}
          >
            <p className="text-text-muted mb-0">{alertConfig.message}</p>
          </CineModal>
        )}
      </Container>
    </div>
  );
}
