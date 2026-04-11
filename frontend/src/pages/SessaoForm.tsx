import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { sessaoSchema, SessaoFormData } from '../schemas';
import { api } from '../services/api';
import { Filme, Sala } from '../types';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { CineModal } from '../components/CineModal';

export function SessaoForm() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isEditing = !!id;

  const [filmes, setFilmes] = useState<Filme[]>([]);
  const [salas, setSalas] = useState<Sala[]>([]);

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<SessaoFormData>({
    resolver: zodResolver(sessaoSchema),
  });

  const [modalConfig, setModalConfig] = useState<{
    isOpen: boolean, 
    title: string, 
    message: string, 
    type: 'success' | 'error',
    onClose?: () => void
  } | null>(null);

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
      // horario vem como ISO (ex: "2026-04-10T19:00:00.000Z"), separamos para os dois campos do form
      const dt = new Date(sessao.horario);
      const dataStr = dt.toISOString().split('T')[0]; // "YYYY-MM-DD"
      const horarioStr = dt.toTimeString().substring(0, 5); // "HH:mm"
      setValue('data', dataStr);
      setValue('horario', horarioStr);
      setValue('valorIngresso', sessao.valorIngresso);
    } catch (error) {
      console.error(error);
      setModalConfig({
        isOpen: true,
        title: 'Erro de Carregamento',
        message: 'Não foi possível carregar os dados da sessão.',
        type: 'error'
      });
    }
  };

  const handleSuccessModal = (message: string) => {
    setModalConfig({
      isOpen: true,
      title: 'Sucesso',
      message: message,
      type: 'success',
      onClose: () => navigate('/admin/sessoes')
    });

    setTimeout(() => {
      setModalConfig(null);
      document.body.style.overflow = 'unset';
      navigate('/admin/sessoes');
    }, 2500);
  };

  const onSubmit = async (formData: SessaoFormData) => {
    try {
      // Composição da data ISO conforme instrução sênior
      const combinedDateTime = new Date(`${formData.data}T${formData.horario}`);
      
      const payload = {
        horario: combinedDateTime.toISOString(),
        valorIngresso: formData.valorIngresso,
        salaId: Number(formData.salaId),
        filmeId: Number(formData.filmeId),
        cinemaId: 1, // Cinema fixo ID 1
      };

      if (isEditing) {
        await api.updateSessao(id!, payload as any);
        handleSuccessModal('Sessão atualizada com sucesso!');
      } else {
        await api.createSessao(payload as any);
        handleSuccessModal('Sessão cadastrada com sucesso!');
      }
    } catch (error: any) {
      console.error(error);
      setModalConfig({
        isOpen: true,
        title: 'Erro ao Salvar',
        message: error.message || 'Houve um problema ao salvar as alterações.',
        type: 'error'
      });
    }
  };

  return (
    <Container className="py-12">
      <div className="mb-12 text-center">
        <h2 className="admin-page-title mb-8">{isEditing ? 'Editar Sessão' : 'Nova Sessão'}</h2>
      </div>

      <div className="premium-card p-12 max-w-4xl mx-auto bg-surface shadow-md">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="mb-8 g-4">
            <Form.Group as={Col} md="6" controlId="filmeId">
              <Form.Label>Filme</Form.Label>
              <Form.Select
                {...register('filmeId', { valueAsNumber: true })}
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
                {...register('salaId', { valueAsNumber: true })}
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
                className="form-control-lg !bg-bg border-none"
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
                className="form-control-lg !bg-bg border-none"
              />
              <Form.Control.Feedback type="invalid">
                {errors.horario?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="mb-12 g-4">
             <Form.Group as={Col} md="6" controlId="valorIngresso">
              <Form.Label>Valor do Ingresso (R$)</Form.Label>
              <Form.Control
                type="number"
                step="0.01"
                {...register('valorIngresso', { valueAsNumber: true })}
                isInvalid={!!errors.valorIngresso}
                className="form-control-lg !bg-bg border-none"
              />
              <Form.Control.Feedback type="invalid">
                {errors.valorIngresso?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6">
              <Form.Label>Cinema</Form.Label>
              <Form.Control
                type="text"
                value="CineWeb"
                disabled
                className="bg-bg border-none text-text-muted"
              />
            </Form.Group>
          </Row>

          <div className="d-flex gap-4 justify-content-end mt-8">
            <Button variant="link" className="text-text-muted no-underline hover:text-text font-bold text-xs uppercase tracking-widest" onClick={() => navigate('/admin/sessoes')}>
              Cancelar
            </Button>
            <Button className="btn-cinematic" type="submit">
              Salvar Sessão
            </Button>
          </div>
        </Form>
      </div>

      {modalConfig && (
        <CineModal
          isOpen={modalConfig.isOpen}
          onClose={() => {
            if (modalConfig.onClose) modalConfig.onClose();
            setModalConfig(null);
          }}
          title={modalConfig.title}
          confirmText="OK"
          onConfirm={() => {
            if (modalConfig.onClose) modalConfig.onClose();
            setModalConfig(null);
          }}
        >
          <p className="text-text-muted mb-0">{modalConfig.message}</p>
        </CineModal>
      )}
    </Container>
  );
}
