import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { LancheCombo } from '../types';
import { Container, Button, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CineModal } from '../components/CineModal';

export function Bomboniere() {
  const [itens, setItens] = useState<LancheCombo[]>([]);
  
  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<LancheCombo | null>(null);
  const [clienteNome, setClienteNome] = useState('');
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const data = await api.getLanches();
      setItens(data || []);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpenVenda = (item: LancheCombo) => {
    setSelectedItem(item);
    setClienteNome('');
    setErrorMsg(null);
    setIsModalOpen(true);
  };

  const handleConfirmVenda = async () => {
    if (!selectedItem) return;
    if (!clienteNome.trim()) {
      setErrorMsg('Por favor, informe o nome do cliente.');
      return;
    }

    setIsSubmitting(true);
    try {
      await api.createPedido({
        cliente: clienteNome.trim(),
        lancheComboIds: [selectedItem.id],
      });
      setIsModalOpen(false);
      setIsSuccessModalOpen(true);
    } catch (error: any) {
      console.error(error);
      setErrorMsg(error.message || 'Erro ao realizar venda');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-bg min-h-screen pb-24">
      <Container className="py-12">
        <div className="flex justify-start mb-16">
          <Link to="/admin" className="back-link">
            <i className="bi bi-arrow-left"></i>
            Voltar para o Painel
          </Link>
        </div>

        <div className="mb-20 text-center">
          <h2 className="marquee-title font-display font-bold text-4xl mb-6 text-text">Bomboniere</h2>
          <p className="text-accent font-display font-bold tracking-[0.4em] uppercase text-xs">Delícias do Cinema</p>
        </div>

        <div>
          <div className="flex items-center gap-6 mb-12">
            <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center shrink-0">
              <i className="bi bi-shop text-accent text-2xl"></i>
            </div>
            <h4 className="font-display font-bold text-2xl mb-0 text-text">Produtos em Destaque</h4>
            <div className="flex-grow h-px bg-border"></div>
          </div>
          
          <Row xs={1} md={2} lg={4} className="g-8">
            {itens.map((item) => (
              <Col key={item.id}>
                <Card className="premium-card h-100 bg-surface shadow-md hover:shadow-xl border-none">
                  <Card.Body className="p-8">
                    <Card.Title className="font-display font-bold text-xl mb-3 text-text">{item.nome}</Card.Title>
                    <Card.Subtitle className="mb-0 text-text-muted text-xs leading-relaxed font-normal">{item.descricao}</Card.Subtitle>
                  </Card.Body>
                  <Card.Footer className="bg-bg/10 border-t border-border p-8 d-flex justify-content-between align-items-center">
                    <span className="text-xl font-display font-black text-text">R$ {item.preco.toFixed(2)}</span>
                    <Button className="btn-cinematic !px-5 !py-2.5 !text-[11px]" onClick={() => handleOpenVenda(item)}>
                      Vender
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Modal de Venda */}
        <CineModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Realizar Venda"
          onConfirm={handleConfirmVenda}
          confirmText="Confirmar Venda"
          isConfirming={isSubmitting}
        >
          <p className="mb-6 text-text-muted">Vendendo agora: <strong className="text-text">{selectedItem?.nome}</strong></p>
          <div className="space-y-3">
            <label className="text-[10px] uppercase tracking-widest text-text-muted font-bold">Nome do Cliente</label>
            <input 
              type="text"
              className="cinemodal-input"
              placeholder="Ex: João Silva"
              value={clienteNome}
              onChange={(e) => setClienteNome(e.target.value)}
              autoFocus
            />
            {errorMsg && <p className="text-danger text-xs mt-2">{errorMsg}</p>}
          </div>
        </CineModal>

        {/* Modal de Sucesso */}
        <CineModal
          isOpen={isSuccessModalOpen}
          onClose={() => setIsSuccessModalOpen(false)}
          title="Venda Concluída!"
          confirmText="Entendido"
          onConfirm={() => setIsSuccessModalOpen(false)}
        >
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-[#f1f3f5] rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="bi bi-check-circle-fill text-accent text-5xl"></i>
            </div>
            <p className="mb-0 text-text font-bold text-lg">O item foi registrado com sucesso!</p>
            <p className="text-text-muted text-sm mt-2">O pedido já está no histórico geral.</p>
          </div>
        </CineModal>
      </Container>
    </div>
  );
}
