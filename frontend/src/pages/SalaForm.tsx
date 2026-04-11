import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { salaSchema, SalaFormData } from '../schemas';
import { api } from '../services/api';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { CineModal } from '../components/CineModal';



export function SalaForm() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isEditing = !!id;

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<SalaFormData>({
    resolver: zodResolver(salaSchema),
  });

  const [modalConfig, setModalConfig] = useState<{
    isOpen: boolean, 
    title: string, 
    message: string, 
    type: 'success' | 'error',
    onClose?: () => void
  } | null>(null);

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
      setModalConfig({
        isOpen: true,
        title: 'Erro de Carregamento',
        message: 'Não foi possível carregar os dados da sala.',
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
      onClose: () => navigate('/admin/salas')
    });

    setTimeout(() => {
      setModalConfig(null);
      document.body.style.overflow = 'unset';
      navigate('/admin/salas');
    }, 2500);
  };

  const onSubmit = async (data: SalaFormData) => {
    try {
      const payload = { ...data, cinemaId: 1 };
      if (isEditing) {
        await api.updateSala(id!, payload as any);
        handleSuccessModal('Sala atualizada com sucesso!');
      } else {
        await api.createSala(payload as any);
        handleSuccessModal('Sala cadastrada com sucesso!');
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
        <h2 className="admin-page-title mb-8">{isEditing ? 'Editar Sala' : 'Nova Sala'}</h2>
      </div>

      <div className="premium-card p-12 max-w-2xl mx-auto bg-surface shadow-md">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="mb-4">
            <Form.Group as={Col} md="6" controlId="numero">
              <Form.Label className="font-bold uppercase text-xs tracking-widest">Número da Sala</Form.Label>
              <Form.Control
                type="number"
                {...register('numero', { valueAsNumber: true })}
                isInvalid={!!errors.numero}
                className="form-control-lg !bg-bg border-none"
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
                className="form-control-lg !bg-bg border-none"
              />
              <Form.Control.Feedback type="invalid">
                {errors.capacidade?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <div className="d-flex gap-4 justify-content-end mt-8">
            <Button variant="link" className="text-text-muted no-underline hover:text-text font-bold text-xs uppercase tracking-widest" onClick={() => navigate('/admin/salas')}>
              Cancelar
            </Button>
            <Button className="btn-cinematic" type="submit">
              Salvar Sala
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
