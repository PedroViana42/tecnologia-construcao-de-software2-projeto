import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { lancheComboSchema, LancheComboFormData } from '../schemas';
import { api } from '../services/api';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { CineModal } from '../components/CineModal';

export function LancheForm() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isEditing = !!id;

  const { register, handleSubmit, setValue, formState: { errors } } = useForm<LancheComboFormData>({
    resolver: zodResolver(lancheComboSchema),
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
      loadLanche();
    }
  }, [id]);

  const loadLanche = async () => {
    try {
      const lanche = await api.getLanche(id!);
      setValue('nome', lanche.nome);
      setValue('preco', lanche.preco);
      setValue('descricao', lanche.descricao);
    } catch (error) {
      console.error(error);
      setModalConfig({
        isOpen: true,
        title: 'Erro de Carregamento',
        message: 'Não foi possível carregar os dados do lanche.',
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
      onClose: () => navigate('/admin/lanches')
    });

    setTimeout(() => {
      setModalConfig(null);
      document.body.style.overflow = 'unset';
      navigate('/admin/lanches');
    }, 2500);
  };

  const onSubmit = async (data: LancheComboFormData) => {
    try {
      if (isEditing) {
        await api.updateLanche(id!, data as any);
        handleSuccessModal('Item atualizado com sucesso!');
      } else {
        await api.createLanche(data as any);
        handleSuccessModal('Item cadastrado com sucesso!');
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
        <h2 className="admin-page-title mb-8">{isEditing ? 'Editar Bomboniere' : 'Novo Item Bomboniere'}</h2>
      </div>

      <div className="premium-card p-12 max-w-4xl mx-auto bg-surface shadow-md">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="mb-4">
            <Form.Group as={Col} md="4" controlId="nome">
              <Form.Label className="font-bold uppercase text-xs tracking-widest">Nome</Form.Label>
              <Form.Control
                type="text"
                {...register('nome')}
                isInvalid={!!errors.nome}
                className="form-control-lg !bg-bg border-none"
              />
              <Form.Control.Feedback type="invalid">
                {errors.nome?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="descricao">
              <Form.Label className="font-bold uppercase text-xs tracking-widest">Descrição</Form.Label>
              <Form.Control
                type="text"
                {...register('descricao')}
                isInvalid={!!errors.descricao}
                placeholder="Ex: Pipoca grande com manteiga"
                className="form-control-lg !bg-bg border-none"
              />
              <Form.Control.Feedback type="invalid">
                {errors.descricao?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="preco">
              <Form.Label className="font-bold uppercase text-xs tracking-widest">Preço (R$)</Form.Label>
              <Form.Control
                type="number"
                step="0.01"
                {...register('preco', { valueAsNumber: true })}
                isInvalid={!!errors.preco}
                className="form-control-lg !bg-bg border-none"
              />
              <Form.Control.Feedback type="invalid">
                {errors.preco?.message}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <div className="d-flex gap-4 justify-content-end mt-8">
            <Button variant="link" className="text-text-muted no-underline hover:text-text font-bold text-xs uppercase tracking-widest" onClick={() => navigate('/admin/lanches')}>
              Cancelar
            </Button>
            <Button className="btn-cinematic" type="submit">
              Salvar Item
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
