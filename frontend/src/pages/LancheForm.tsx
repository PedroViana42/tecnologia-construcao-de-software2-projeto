import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { lancheSchema, LancheFormData } from '../schemas';
import { api } from '../services/api';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

export function LancheForm() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isEditing = !!id;

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<LancheFormData>({
    resolver: zodResolver(lancheSchema),
  });

  useEffect(() => {
    if (isEditing) {
      loadLanche();
    }
  }, [id]);

  const loadLanche = async () => {
    try {
      const lanche = await api.getLanche(id!);
      setValue('nome', lanche.nome);
      setValue('preco', lanche.preco);
      setValue('tipo', lanche.tipo);
    } catch (error) {
      console.error(error);
      alert('Erro ao carregar lanche');
    }
  };

  const onSubmit = async (data: LancheFormData) => {
    try {
      if (isEditing) {
        await api.updateLanche(id!, data as any);
      } else {
        await api.createLanche(data as any);
      }
      navigate('/lanches');
    } catch (error) {
      console.error(error);
      alert('Erro ao salvar lanche');
    }
  };

  return (
    <Container>
      <div className="mb-5 text-center">
        <h2 className="marquee-title">{isEditing ? 'Editar Lanche' : 'Novo Lanche'}</h2>
      </div>

      <div className="card-retro p-5 ticket-shape">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="mb-4">
            <Form.Group as={Col} md="4" controlId="nome">
              <Form.Label className="font-bold uppercase text-xs tracking-widest">Nome</Form.Label>
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

            <Form.Group as={Col} md="4" controlId="tipo">
              <Form.Label className="font-bold uppercase text-xs tracking-widest">Tipo</Form.Label>
              <Form.Control
                type="text"
                {...register('tipo')}
                isInvalid={!!errors.tipo}
                placeholder="Ex: Pipoca, Bebida, Doce"
                className="bg-transparent border-[#C5A059] text-[#0A192F] font-typewriter"
              />
              <Form.Control.Feedback type="invalid">
                {errors.tipo?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="preco">
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

          <div className="d-flex gap-3">
            <Button variant="outline-secondary" className="font-bold border-2" onClick={() => navigate('/lanches')}>
              Cancelar
            </Button>
            <Button className="btn-retro" type="submit">
              Salvar Lanche
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}
