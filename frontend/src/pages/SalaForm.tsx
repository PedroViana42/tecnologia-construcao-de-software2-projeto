import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { salaSchema, SalaFormData } from '../schemas';
import { api } from '../services/api';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

export function SalaForm() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isEditing = !!id;

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<SalaFormData>({
    resolver: zodResolver(salaSchema),
  });

  useEffect(() => {
    if (isEditing) {
      loadSala();
    }
  }, [id]);

  const loadSala = async () => {
    try {
      const sala = await api.getSala(id!);
      setValue('numero', sala.numero);
      setValue('capacidade', sala.capacidade);
    } catch (error) {
      console.error(error);
      alert('Erro ao carregar sala');
    }
  };

  const onSubmit = async (data: SalaFormData) => {
    try {
      if (isEditing) {
        await api.updateSala(id!, data as any);
      } else {
        await api.createSala(data as any);
      }
      navigate('/salas');
    } catch (error) {
      console.error(error);
      alert('Erro ao salvar sala');
    }
  };

  return (
    <Container>
      <div className="mb-5 text-center">
        <h2 className="marquee-title">{isEditing ? 'Editar Sala' : 'Nova Sala'}</h2>
      </div>

      <div className="card-retro p-5 ticket-shape max-w-2xl mx-auto">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="mb-4">
            <Form.Group as={Col} md="6" controlId="numero">
              <Form.Label className="font-bold uppercase text-xs tracking-widest">Número da Sala</Form.Label>
              <Form.Control
                type="text"
                {...register('numero')}
                isInvalid={!!errors.numero}
                className="bg-transparent border-[#C5A059] text-[#0A192F] font-typewriter"
              />
              <Form.Control.Feedback type="invalid">
                {errors.numero?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="capacidade">
              <Form.Label className="font-bold uppercase text-xs tracking-widest">Capacidade Máxima</Form.Label>
              <Form.Control
                type="number"
                {...register('capacidade', { valueAsNumber: true })}
                isInvalid={!!errors.capacidade}
                className="bg-transparent border-[#C5A059] text-[#0A192F] font-typewriter"
              />
              <Form.Control.Feedback type="invalid">
                {errors.capacidade?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <div className="d-flex gap-3">
            <Button variant="outline-secondary" className="font-bold border-2" onClick={() => navigate('/salas')}>
              Cancelar
            </Button>
            <Button className="btn-retro" type="submit">
              Salvar Sala
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}
