import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { filmeSchema, FilmeFormData } from '../schemas';
import { api } from '../services/api';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

export function FilmeForm() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isEditing = !!id;

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FilmeFormData>({
    resolver: zodResolver(filmeSchema),
  });

  useEffect(() => {
    if (isEditing) {
      loadFilme();
    }
  }, [id]);

  const loadFilme = async () => {
    try {
      const filme = await api.getFilme(id!);
      setValue('titulo', filme.titulo);
      setValue('sinopse', filme.sinopse);
      setValue('classificacao', filme.classificacao);
      setValue('duracao', filme.duracao);
      setValue('genero', filme.genero);
      setValue('datasExibicao', filme.datasExibicao);
    } catch (error) {
      console.error(error);
      alert('Erro ao carregar filme');
    }
  };

  const onSubmit = async (data: FilmeFormData) => {
    try {
      if (isEditing) {
        await api.updateFilme(id!, data as any);
      } else {
        await api.createFilme(data as any);
      }
      navigate('/filmes');
    } catch (error) {
      console.error(error);
      alert('Erro ao salvar filme');
    }
  };

  return (
    <Container>
      <div className="mb-12 text-center">
        <h2 className="marquee-title">{isEditing ? 'Editar Filme' : 'Novo Filme'}</h2>
      </div>

      <div className="glass-card p-12 max-w-4xl mx-auto">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="mb-8 g-4">
            <Form.Group as={Col} md="6" controlId="titulo">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                {...register('titulo')}
                isInvalid={!!errors.titulo}
              />
              <Form.Control.Feedback type="invalid">
                {errors.titulo?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="genero">
              <Form.Label>Gênero</Form.Label>
              <Form.Control
                type="text"
                {...register('genero')}
                isInvalid={!!errors.genero}
              />
              <Form.Control.Feedback type="invalid">
                {errors.genero?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-8 g-4">
            <Form.Group as={Col} md="4" controlId="classificacao">
              <Form.Label>Classificação</Form.Label>
              <Form.Control
                type="text"
                {...register('classificacao')}
                isInvalid={!!errors.classificacao}
              />
              <Form.Control.Feedback type="invalid">
                {errors.classificacao?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="duracao">
              <Form.Label>Duração (minutos)</Form.Label>
              <Form.Control
                type="number"
                {...register('duracao', { valueAsNumber: true })}
                isInvalid={!!errors.duracao}
              />
              <Form.Control.Feedback type="invalid">
                {errors.duracao?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="datasExibicao">
              <Form.Label>Datas de Exibição</Form.Label>
              <Form.Control
                type="text"
                {...register('datasExibicao')}
                isInvalid={!!errors.datasExibicao}
              />
              <Form.Control.Feedback type="invalid">
                {errors.datasExibicao?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Form.Group className="mb-12" controlId="sinopse">
            <Form.Label>Sinopse</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              {...register('sinopse')}
              isInvalid={!!errors.sinopse}
            />
            <Form.Control.Feedback type="invalid">
              {errors.sinopse?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <div className="d-flex gap-4 justify-content-end">
            <Button variant="outline-secondary" className="rounded-full font-bold border-2 text-white/60 hover:text-white" onClick={() => navigate('/filmes')}>
              Cancelar
            </Button>
            <Button className="btn-cinematic" type="submit">
              Salvar Filme
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}
