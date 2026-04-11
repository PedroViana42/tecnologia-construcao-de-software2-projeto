import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { LancheCombo } from '../types';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CineModal } from '../components/CineModal';

export function LanchesList() {
  const [lanches, setLanches] = useState<LancheCombo[]>([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [lancheToDelete, setLancheToDelete] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    loadLanches();
  }, []);

  const loadLanches = async () => {
    try {
      const data = await api.getLanches();
      setLanches(data || []);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpenDeleteModal = (id: string) => {
    setLancheToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!lancheToDelete) return;
    
    setIsDeleting(true);
    try {
      await api.deleteLanche(lancheToDelete);
      loadLanches();
    } catch (error) {
      console.error(error);
    } finally {
      setIsDeleting(false);
      setIsDeleteModalOpen(false);
      setLancheToDelete(null);
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
          <h2 className="admin-page-title mb-8">Itens da Bomboniere</h2>
          <div className="flex justify-center">
            <Link to="/admin/lanches/novo" className="btn-cinematic">
              <i className="bi bi-plus-lg me-2"></i>Novo Cadastro
            </Link>
          </div>
        </div>

        <div className="premium-card p-10 overflow-hidden bg-surface shadow-md border-none">
          <Table hover responsive className="mb-0 border-none">
            <thead>
              <tr className="border-b border-border">
                <th className="font-display py-6 text-text-muted uppercase text-[10px] tracking-widest border-0">Produto</th>
                <th className="font-display py-6 text-text-muted uppercase text-[10px] tracking-widest border-0">Descrição</th>
                <th className="font-display py-6 text-text-muted uppercase text-[10px] tracking-widest border-0">Preço</th>
                <th className="font-display py-6 text-text-muted uppercase text-[10px] tracking-widest border-0 text-center" style={{ width: '150px' }}>Ações</th>
              </tr>
            </thead>
            <tbody className="font-body border-0">
              {lanches.map((lanche) => (
                <tr key={lanche.id} className="border-b border-border/50 last:border-0 hover:bg-bg transition-colors text-text">
                  <td className="align-middle py-6 border-0">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#f1f3f5] flex items-center justify-center">
                        <i className="bi bi-cup-straw text-accent"></i>
                      </div>
                      <span className="font-bold text-text text-base">{lanche.nome}</span>
                    </div>
                  </td>
                  <td className="align-middle py-6 text-text-muted border-0 max-w-[300px] truncate leading-relaxed text-sm">{lanche.descricao}</td>
                  <td className="align-middle py-6 text-accent font-extrabold border-0 text-lg">R$ {lanche.preco.toFixed(2)}</td>
                  <td className="align-middle py-6 border-0">
                    <div className="flex justify-center gap-4">
                      <Link to={`/admin/lanches/editar/${lanche.id}`} className="text-text/30 hover:text-text transition-colors p-2">
                        <i className="bi bi-pencil-square fs-5"></i>
                      </Link>
                      <button 
                        className="text-text/10 hover:text-accent transition-colors p-2 bg-transparent border-0" 
                        onClick={() => handleOpenDeleteModal(lanche.id)}
                      >
                        <i className="bi bi-trash3-fill fs-5"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {lanches.length === 0 && (
            <div className="text-center py-20">
              <p className="text-text-muted italic">Nenhum item cadastrado.</p>
            </div>
          )}
        </div>
      </Container>

      <CineModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="Confirmar Exclusão"
        onConfirm={confirmDelete}
        confirmText="Excluir Item"
        isConfirming={isDeleting}
      >
        <p className="text-text-muted mb-0">Tem certeza que deseja excluir este item da bomboniere? Esta ação não poderá ser desfeita.</p>
      </CineModal>
    </div>
  );
}
