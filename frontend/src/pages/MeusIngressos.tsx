import { Container } from 'react-bootstrap';

export function MeusIngressos() {
  return (
    <Container className="text-center py-20">
      <div className="glass-card p-12 max-w-2xl mx-auto">
        <i className="bi bi-gear-wide-connected text-6xl text-accent mb-6 block animate-spin-slow"></i>
        <h2 className="marquee-title text-3xl mb-4 text-white">Funcionalidade em desenvolvimento</h2>
        <p className="text-white/60 font-body leading-relaxed">
          Estamos preparando uma área exclusiva para você gerenciar seus ingressos e combos. 
          <br />Em breve, você poderá consultar seu histórico de compras e downloads de QR Codes aqui.
        </p>
      </div>
    </Container>
  );
}
