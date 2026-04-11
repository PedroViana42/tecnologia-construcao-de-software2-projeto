import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const modules = [
  {
    title: 'Filmes',
    description: 'Gerenciar catálogo de filmes, gêneros e detalhes técnicos.',
    icon: 'bi-film',
    path: '/admin/filmes',
  },
  {
    title: 'Salas',
    description: 'Configurar salas, capacidades e infraestrutura.',
    icon: 'bi-door-open',
    path: '/admin/salas',
  },
  {
    title: 'Sessões',
    description: 'Programar horários, datas e disponibilidade.',
    icon: 'bi-calendar3',
    path: '/admin/sessoes',
  },
  {
    title: 'Bomboniere',
    description: 'Acessar ponto de venda para lanches e pipocas.',
    icon: 'bi-shop',
    path: '/admin/bomboniere',
  },
  {
    title: 'Gestão de Itens',
    description: 'Cadastrar e precificar produtos da bomboniere.',
    icon: 'bi-cup-straw',
    path: '/admin/lanches',
  },
  {
    title: 'Pedidos',
    description: 'Ver histórico completo de vendas e faturamento.',
    icon: 'bi-receipt',
    path: '/admin/pedidos',
  },
];

export function AdminDashboard() {
  return (
    <div className="min-h-screen bg-bg">
      <Container className="py-24 max-w-[1240px]">
        <div className="mb-20 text-center">
          <h1 className="font-display font-bold text-[2.5rem] mb-6 text-text leading-tight">
            Painel de Controle
          </h1>
          <p className="text-accent font-display font-bold tracking-[0.25em] uppercase text-[10px]">
            Gestão Administrativa Cine Web
          </p>
        </div>

        <Row className="g-10">
          {modules.map((module) => (
            <Col key={module.path} xs={12} md={6} lg={4}>
              <Link to={module.path} className="no-underline group">
                <Card className="premium-card h-100 border-none shadow-md hover:shadow-xl group-hover:-translate-y-2 transition-all">
                  <Card.Body className="p-12 flex flex-col items-center text-center">
                    <div className="mb-10">
                      <div className="icon-box-neutral group-hover:bg-accent/5 group-hover:scale-110 transition-all duration-300">
                        <i className={`bi ${module.icon} text-[2.5rem] text-accent`}></i>
                      </div>
                    </div>
                    <Card.Title className="font-display font-bold text-xl mb-4 text-[#111111]">
                      {module.title}
                    </Card.Title>
                    <Card.Text className="text-[#666666] text-sm font-body leading-relaxed max-w-[240px]">
                      {module.description}
                    </Card.Text>
                    
                    <div className="mt-8 flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                      <span className="font-display font-bold text-[10px] tracking-widest uppercase">Gerenciar</span>
                      <i className="bi bi-arrow-right"></i>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
