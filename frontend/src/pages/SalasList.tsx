import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Sala } from '../types';
import { Container, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function SalasList() {
  const [salas, setSalas] = useState<Sala[]>([]);

  useEffect(() => {
    loadSalas();
  }, []);

  const loadSalas = async () => {
    const data = await api.getSalas();
    setSalas(data);
  };

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center mb-12">
        <h2 className="marquee-title mb-0">Nossas Salas</h2>
        <Link to="/salas/novo" className="btn-cinematic">
          <i className="bi bi-plus-lg me-2"></i>Novo Cadastro
        </Link>
      </div>

      <div className="glass-card p-8 overflow-hidden">
        <Table hover responsive className="mb-0">
          <thead>
            <tr>
              <th className="font-display">Número da Sala</th>
              <th className="font-display">Capacidade Máxima</th>
              <th className="font-display" style={{ width: '120px' }}>Ações</th>
            </tr>
          </thead>
          <tbody className="font-body">
            {salas.map((sala) => (
              <tr key={sala.id} className="border-white/5">
                <td className="align-middle">
                  <div className="flex items-center gap-2">
                    <i className="bi bi-door-open text-accent"></i>
                    <span className="font-bold">Sala {sala.numero}</span>
                  </div>
                </td>
                <td className="align-middle text-white/60">{sala.capacidade} lugares</td>
                <td>
                  <div className="d-flex gap-2">
                    <Link to={`/salas/editar/${sala.id}`} className="btn-outline-cinematic !px-3 !py-1 !text-xs">
                      <i className="bi bi-pencil"></i>
                    </Link>
                    <Button variant="outline-danger" className="rounded-full !px-3 !py-1 border-2" onClick={async () => {
                      if (confirm('Tem certeza que deseja excluir esta sala?')) {
                        await api.deleteSala(sala.id);
                        loadSalas();
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
