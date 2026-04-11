import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Filme } from '../types';
import { Card, Col, Row, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { CineModal } from '../components/CineModal';

export function FilmesList() {
  const [filmes, setFilmes] = useState<Filme[]>([]);
  const location = useLocation();
  const isAdmin = location.pathname.includes('/admin');
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [filmeToDelete, setFilmeToDelete] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    loadFilmes();
  }, []);

  const loadFilmes = async () => {
    try {
      const data = await api.getFilmes();
      setFilmes(data || []);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpenDeleteModal = (id: string) => {
    setFilmeToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!filmeToDelete) return;
    
    setIsDeleting(true);
    try {
      await api.deleteFilme(filmeToDelete);
      loadFilmes();
    } catch (error) {
      console.error(error);
    } finally {
      setIsDeleting(false);
      setIsDeleteModalOpen(false);
      setFilmeToDelete(null);
    }
  };

  return (
    <div className="min-h-screen bg-bg pb-24">
      <Container className="py-12">
        {isAdmin && (
          <div className="flex justify-start mb-16">
            <Link to="/admin" className="back-link">
              <i className="bi bi-arrow-left"></i>
              Voltar para o Painel
            </Link>
          </div>
        )}

        <div className="text-center mb-16">
          <h2 className={isAdmin ? "admin-page-title mb-8" : "marquee-title mb-8"}>
            {isAdmin ? "Gerenciar Filmes" : "Filmes em Cartaz"}
          </h2>
          {isAdmin && (
            <div className="flex justify-center">
              <Link to="/admin/filmes/novo" className="btn-cinematic">
                <i className="bi bi-plus-lg me-2"></i>Novo Cadastro
              </Link>
            </div>
          )}
        </div>

        <Row xs={1} md={2} lg={3} className="g-10">
          {filmes.map((filme) => (
            <Col key={filme.id}>
              <Card className="premium-card h-100 bg-surface shadow-md hover:shadow-xl border-none">
                <Card.Body className="p-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-10 h-10 rounded-lg bg-[#f1f3f5] flex items-center justify-center shrink-0">
                      <i className="bi bi-film text-accent text-xl"></i>
                    </div>
                    <Card.Title className="font-display font-bold text-2xl mb-0 text-[#111111] leading-tight">{filme.titulo}</Card.Title>
                  </div>
                  
                  <Card.Subtitle className="mb-6 text-accent font-bold uppercase text-[10px] tracking-[0.25em]">
                    {typeof filme.genero === 'object' ? filme.genero?.nome : (filme.genero || 'Gênero')}
                  </Card.Subtitle>

                  <div className="space-y-4 text-sm text-text-muted mb-8">
                    <div className="flex items-center gap-3">
                      <i className="bi bi-info-circle text-accent/40"></i>
                      <span className="text-text/70"><strong>Classificação:</strong> {filme.classificacaoEtaria}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <i className="bi bi-clock text-accent/40"></i>
                      <span className="text-text/70"><strong>Duração:</strong> {filme.duracao} min</span>
                    </div>
                  </div>

                  {!isAdmin && (
                    <div className="mt-8">
                      <Link 
                        to="/comprar" 
                        state={{ filmeId: filme.id }}
                        className="btn-cinematic w-full flex items-center justify-center gap-2 !py-4"
                      >
                        <i className="bi bi-ticket-perforated"></i>
                        Comprar Ingresso
                      </Link>
                    </div>
                  )}
                </Card.Body>

                {isAdmin && (
                  <Card.Footer className="bg-bg/50 border-t border-border p-8 flex justify-center gap-8">
                    <Link to={`/admin/filmes/editar/${filme.id}`} className="text-text/60 hover:text-accent transition-colors flex items-center gap-2 no-underline text-xs font-bold uppercase tracking-widest">
                      <i className="bi bi-pencil-square"></i>
                      Editar
                    </Link>
                    <button 
                      className="text-text/40 hover:text-accent transition-colors flex items-center gap-2 bg-transparent border-0 text-xs font-bold uppercase tracking-widest" 
                      onClick={() => handleOpenDeleteModal(filme.id)}
                    >
                      <i className="bi bi-trash3-fill"></i>
                      Excluir
                    </button>
                  </Card.Footer>
                )}
              </Card>
            </Col>
          ))}
          {filmes.length === 0 && (
            <Col xs={12}>
              <div className="premium-card p-24 text-center bg-surface shadow-sm border border-border/10">
                <i className="bi bi-camera-reels text-6xl text-text/5 mb-6 block"></i>
                <p className="text-text-muted font-display uppercase tracking-widest text-xs">Nenhum filme cadastrado no catálogo.</p>
              </div>
            </Col>
          )}
        </Row>
      </Container>

      <CineModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="Confirmar Exclusão"
        onConfirm={confirmDelete}
        confirmText="Excluir Filme"
        isConfirming={isDeleting}
      >
        <p className="text-text-muted mb-0">
          <strong className="text-accent">Atenção:</strong> A exclusão deste filme removerá permanentemente todas as <strong>sessões</strong> e <strong>ingressos</strong> vinculados. Deseja continuar?
        </p>
      </CineModal>
    </div>
  );
}
