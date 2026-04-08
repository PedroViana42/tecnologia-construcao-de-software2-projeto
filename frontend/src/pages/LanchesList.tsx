import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Lanche } from '../types';
import { Container, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function LanchesList() {
  const [lanches, setLanches] = useState<Lanche[]>([]);

  useEffect(() => {
    loadLanches();
  }, []);

  const loadLanches = async () => {
    const data = await api.getLanches();
    setLanches(data);
  };

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center mb-12">
        <h2 className="marquee-title mb-0">Cardápio de Lanches</h2>
        <Link to="/lanches/novo" className="btn-cinematic">
          <i className="bi bi-plus-lg me-2"></i>Novo Cadastro
        </Link>
      </div>

      <div className="glass-card p-8 overflow-hidden">
        <Table hover responsive className="mb-0">
          <thead>
            <tr>
              <th className="font-display">Nome</th>
              <th className="font-display">Tipo</th>
              <th className="font-display">Preço</th>
              <th className="font-display" style={{ width: '120px' }}>Ações</th>
            </tr>
          </thead>
          <tbody className="font-body">
            {lanches.map((lanche) => (
              <tr key={lanche.id} className="border-white/5">
                <td className="align-middle">
                  <div className="flex items-center gap-2">
                    <i className="bi bi-cup-straw text-accent"></i>
                    <span className="font-bold">{lanche.nome}</span>
                  </div>
                </td>
                <td className="align-middle text-white/60">{lanche.tipo}</td>
                <td className="align-middle text-accent font-extrabold">R$ {lanche.preco.toFixed(2)}</td>
                <td>
                  <div className="d-flex gap-2">
                    <Link to={`/lanches/editar/${lanche.id}`} className="btn-outline-cinematic !px-3 !py-1 !text-xs">
                      <i className="bi bi-pencil"></i>
                    </Link>
                    <Button variant="outline-danger" className="rounded-full !px-3 !py-1 border-2" onClick={async () => {
                      if (confirm('Tem certeza que deseja excluir este lanche?')) {
                        await api.deleteLanche(lanche.id);
                        loadLanches();
                      }
                    }}>
                      <i className="bi bi-trash"></i>
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}
