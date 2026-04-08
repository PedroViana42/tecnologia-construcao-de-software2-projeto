import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Combo, Lanche } from '../types';
import { Container, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function CombosList() {
  const [combos, setCombos] = useState<Combo[]>([]);
  const [lanches, setLanches] = useState<Record<string, Lanche>>({});

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const [combosData, lanchesData] = await Promise.all([
      api.getCombos(),
      api.getLanches(),
    ]);
    setCombos(combosData);
    
    const lanchesMap = lanchesData.reduce((acc, l) => ({ ...acc, [l.id]: l }), {});
    setLanches(lanchesMap);
  };

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center mb-12">
        <h2 className="marquee-title mb-0">Combos Especiais</h2>
        <Link to="/combos/novo" className="btn-cinematic">
          <i className="bi bi-plus-lg me-2"></i>Novo Cadastro
        </Link>
      </div>

      <div className="glass-card p-8 overflow-hidden">
        <Table hover responsive className="mb-0">
          <thead>
            <tr>
              <th className="font-display">Nome</th>
              <th className="font-display">Itens</th>
              <th className="font-display">Preço</th>
              <th className="font-display" style={{ width: '120px' }}>Ações</th>
            </tr>
          </thead>
          <tbody className="font-body">
            {combos.map((combo) => (
              <tr key={combo.id} className="border-white/5">
                <td className="align-middle">
                  <div className="flex items-center gap-2">
                    <i className="bi bi-stars text-accent"></i>
                    <span className="font-bold">{combo.nome}</span>
                  </div>
                </td>
                <td className="align-middle text-white/60">
                  {combo.lanchesIds.map(id => lanches[id]?.nome || 'Item').join(', ')}
                </td>
                <td className="align-middle text-accent font-extrabold">R$ {combo.preco.toFixed(2)}</td>
                <td>
                  <div className="d-flex gap-2">
                    <Link to={`/combos/editar/${combo.id}`} className="btn-outline-cinematic !px-3 !py-1 !text-xs">
                      <i className="bi bi-pencil"></i>
                    </Link>
                    <Button variant="outline-danger" className="rounded-full !px-3 !py-1 border-2" onClick={async () => {
                      if (confirm('Tem certeza que deseja excluir este combo?')) {
                        await api.deleteCombo(combo.id);
                        loadData();
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
