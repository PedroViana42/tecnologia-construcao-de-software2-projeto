import { Link, useLocation } from 'react-router-dom';
import { Navbar as BsNavbar, Container, Nav } from 'react-bootstrap';

export function Navbar() {
  const location = useLocation();

  return (
    <BsNavbar expand="lg" className="navbar sticky-top">
      <Container>
        <BsNavbar.Brand as={Link} to="/" className="font-display font-extrabold text-2xl tracking-tighter text-white hover:text-accent transition-all">
          CINE <span className="text-accent">MODERNO</span>
        </BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="basic-navbar-nav" className="border-white/20" />
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/filmes" active={location.pathname.startsWith('/filmes')}>
              Filmes
            </Nav.Link>
            <Nav.Link as={Link} to="/salas" active={location.pathname.startsWith('/salas')}>
              Salas
            </Nav.Link>
            <Nav.Link as={Link} to="/sessoes" active={location.pathname.startsWith('/sessoes')}>
              Sessões
            </Nav.Link>
            <Nav.Link as={Link} to="/lanches" active={location.pathname.startsWith('/lanches')}>
              Lanches
            </Nav.Link>
            <Nav.Link as={Link} to="/combos" active={location.pathname.startsWith('/combos')}>
              Combos
            </Nav.Link>
            <Nav.Link as={Link} to="/bomboniere" active={location.pathname.startsWith('/bomboniere')}>
              Bomboniere
            </Nav.Link>
            <Nav.Link as={Link} to="/pedidos" active={location.pathname.startsWith('/pedidos')}>
              Pedidos
            </Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}
