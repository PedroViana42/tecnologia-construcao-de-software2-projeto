import React, { useState } from 'react';
import CineModal from '../components/CineModal';

interface ClientGateProps {
  onSuccess: () => void;
}

const ClientGate: React.FC<ClientGateProps> = ({ onSuccess }) => {
  const [code, setCode] = useState('');
  const [errorModalOpen, setErrorModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.toUpperCase() === 'CINE2026') {
      sessionStorage.setItem('cliente_autenticado', 'true');
      onSuccess();
    } else {
      setErrorModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 w-full max-w-md px-8 text-center">
        <div className="mb-12 animate-fade-in">
          <div className="inline-block bg-white px-4 py-1 rounded-[4px] mb-4">
            <span className="text-black font-extrabold text-2xl tracking-tighter">CINE</span>
          </div>
          <h1 className="text-white font-extrabold text-4xl tracking-tighter ml-2 inline-block">WEB</h1>
          <p className="text-white/40 font-display text-[10px] tracking-[0.5em] uppercase mt-4">Plataforma de Cinema Premium</p>
        </div>

        <div className="premium-card bg-[#161616]/80 backdrop-blur-xl p-10 border border-white/5 shadow-2xl">
          <h2 className="text-white font-display font-medium text-lg mb-8">Digite o código de acesso</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2 text-left">
              <label className="text-white/30 text-[9px] uppercase tracking-widest font-bold ml-1">Código do Cinema</label>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Ex: CINE2026"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white font-display text-center tracking-[0.3em] uppercase focus:outline-none focus:border-accent/40 transition-colors placeholder:text-white/10"
                autoFocus
              />
            </div>

            <button
              type="submit"
              className="btn-cinematic w-full py-4 text-sm tracking-widest uppercase font-bold shadow-xl shadow-accent/10"
            >
              Entrar no Espetáculo
            </button>
          </form>
        </div>

        <p className="mt-12 text-white/20 text-[9px] tracking-[0.2em] font-medium uppercase">
          © 2026 CineWeb • Todos os direitos reservados
        </p>
      </div>

      {/* Modal de Erro */}
      <CineModal
        isOpen={errorModalOpen}
        onClose={() => setErrorModalOpen(false)}
        title="Acesso Negado"
        confirmText="Tentar Novamente"
        onConfirm={() => setErrorModalOpen(false)}
      >
        <p className="text-text-muted leading-relaxed">
          Código de acesso inválido. <br />
          Verifique com a administração do cinema.
        </p>
      </CineModal>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default ClientGate;
