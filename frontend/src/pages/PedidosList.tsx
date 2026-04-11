import React, { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Pedido } from '../types';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CineModal } from '../components/CineModal';

export function PedidosList() {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [pedidoToDelete, setPedidoToDelete] = useState<number | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const pedidosData = await api.getPedidos();
      setPedidos(pedidosData || []);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpenDeleteModal = (id: number) => {
    setPedidoToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (pedidoToDelete === null) return;
    
    setIsDeleting(true);
    try {
      await api.deletePedido(String(pedidoToDelete));
      loadData();
    } catch (error) {
      console.error(error);
    } finally {
      setIsDeleting(false);
      setIsDeleteModalOpen(false);
      setPedidoToDelete(null);
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
          <h2 className="admin-page-title mb-8">Histórico de Pedidos</h2>
          <div className="flex justify-center">
            <Link to="/pedidos/novo" className="btn-cinematic">
              <i className="bi bi-ticket-perforated me-2"></i>Novo Pedido
            </Link>
          </div>
        </div>

        <div className="premium-card p-10 overflow-hidden bg-surface shadow-md border-none">
          <Table hover responsive className="mb-0 border-none">
            <thead>
              <tr className="border-b border-border">
                <th className="font-display py-6 text-text-muted uppercase text-[10px] tracking-widest border-0">Data & Cliente</th>
                <th className="font-display py-6 text-text-muted uppercase text-[10px] tracking-widest border-0">Filme & Itens</th>
                <th className="font-display py-6 text-text-muted uppercase text-[10px] tracking-widest border-0">Total</th>
                <th className="font-display py-6 text-text-muted uppercase text-[10px] tracking-widest border-0 text-center" style={{ width: '150px' }}>Ações</th>
              </tr>
            </thead>
            <tbody className="font-body border-0">
              {pedidos.map((pedido) => {
                const filmeNome = pedido.ingressos?.[0]?.sessao?.filme?.titulo;
                const lanchesNomes = pedido.lancheCombos?.map(l => l.nome).join(', ');

                return (
                  <tr key={pedido.id} className="border-b border-border/50 last:border-0 hover:bg-bg transition-colors text-text">
                    <td className="align-middle py-6 border-0">
                      <span className="text-text-muted text-xs block mb-1">
                        {new Date(pedido.dataPedido).toLocaleDateString('pt-BR')}
                      </span>
                      <span className="font-bold text-text text-base leading-tight">{pedido.cliente}</span>
                    </td>
                    <td className="align-middle py-6 border-0">
                      <div className="flex items-center gap-2 mb-1">
                        <i className="bi bi-film text-accent/40 text-xs"></i>
                        <span className="font-semibold text-text/80 text-sm">{filmeNome || 'Bomboniere Apenas'}</span>
                      </div>
                      <span className="text-[11px] text-text-muted italic leading-none block">
                        {lanchesNomes ? `Itens: ${lanchesNomes}` : `${pedido.ingressos?.length ?? 0}x Ingressos`}
                      </span>
                    </td>
                    <td className="align-middle py-6 border-0 font-display font-extrabold text-text text-lg">
                      R$ {pedido.valorTotal.toFixed(2)}
                    </td>
                    <td className="align-middle py-6 border-0">
                      <div className="flex justify-center gap-4">
                        <Link to={`/admin/pedidos/editar/${pedido.id}`} className="text-text/30 hover:text-text transition-colors">
                          <i className="bi bi-pencil-square fs-5"></i>
                        </Link>
                        <button 
                          className="text-text/10 hover:text-accent transition-colors bg-transparent border-0" 
                          onClick={() => handleOpenDeleteModal(pedido.id)}
                        >
                          <i className="bi bi-trash3-fill fs-5"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
              {pedidos.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center py-24">
                    <i className="bi bi-inbox text-5xl text-text/5 mb-4 block"></i>
                    <p className="text-text-muted font-display uppercase tracking-widest text-xs">Nenhum registro de venda encontrado.</p>
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </Container>

      <CineModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="Confirmar Exclusão"
        onConfirm={confirmDelete}
        confirmText="Excluir Pedido"
        isConfirming={isDeleting}
      >
        <p className="text-text-muted mb-0">Deseja excluir este pedido permanentemente do histórico?</p>
      </CineModal>
    </div>
  );
}
