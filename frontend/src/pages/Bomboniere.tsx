import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Lanche, Combo } from '../types';
import { Container, Button, Card, Row, Col, Badge } from 'react-bootstrap';

export function Bomboniere() {
  const [lanches, setLanches] = useState<Lanche[]>([]);
  const [combos, setCombos] = useState<Combo[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const [lanchesData, combosData] = await Promise.all([
      api.getLanches(),
      api.getCombos(),
    ]);
    setLanches(lanchesData);
    setCombos(combosData);
  };

  const handleVender = async (item: Lanche | Combo, isCombo: boolean) => {
    if (confirm(`Confirmar venda de ${item.nome} por R$ ${item.preco.toFixed(2)}?`)) {
      try {
        await fetch(`${import.meta.env.VITE_API_URL || '/api'}/vendasLanches`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            itemId: item.id,
            isCombo,
            nome: item.nome,
            preco: item.preco,
            data: new Date().toISOString()
          })
        });
        alert('Venda realizada com sucesso!');
      } catch (error) {
        console.error(error);
        alert('Erro ao realizar venda');
      }
    }
  };

  return (
    <Container>
      <div className="mb-12 text-center">
        <h2 className="marquee-title">Bomboniere</h2>
        <p className="text-accent font-display font-bold tracking-[0.4em] uppercase text-xs">Delícias do Cinema</p>
      </div>

      <div className="mb-16">
        <div className="flex items-center gap-4 mb-8">
          <i className="bi bi-stars text-accent text-2xl"></i>
          <h4 className="font-display font-extrabold text-2xl mb-0 uppercase tracking-tighter">Combos Especiais</h4>
          <div className="flex-grow h-px bg-white/10"></div>
        </div>
        <Row xs={1} md={2} lg={3} className="g-5">
          {combos.map((combo) => (
            <Col key={combo.id}>
              <Card className="glass-card h-100">
                <Card.Header className="bg-white/5 border-0 p-6">
                  <h5 className="font-display font-bold mb-0 text-white">{combo.nome}</h5>
                </Card.Header>
                <Card.Body className="p-6">
                  <div className="font-body text-sm text-white/60">
                    <strong className="text-accent uppercase text-[10px] tracking-widest block mb-3">Itens inclusos</strong>
                    <ul className="space-y-2">
                      {combo.lanchesIds.map((id, index) => {
                        const lanche = lanches.find(l => l.id === id);
                        return (
                          <li key={index} className="flex items-center gap-2">
                            <i className="bi bi-check2 text-accent"></i>
                            {lanche?.nome || 'Item'}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </Card.Body>
                <Card.Footer className="bg-transparent border-0 p-6 pt-0 d-flex justify-content-between align-items-center">
                  <span className="text-2xl font-display font-extrabold text-white">R$ {combo.preco.toFixed(2)}</span>
                  <Button className="btn-cinematic !px-6 !py-2 !text-xs" onClick={() => handleVender(combo, true)}>
                    <i className="bi bi-cart-plus me-2"></i>Vender
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <div>
        <div className="flex items-center gap-4 mb-8">
          <i className="bi bi-cup-straw text-accent text-2xl"></i>
          <h4 className="font-display font-extrabold text-2xl mb-0 uppercase tracking-tighter">Lanches Avulsos</h4>
          <div className="flex-grow h-px bg-white/10"></div>
        </div>
        <Row xs={1} md={2} lg={4} className="g-4">
          {lanches.map((lanche) => (
            <Col key={lanche.id}>
              <Card className="glass-card h-100">
                <Card.Body className="p-6">
                  <Card.Title className="font-display font-bold text-lg mb-2 text-white">{lanche.nome}</Card.Title>
                  <Card.Subtitle className="mb-4 text-accent text-[10px] uppercase font-bold tracking-[0.2em]">{lanche.tipo}</Card.Subtitle>
                </Card.Body>
                <Card.Footer className="bg-transparent border-0 p-6 pt-0 d-flex justify-content-between align-items-center">
                  <span className="text-xl font-display font-extrabold text-white">R$ {lanche.preco.toFixed(2)}</span>
                  <Button className="btn-cinematic !px-4 !py-2 !text-[10px]" onClick={() => handleVender(lanche, false)}>
                    <i className="bi bi-cart-plus me-2"></i>Vender
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
          {lanches.length === 0 && (
            <Col xs={12}>
              <div className="glass-card p-12 text-center">
                <p className="text-white/40 font-display uppercase tracking-widest text-xs">Nenhum lanche disponível no momento.</p>
              </div>
            </Col>
          )}
        </Row>
      </div>
    </Container>
  );
}
