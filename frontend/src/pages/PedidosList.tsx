import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Pedido, Sessao, Filme, Lanche, Combo } from '../types';
import { Container, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function PedidosList() {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [sessoes, setSessoes] = useState<Record<string, Sessao>>({});
  const [filmes, setFilmes] = useState<Record<string, Filme>>({});
  const [lanches, setLanches] = useState<Record<string, Lanche>>({});
  const [combos, setCombos] = useState<Record<string, Combo>>({});

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const [pedidosData, sessoesData, filmesData, lanchesData, combosData] = await Promise.all([
      api.getPedidos(),
      api.getSessoes(),
      api.getFilmes(),
      api.getLanches(),
      api.getCombos(),
    ]);

    setPedidos(pedidosData);
    setSessoes(sessoesData.reduce((acc, s) => ({ ...acc, [s.id]: s }), {}));
    setFilmes(filmesData.reduce((acc, f) => ({ ...acc, [f.id]: f }), {}));
    setLanches(lanchesData.reduce((acc, l) => ({ ...acc, [l.id]: l }), {}));
    setCombos(combosData.reduce((acc, c) => ({ ...acc, [c.id]: c }), {}));
  };

  const handleDelete = async (id: string) => {
    if (confirm('Deseja excluir este pedido?')) {
      await api.deletePedido(id);
      loadData();
    }
  };

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center mb-12">
        <h2 className="marquee-title mb-0">Pedidos Realizados</h2>
        <Link to="/pedidos/novo" className="btn-cinematic">
          <i className="bi bi-ticket-perforated me-2"></i>Novo Pedido
        </Link>
      </div>

      <div className="glass-card p-8 overflow-hidden">
        <Table hover responsive className="mb-0">
          <thead>
            <tr>
              <th className="font-display">Data</th>
              <th className="font-display">Filme</th>
              <th className="font-display">Ingressos</th>
              <th className="font-display">Lanche/Combo</th>
              <th className="font-display">Total</th>
              <th className="font-display" style={{ width: '120px' }}>Ações</th>
            </tr>
          </thead>
          <tbody className="font-body">
            {pedidos.map((pedido) => {
              const sessao = sessoes[pedido.sessaoId];
              const filme = sessao ? filmes[sessao.filmeId] : null;
              const lanche = pedido.lancheId ? lanches[pedido.lancheId] : null;
              const combo = pedido.comboId ? combos[pedido.comboId] : null;

              return (
                <tr key={pedido.id} className="border-white/5">
                  <td className="align-middle text-white/60">{new Date(pedido.dataPedido).toLocaleDateString('pt-BR')}</td>
                  <td className="align-middle">
                    <div className="flex items-center gap-2">
                      <i className="bi bi-film text-accent"></i>
                      <span className="font-bold">{filme?.titulo || 'N/A'}</span>
                    </div>
                  </td>
                  <td className="align-middle text-white/80">{pedido.quantidadeIngressos}x {pedido.tipoIngresso}</td>
                  <td className="align-middle text-white/60">
                    {lanche?.nome || combo?.nome || '-'}
                  </td>
                  <td className="align-middle text-accent font-extrabold">R$ {pedido.valorTotal.toFixed(2)}</td>
                  <td>
                    <div className="d-flex gap-2">
                      <Link to={`/pedidos/editar/${pedido.id}`} className="btn-outline-cinematic !px-3 !py-1 !text-xs">
                        <i className="bi bi-pencil"></i>
                      </Link>
                      <Button variant="outline-danger" className="rounded-full !px-3 !py-1 border-2" onClick={() => handleDelete(pedido.id)}>
                        <i className="bi bi-trash"></i>
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
            {pedidos.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center py-12">
                  <i className="bi bi-inbox text-4xl text-white/10 mb-4 block"></i>
                  <p className="text-white/40 font-display uppercase tracking-widest text-xs">Nenhum pedido realizado.</p>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}
