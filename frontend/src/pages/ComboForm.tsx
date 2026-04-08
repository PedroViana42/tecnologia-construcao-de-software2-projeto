import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { comboSchema, ComboFormData } from '../schemas';
import { api } from '../services/api';
import { Lanche } from '../types';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

export function ComboForm() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isEditing = !!id;

  const [lanches, setLanches] = useState<Lanche[]>([]);

  const { register, handleSubmit, setValue, control, formState: { errors } } = useForm<ComboFormData>({
    resolver: zodResolver(comboSchema),
    defaultValues: {
      lanchesIds: []
    }
  });

  useEffect(() => {
    loadData();
  }, [id]);

  const loadData = async () => {
    try {
      const lanchesData = await api.getLanches();
      setLanches(lanchesData);

      if (isEditing) {
        const combo = await api.getCombo(id!);
        setValue('nome', combo.nome);
        setValue('preco', combo.preco);
        setValue('lanchesIds', combo.lanchesIds);
      }
    } catch (error) {
      console.error(error);
      alert('Erro ao carregar dados');
    }
  };

  const onSubmit = async (data: ComboFormData) => {
    try {
      if (isEditing) {
        await api.updateCombo(id!, data as any);
      } else {
        await api.createCombo(data as any);
      }
      navigate('/combos');
    } catch (error) {
      console.error(error);
      alert('Erro ao salvar combo');
    }
  };

  return (
    <Container>
      <div className="mb-5 text-center">
        <h2 className="marquee-title">{isEditing ? 'Editar Combo' : 'Novo Combo'}</h2>
      </div>

      <div className="card-retro p-5 ticket-shape">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="mb-4">
            <Form.Group as={Col} md="6" controlId="nome">
              <Form.Label className="font-bold uppercase text-xs tracking-widest">Nome do Combo</Form.Label>
              <Form.Control
                type="text"
                {...register('nome')}
                isInvalid={!!errors.nome}
                className="bg-transparent border-[#C5A059] text-[#0A192F] font-typewriter"
              />
              <Form.Control.Feedback type="invalid">
                {errors.nome?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="preco">
              <Form.Label className="font-bold uppercase text-xs tracking-widest">Preço (R$)</Form.Label>
              <Form.Control
                type="number"
                step="0.01"
                {...register('preco', { valueAsNumber: true })}
                isInvalid={!!errors.preco}
                className="bg-transparent border-[#C5A059] text-[#0A192F] font-typewriter"
              />
              <Form.Control.Feedback type="invalid">
                {errors.preco?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Form.Group className="mb-5">
            <Form.Label className="font-bold uppercase text-xs tracking-widest">Selecione os Lanches</Form.Label>
            <div className="border-2 border-[#C5A059] p-4 rounded bg-transparent">
              <Controller
                name="lanchesIds"
                control={control}
                render={({ field }) => (
                  <Row xs={1} md={2} lg={3} className="g-3">
                    {lanches.map(lanche => (
                      <Col key={lanche.id}>
                        <Form.Check
                          type="checkbox"
                          id={`lanche-${lanche.id}`}
                          label={`${lanche.nome} (R$ ${lanche.preco.toFixed(2)})`}
                          value={lanche.id}
                          checked={field.value.includes(lanche.id)}
                          className="font-typewriter"
                          onChange={(e) => {
                            const valueCopy = [...field.value];
                            if (e.target.checked) {
                              valueCopy.push(lanche.id);
                            } else {
                              const index = valueCopy.indexOf(lanche.id);
                              if (index > -1) valueCopy.splice(index, 1);
                            }
                            field.onChange(valueCopy);
                          }}
                        />
                      </Col>
                    ))}
                  </Row>
                )}
              />
            </div>
            {errors.lanchesIds && (
              <div className="text-danger mt-1 small">
                {errors.lanchesIds.message}
              </div>
            )}
          </Form.Group>

          <div className="d-flex gap-3">
            <Button variant="outline-secondary" className="font-bold border-2" onClick={() => navigate('/combos')}>
              Cancelar
            </Button>
            <Button className="btn-retro" type="submit">
              Salvar Combo
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}
