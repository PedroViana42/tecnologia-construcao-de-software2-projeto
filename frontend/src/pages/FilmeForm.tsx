import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { filmeSchema, FilmeFormData } from '../schemas';
import { api } from '../services/api';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Container, Row, Col, InputGroup } from 'react-bootstrap';
import { CineModal } from '../components/CineModal';


import { Genero } from '../types';

export function FilmeForm() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isEditing = !!id;

  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<FilmeFormData>({
    resolver: zodResolver(filmeSchema),
  });

  console.log("DEBUG: react-hook-form watch function is present:", !!watch);

  const [modalConfig, setModalConfig] = useState<{
    isOpen: boolean, 
    title: string, 
    message: string, 
    type: 'success' | 'error',
    onClose?: () => void
  } | null>(null);
  
  const [generos, setGeneros] = useState<Genero[]>([]);
  const [isGeneroModalOpen, setIsGeneroModalOpen] = useState(false);
  const [newGeneroNome, setNewGeneroNome] = useState('');
  const [generoToEdit, setGeneroToEdit] = useState<Genero | null>(null);
  const [isSavingGenero, setIsSavingGenero] = useState(false);
  const [generoError, setGeneroError] = useState<string | null>(null);

  const watchedGeneroId = watch('generoId');

  useEffect(() => {
    loadInitialData();
  }, [id]);

  const loadInitialData = async () => {
    await loadGeneros();
    if (isEditing) {
      await loadFilme();
    }
  };

  const loadGeneros = async () => {
    try {
      const data = await api.getGeneros();
      setGeneros(data);
    } catch (error) {
      console.error("Erro ao carregar gêneros:", error);
    }
  };

  const loadFilme = async () => {
    try {
      const filme = await api.getFilme(id!);
      setValue('titulo', filme.titulo);
      setValue('sinopse', filme.sinopse);
      setValue('classificacao', filme.classificacaoEtaria);
      setValue('duracao', filme.duracao);
      setValue('generoId', filme.generoId);
      setValue('dataLancamento', filme.dataLancamento ? new Date(filme.dataLancamento).toISOString().split('T')[0] : '');
    } catch (error) {
      console.error(error);
      setModalConfig({
        isOpen: true,
        title: 'Erro de Carregamento',
        message: 'Não foi possível carregar os dados do filme.',
        type: 'error'
      });
    }
  };

  const handleSaveGenero = async () => {
    if (!newGeneroNome.trim()) {
      setGeneroError("O nome do gênero não pode estar vazio.");
      return;
    }

    setIsSavingGenero(true);
    setGeneroError(null);
    try {
      if (generoToEdit) {
        const updated = await api.updateGenero(generoToEdit.id, { nome: newGeneroNome });
        setGeneros(prev => prev.map(g => g.id === updated.id ? updated : g));
        setIsGeneroModalOpen(false);
        setGeneroToEdit(null);
        setNewGeneroNome('');
      } else {
        const novoGenero = await api.createGenero({ nome: newGeneroNome });
        setGeneros(prev => [...prev, novoGenero]);
        setValue('generoId', novoGenero.id);
        setIsGeneroModalOpen(false);
        setNewGeneroNome('');
      }
    } catch (error: any) {
      console.error("Erro ao salvar gênero:", error);
      setGeneroError(error.message || "Não foi possível salvar o gênero. Verifique se ele já existe.");
    } finally {
      setIsSavingGenero(false);
    }
  };

  const openEditGenero = () => {
    const genre = generos.find(g => g.id === Number(watchedGeneroId));
    if (genre) {
      setGeneroToEdit(genre);
      setNewGeneroNome(genre.nome);
      setIsGeneroModalOpen(true);
    }
  };

  const openCreateGenero = () => {
    setGeneroToEdit(null);
    setNewGeneroNome('');
    setIsGeneroModalOpen(true);
  };

  const handleSuccessModal = (message: string) => {
    setModalConfig({
      isOpen: true,
      title: 'Sucesso',
      message: message,
      type: 'success',
      onClose: () => navigate('/admin/filmes')
    });

    setTimeout(() => {
      setModalConfig(null);
      document.body.style.overflow = 'unset';
      navigate('/admin/filmes');
    }, 2500);
  };

  const onSubmit = async (data: FilmeFormData) => {
    try {
      // Etapa 3: A Recepção (Backend)
      // Montamos o payload EXATAMENTE como o CreateFilmeDto espera.
      // Retiramos 'sinopse' (não existe no schema do banco) e renomeamos 'classificacao'.
      const dataIso = new Date(data.dataLancamento).toISOString();
      const payload = { 
        titulo: data.titulo,
        duracao: data.duracao,
        dataLancamento: dataIso,
        classificacaoEtaria: data.classificacao,
        generoId: Number(data.generoId)
      };
      if (isEditing) {
        await api.updateFilme(id!, payload as any);
        handleSuccessModal('Filme atualizado com sucesso!');
      } else {
        await api.createFilme(payload as any);
        handleSuccessModal('Filme cadastrado com sucesso!');
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

  const onError = (errors: any) => {
    console.log("ERROS DO ZOD:", errors);
  };

  return (
    <Container>
      <div className="mb-12 text-center">
        <h2 className="admin-page-title mb-8">{isEditing ? 'Editar Filme' : 'Novo Filme'}</h2>
      </div>

      <div className="premium-card p-12 max-w-4xl mx-auto bg-surface shadow-md">
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
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

            <Form.Group as={Col} md="6" controlId="generoId">
              <Form.Label>Gênero</Form.Label>
              <InputGroup>
                <Form.Select
                  {...register('generoId', { valueAsNumber: true })}
                  isInvalid={!!errors.generoId}
                  className="bg-bg border-none"
                >
                  <option value="">Selecione um gênero</option>
                  {generos.map(g => (
                    <option key={g.id} value={g.id}>{g.nome}</option>
                  ))}
                </Form.Select>
                <Button 
                  variant="outline-secondary" 
                  className="border-none bg-surface text-text-muted hover:text-accent font-bold text-[10px] uppercase tracking-widest px-3"
                  onClick={openCreateGenero}
                  title="Novo Gênero"
                >
                  <i className="bi bi-plus-lg"></i>
                </Button>
                {!!watchedGeneroId && (
                  <Button 
                    variant="outline-secondary" 
                    className="border-none bg-surface text-text-muted hover:text-blue-500 font-bold text-[10px] uppercase tracking-widest px-3"
                    onClick={openEditGenero}
                    title="Editar Gênero"
                  >
                    <i className="bi bi-pencil-fill"></i>
                  </Button>
                )}
              </InputGroup>
              <Form.Control.Feedback type="invalid">
                {errors.generoId?.message}
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

            <Form.Group as={Col} md="4" controlId="dataLancamento">
              <Form.Label>Data de Lançamento</Form.Label>
              <Form.Control
                type="date"
                {...register('dataLancamento')}
                isInvalid={!!errors.dataLancamento}
              />
              <Form.Control.Feedback type="invalid">
                {errors.dataLancamento?.message}
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
            <Button variant="link" className="text-text-muted no-underline hover:text-text font-bold text-xs uppercase tracking-widest" onClick={() => navigate('/admin/filmes')}>
              Cancelar
            </Button>
            <Button className="btn-cinematic" type="submit">
              Salvar Filme
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

      {/* Modal de Criação/Edição de Gênero */}
      <CineModal
        isOpen={isGeneroModalOpen}
        onClose={() => setIsGeneroModalOpen(false)}
        title={generoToEdit ? "Editar Gênero" : "Novo Gênero"}
        confirmText={generoToEdit ? "Atualizar Gênero" : "Salvar Gênero"}
        onConfirm={handleSaveGenero}
        isConfirming={isSavingGenero}
      >
        <div className="space-y-4">
          <p className="text-text-muted text-sm mb-6 leading-relaxed">
            {generoToEdit ? "Altere o nome do gênero cinematográfico:" : "Informe o nome do novo gênero cinematográfico:"}
          </p>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-text-muted font-bold">Nome do Gênero</label>
            <input 
              type="text"
              className="cinemodal-input"
              value={newGeneroNome}
              onChange={(e) => setNewGeneroNome(e.target.value)}
              placeholder="Ex: Ficção Científica, Suspense..."
              autoFocus
            />
            {generoError && <p className="text-danger text-xs mt-2">{generoError}</p>}
          </div>
        </div>
      </CineModal>
    </Container>
  );
}
