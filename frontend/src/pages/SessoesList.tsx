import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Sessao, Filme, Sala } from '../types';
import { Container, Button, Table, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CineModal } from '../components/CineModal';

export function SessoesList() {
  const [sessoes, setSessoes] = useState<Sessao[]>([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [sessaoToDelete, setSessaoToDelete] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const [modalConfig, setModalConfig] = useState<{isOpen: boolean, title: string, message: string} | null>(null);
  const [filmes, setFilmes] = useState<Record<string, Filme>>({});
  const [salas, setSalas] = useState<Record<string, Sala>>({});

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [selectedSessao, setSelectedSessao] = useState<Sessao | null>(null);
  const [tipoIngresso, setTipoIngresso] = useState<'Inteira' | 'Meia'>('Inteira');
  const [valorFinal, setValorFinal] = useState(40); // Base price 40

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [sessoesData, filmesData, salasData] = await Promise.all([
        api.getSessoes(),
        api.getFilmes(),
        api.getSalas(),
      ]);

      setSessoes(sessoesData || []);
      setFilmes(filmesData.reduce((acc, f) => ({ ...acc, [f.id]: f }), {}));
      setSalas(salasData.reduce((acc, s) => ({ ...acc, [s.id]: s }), {}));
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpenModal = (sessao: Sessao) => {
    setSelectedSessao(sessao);
    setTipoIngresso('Inteira');
    setValorFinal(40);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedSessao(null);
  };

  const handleTipoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const tipo = e.target.value as 'Inteira' | 'Meia';
    setTipoIngresso(tipo);
    setValorFinal(tipo === 'Meia' ? 20 : 40);
  };

  const handleVenderIngresso = async () => {
    if (!selectedSessao) return;

    try {
      await api.createIngresso({
        sessaoId: selectedSessao.id,
        tipo: tipoIngresso,
      });
      setModalConfig({ isOpen: true, title: 'Venda Concluída', message: 'Ingresso vendido com sucesso!' });
      handleCloseModal();
      loadData();
    } catch (error) {
      console.error(error);
      setModalConfig({ isOpen: true, title: 'Erro na Venda', message: 'Erro ao vender ingresso. Tente novamente.' });
    }
  };

  const handleOpenDeleteModal = (id: string) => {
    setSessaoToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!sessaoToDelete) return;
    
    setIsDeleting(true);
    try {
      await api.deleteSessao(sessaoToDelete);
      loadData();
    } catch (error) {
      console.error(error);
      setModalConfig({ isOpen: true, title: 'Erro na Exclusão', message: 'Erro ao excluir a sessão.' });
    } finally {
      setIsDeleting(false);
      setIsDeleteModalOpen(false);
      setSessaoToDelete(null);
    }
  };

  return (
    <div className="min-h-screen bg-bg pb-24">
      <Container className="py-12">
        <div className="flex justify-start mb-16">
          <Link to="/admin" className="back-link">
            <i className="bi bi-arrow-left"></i>
            Voltar para o Painel
          </Link>
        </div>

        <div className="text-center mb-16">
          <h2 className="admin-page-title mb-8">Programação Semanal</h2>
          <div className="flex justify-center">
            <Link to="/admin/sessoes/novo" className="btn-cinematic">
              <i className="bi bi-plus-lg me-2"></i>Novo Cadastro
            </Link>
          </div>
        </div>

        <div className="premium-card p-10 overflow-hidden bg-surface shadow-md border-none">
          <Table hover responsive className="mb-0 border-none">
            <thead>
              <tr className="border-b border-border">
                <th className="font-display py-6 text-text-muted uppercase text-[10px] tracking-widest border-0">Filme</th>
                <th className="font-display py-6 text-text-muted uppercase text-[10px] tracking-widest border-0">Sala & Horário</th>
                <th className="font-display py-6 text-text-muted uppercase text-[10px] tracking-widest border-0 text-center" style={{ width: '220px' }}>Ações</th>
              </tr>
            </thead>
            <tbody className="font-body border-0">
              {sessoes.map((sessao) => (
                <tr key={sessao.id} className="border-b border-border/50 last:border-0 hover:bg-bg transition-colors text-text">
                  <td className="align-middle py-6 border-0">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#f1f3f5] flex items-center justify-center shrink-0">
                        <i className="bi bi-film text-accent"></i>
                      </div>
                      <div>
                        <span className="font-bold text-text block text-base leading-tight mb-1">{filmes[sessao.filmeId]?.titulo || 'Filme não encontrado'}</span>
                        <span className="text-[10px] text-accent font-bold uppercase tracking-widest bg-accent/5 px-2 py-0.5 rounded-sm">{filmes[sessao.filmeId]?.classificacao || 'Livre'}</span>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle py-6 border-0">
                    <span className="text-text font-semibold block">Sala {salas[sessao.salaId]?.numero || 'N/A'}</span>
                    <span className="text-text-muted text-xs">
                      {new Date(sessao.horario).toLocaleDateString('pt-BR')} • {new Date(sessao.horario).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </td>
                  <td className="align-middle py-6 border-0">
                    <div className="flex justify-center items-center gap-4">
                      <button className="btn-cinematic !px-4 !py-1.5 !text-[11px]" onClick={() => handleOpenModal(sessao)}>
                        <i className="bi bi-cash-coin me-2"></i>Vender
                      </button>
                      <Link to={`/admin/sessoes/editar/${sessao.id}`} className="text-text/40 hover:text-text transition-colors">
                        <i className="bi bi-pencil-square fs-5"></i>
                      </Link>
                      <button 
                        className="text-text/20 hover:text-accent transition-colors bg-transparent border-0" 
                        onClick={() => handleOpenDeleteModal(sessao.id)}
                      >
                        <i className="bi bi-trash3-fill fs-5"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        <Modal show={showModal} onHide={handleCloseModal} centered className="font-body">
          <Modal.Header closeButton className="bg-surface border-b border-border text-text !py-6 shadow-sm">
            <Modal.Title className="font-display font-bold uppercase text-xs tracking-widest text-text-muted">Vender Ingresso Rápido</Modal.Title>
          </Modal.Header>
          <Modal.Body className="bg-bg p-10 text-text">
            {selectedSessao && (
              <div className="mb-8 p-8 bg-surface rounded-xl border border-border shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center">
                    <i className="bi bi-film text-accent text-2xl"></i>
                  </div>
                  <p className="mb-0 font-display font-bold text-xl text-text">{filmes[selectedSessao.filmeId]?.titulo}</p>
                </div>
                <div className="grid grid-cols-2 gap-6 text-[10px] text-text-muted uppercase tracking-widest border-t border-border pt-6">
                  <div>
                    <span className="block mb-2">Sala</span>
                    <span className="text-text font-bold text-sm">Sala {salas[selectedSessao.salaId]?.numero}</span>
                  </div>
                  <div>
                    <span className="block mb-2">Data e Horário</span>
                    <span className="text-text font-bold text-sm">
                      {new Date(selectedSessao.horario).toLocaleDateString('pt-BR')} • {new Date(selectedSessao.horario).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              </div>
            )}
            
            <Form.Group className="mb-8">
              <Form.Label className="form-label">Categoria do Ingresso</Form.Label>
              <Form.Select className="form-control-lg !bg-surface" value={tipoIngresso} onChange={handleTipoChange}>
                <option value="Inteira">Ingresso Inteira</option>
                <option value="Meia">Ingresso Meia-Entrada</option>
              </Form.Select>
            </Form.Group>

            <div className="flex justify-between items-end p-8 bg-accent/5 rounded-xl border border-accent/10 transition-all">
              <span className="font-display font-bold uppercase text-[10px] tracking-widest text-accent/60">Valor Total a Pagar</span>
              <span className="text-5xl font-display font-extrabold text-accent">R$ {valorFinal.toFixed(2)}</span>
            </div>
          </Modal.Body>
          <Modal.Footer className="bg-surface border-t border-border p-8">
            <Button variant="link" className="text-text-muted no-underline hover:text-text font-bold text-xs uppercase tracking-widest" onClick={handleCloseModal}>
              Cancelar
            </Button>
            <Button className="btn-cinematic !px-10 shadow-lg shadow-accent/20" onClick={handleVenderIngresso}>
              Confirmar e Imprimir
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>

      {/* Modal de Exclusão */}
      <CineModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="Confirmar Exclusão"
        onConfirm={confirmDelete}
        confirmText="Excluir Sessão"
        isConfirming={isDeleting}
      >
        <p className="text-text-muted mb-0">Tem certeza que deseja excluir esta sessão? Esta ação não poderá ser desfeita.</p>
      </CineModal>

      {/* Modal de Notificação Generalizado */}
      {modalConfig && (
        <CineModal
          isOpen={modalConfig.isOpen}
          onClose={() => setModalConfig(null)}
          title={modalConfig.title}
          confirmText="OK"
          onConfirm={() => setModalConfig(null)}
        >
          <p className="text-text-muted mb-0">{modalConfig.message}</p>
        </CineModal>
      )}
    </div>
  );
}
