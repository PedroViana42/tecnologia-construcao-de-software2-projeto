import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Sessao, Filme, Sala } from '../types';
import { Container, Button, Table, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function SessoesList() {
  const [sessoes, setSessoes] = useState<Sessao[]>([]);
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
    const [sessoesData, filmesData, salasData] = await Promise.all([
      api.getSessoes(),
      api.getFilmes(),
      api.getSalas(),
    ]);

    setSessoes(sessoesData);

    const filmesMap = filmesData.reduce((acc, f) => ({ ...acc, [f.id]: f }), {});
    setFilmes(filmesMap);

    const salasMap = salasData.reduce((acc, s) => ({ ...acc, [s.id]: s }), {});
    setSalas(salasMap);
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
        valor: valorFinal,
      });
      alert('Ingresso vendido com sucesso!');
      handleCloseModal();
    } catch (error) {
      console.error(error);
      alert('Erro ao vender ingresso');
    }
  };

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center mb-12">
        <h2 className="marquee-title mb-0">Programação</h2>
        <Link to="/sessoes/novo" className="btn-cinematic">
          <i className="bi bi-plus-lg me-2"></i>Novo Cadastro
        </Link>
      </div>

      <div className="glass-card p-8 overflow-hidden">
        <Table hover responsive className="mb-0">
          <thead>
            <tr>
              <th className="font-display">Filme</th>
              <th className="font-display">Sala</th>
              <th className="font-display">Data</th>
              <th className="font-display">Horário</th>
              <th className="font-display">Ações</th>
            </tr>
          </thead>
          <tbody className="font-body">
            {sessoes.map((sessao) => (
              <tr key={sessao.id} className="border-white/5">
                <td className="align-middle">
                  <div className="flex items-center gap-2">
                    <i className="bi bi-film text-accent"></i>
                    <span className="font-bold">{filmes[sessao.filmeId]?.titulo || 'Filme não encontrado'}</span>
                  </div>
                </td>
                <td className="align-middle text-white/60">Sala {salas[sessao.salaId]?.numero || 'N/A'}</td>
                <td className="align-middle text-white/60">{new Date(sessao.data).toLocaleDateString('pt-BR')}</td>
                <td className="align-middle text-white/60">{sessao.horario}</td>
                <td>
                  <div className="d-flex gap-2">
                    <Button className="btn-cinematic !px-4 !py-1 !text-[10px]" onClick={() => handleOpenModal(sessao)}>
                      <i className="bi bi-ticket-perforated me-1"></i> Vender
                    </Button>
                    <Link to={`/sessoes/editar/${sessao.id}`} className="btn-outline-cinematic !px-3 !py-1 !text-xs">
                      <i className="bi bi-pencil"></i>
                    </Link>
                    <Button variant="outline-danger" className="rounded-full !px-3 !py-1 border-2" onClick={async () => {
                      if (confirm('Tem certeza que deseja excluir esta sessão?')) {
                        await api.deleteSessao(sessao.id);
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

      <Modal show={showModal} onHide={handleCloseModal} centered className="font-body">
        <Modal.Header closeButton className="bg-surface border-b border-white/10 text-white">
          <Modal.Title className="font-display font-extrabold uppercase tracking-tighter">Vender Ingresso</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-surface p-8 text-white">
          {selectedSessao && (
            <div className="mb-8 p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <i className="bi bi-film text-accent"></i>
                <p className="mb-0 font-display font-bold text-lg">{filmes[selectedSessao.filmeId]?.titulo}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-xs text-white/40 uppercase tracking-widest">
                <div>
                  <span className="block mb-1">Sala</span>
                  <span className="text-white font-bold">{salas[selectedSessao.salaId]?.numero}</span>
                </div>
                <div>
                  <span className="block mb-1">Horário</span>
                  <span className="text-white font-bold">{new Date(selectedSessao.data).toLocaleDateString('pt-BR')} • {selectedSessao.horario}</span>
                </div>
              </div>
            </div>
          )}
          
          <Form.Group className="mb-8">
            <Form.Label>Tipo de Ingresso</Form.Label>
            <Form.Select value={tipoIngresso} onChange={handleTipoChange}>
              <option value="Inteira">Inteira</option>
              <option value="Meia">Meia (50% de desconto)</option>
            </Form.Select>
          </Form.Group>

          <div className="flex justify-between items-end p-6 bg-accent/10 rounded-2xl border border-accent/20">
            <span className="font-display font-bold uppercase text-xs tracking-widest text-accent">Valor Final</span>
            <span className="text-4xl font-display font-extrabold text-accent">R$ {valorFinal.toFixed(2)}</span>
          </div>
        </Modal.Body>
        <Modal.Footer className="bg-surface border-t border-white/10 p-6">
          <Button variant="outline-secondary" className="rounded-full font-bold border-2 text-white/60 hover:text-white" onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button className="btn-cinematic" onClick={handleVenderIngresso}>
            Confirmar Venda
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
