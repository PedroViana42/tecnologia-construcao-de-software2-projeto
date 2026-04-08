import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Filme } from '../types';
import { Card, Col, Row, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function FilmesList() {
  const [filmes, setFilmes] = useState<Filme[]>([]);

  useEffect(() => {
    loadFilmes();
  }, []);

  const loadFilmes = async () => {
    const data = await api.getFilmes();
    setFilmes(data);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Tem certeza que deseja excluir este filme?')) {
      await api.deleteFilme(id);
      loadFilmes();
    }
  };

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center mb-12">
        <h2 className="marquee-title mb-0">Filmes em Cartaz</h2>
        <Link to="/filmes/novo" className="btn-cinematic">
          <i className="bi bi-plus-lg me-2"></i>Novo Cadastro
        </Link>
      </div>

      <Row xs={1} md={2} lg={3} className="g-5">
        {filmes.map((filme) => (
          <Col key={filme.id}>
            <Card className="glass-card h-100">
              <Card.Body className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <i className="bi bi-film text-accent text-2xl"></i>
                  <Card.Title className="font-display font-extrabold text-2xl mb-0">{filme.titulo}</Card.Title>
                </div>
                <Card.Subtitle className="mb-6 text-accent font-bold uppercase text-xs tracking-[0.2em]">{filme.genero}</Card.Subtitle>
                <div className="space-y-3 text-sm text-white/60 mb-8">
                  <div className="flex items-center gap-2">
                    <i className="bi bi-info-circle"></i>
                    <span><strong>Classificação:</strong> {filme.classificacao}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="bi bi-clock"></i>
                    <span><strong>Duração:</strong> {filme.duracao} min</span>
                  </div>
                  <p className="text-xs italic leading-relaxed opacity-50 border-t border-white/10 pt-4">{filme.sinopse}</p>
                </div>
              </Card.Body>
              <Card.Footer className="bg-transparent border-0 p-8 pt-0 d-flex justify-content-end gap-3">
                <Link to={`/filmes/editar/${filme.id}`} className="btn-outline-cinematic !px-4 !py-2">
                  <i className="bi bi-pencil"></i>
                </Link>
                <Button variant="outline-danger" className="rounded-full !px-4 !py-2 border-2" onClick={() => handleDelete(filme.id)}>
                  <i className="bi bi-trash"></i>
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
        {filmes.length === 0 && (
          <Col xs={12}>
            <div className="glass-card p-12 text-center">
              <i className="bi bi-camera-reels text-5xl text-white/10 mb-4 block"></i>
              <p className="text-white/40 font-display uppercase tracking-widest text-sm">Nenhum filme cadastrado no momento.</p>
            </div>
          </Col>
        )}
      </Row>
    </Container>
  );
}
