import { Link, useLocation } from 'react-router-dom';
import { Navbar as BsNavbar, Container } from 'react-bootstrap';

export function Navbar() {
  const location = useLocation();
  const isAdminArea = location.pathname.includes('/admin');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  return (
    <BsNavbar expand="lg" className="navbar sticky-top">
      <Container>
        <BsNavbar.Brand as={Link} to="/" className="flex items-center gap-2 group no-underline">
          <div className="bg-accent px-2 py-0.5 rounded-[2px] transition-transform group-hover:scale-105">
            <span className="text-white font-extrabold text-xl tracking-tighter">CINE</span>
          </div>
          <span className="text-black font-extrabold text-xl tracking-tighter group-hover:text-accent transition-colors">WEB</span>
        </BsNavbar.Brand>

        <div className="ms-auto flex items-center gap-2">
          <Link 
            to={isAdminArea ? '/' : '/admin'} 
            onClick={isAdminArea ? handleLogout : undefined}
            className={`${isAdminArea ? 'btn-outline-cinematic' : 'btn-cinematic'} !px-5 !py-2 !text-[12px] flex items-center gap-2`}
          >
            <i className={`bi ${isAdminArea ? 'bi-box-arrow-left' : 'bi-shield-lock'}`}></i>
            {isAdminArea ? 'Sair do Painel' : 'Área Restrita'}
          </Link>
        </div>
      </Container>
    </BsNavbar>
  );
}
