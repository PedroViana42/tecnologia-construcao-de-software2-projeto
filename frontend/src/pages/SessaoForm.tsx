import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { sessaoSchema, SessaoFormData } from '../schemas';
import { api } from '../services/api';
import { Filme, Sala } from '../types';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

export function SessaoForm() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isEditing = !!id;

  const [filmes, setFilmes] = useState<Filme[]>([]);
  const [salas, setSalas] = useState<Sala[]>([]);

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<SessaoFormData>({
    resolver: zodResolver(sessaoSchema),
  });

  useEffect(() => {
    loadOptions();
    if (isEditing) {
      loadSessao();
    }
  }, [id]);

  const loadOptions = async () => {
    const [filmesData, salasData] = await Promise.all([
      api.getFilmes(),
      api.getSalas(),
    ]);
    setFilmes(filmesData);
    setSalas(salasData);
  };

  const loadSessao = async () => {
    try {
      const sessao = await api.getSessao(id!);
      setValue('filmeId', sessao.filmeId);
      setValue('salaId', sessao.salaId);
      setValue('data', sessao.data);
      setValue('horario', sessao.horario);
    } catch (error) {
      console.error(error);
      alert('Erro ao carregar sessão');
    }
  };

  const onSubmit = async (data: SessaoFormData) => {
    try {
      if (isEditing) {
        await api.updateSessao(id!, data as any);
      } else {
        await api.createSessao(data as any);
      }
      navigate('/sessoes');
    } catch (error) {
      console.error(error);
      alert('Erro ao salvar sessão');
    }
  };

  return (
    <Container>
      <div className="mb-12 text-center">
        <h2 className="marquee-title">{isEditing ? 'Editar Sessão' : 'Nova Sessão'}</h2>
      </div>

      <div className="glass-card p-12 max-w-4xl mx-auto">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="mb-8 g-4">
            <Form.Group as={Col} md="6" controlId="filmeId">
              <Form.Label>Filme</Form.Label>
              <Form.Select
                {...register('filmeId')}
                isInvalid={!!errors.filmeId}
              >
                <option value="">Selecione um filme</option>
                {filmes.map((f) => (
                  <option key={f.id} value={f.id}>{f.titulo}</option>
                ))}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.filmeId?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="salaId">
              <Form.Label>Sala</Form.Label>
              <Form.Select
                {...register('salaId')}
                isInvalid={!!errors.salaId}
              >
                <option value="">Selecione uma sala</option>
                {salas.map((s) => (
                  <option key={s.id} value={s.id}>{s.numero} ({s.capacidade} lugares)</option>
                ))}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                {errors.salaId?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-12 g-4">
            <Form.Group as={Col} md="6" controlId="data">
              <Form.Label>Data</Form.Label>
              <Form.Control
                type="date"
                {...register('data')}
                isInvalid={!!errors.data}
              />
              <Form.Control.Feedback type="invalid">
                {errors.data?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="horario">
              <Form.Label>Horário</Form.Label>
              <Form.Control
                type="time"
                {...register('horario')}
                isInvalid={!!errors.horario}
              />
              <Form.Control.Feedback type="invalid">
                {errors.horario?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <div className="d-flex gap-4 justify-content-end">
            <Button variant="outline-secondary" className="rounded-full font-bold border-2 text-white/60 hover:text-white" onClick={() => navigate('/sessoes')}>
              Cancelar
            </Button>
            <Button className="btn-cinematic" type="submit">
              Salvar Sessão
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}
