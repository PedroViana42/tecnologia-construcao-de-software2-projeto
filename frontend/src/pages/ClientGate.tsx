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
    <div className="min-h-screen flex items-center justify-center bg-bg relative overflow-hidden">
      {/* Background Decorativo - Cinematic Waves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-accent/5 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="relative z-10 w-full max-w-lg px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="bg-accent px-3 py-1 rounded-[4px] shadow-lg shadow-accent/20">
              <span className="text-white font-extrabold text-2xl tracking-tighter">CINE</span>
            </div>
            <h1 className="text-black font-extrabold text-4xl tracking-tighter">WEB</h1>
          </div>
          <div className="h-[2px] w-12 bg-accent mx-auto mb-6"></div>
          <p className="text-text-muted font-display text-[11px] tracking-[0.6em] uppercase font-bold">The Premium Experience</p>
        </div>

        <div className="premium-card bg-surface p-12 shadow-2xl border border-white relative overflow-hidden">
          {/* Subtle line decoration */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
          
          <div className="text-center mb-10">
            <h2 className="text-text font-display font-black text-2xl mb-3 tracking-tight">Portal de Acesso</h2>
            <p className="text-text-muted text-xs font-medium">Insira a chave do espetáculo para continuar</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-3">
              <label className="label-uppercase block text-center">Código de Segurança</label>
              <div className="relative">
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-bg border-2 border-border/50 rounded-xl px-6 py-5 text-text font-display text-center text-xl tracking-[0.4em] uppercase focus:outline-none focus:border-accent focus:bg-white transition-all placeholder:text-text-muted/20"
                  autoFocus
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-accent/20">
                   <i className="bi bi-key-fill text-xl"></i>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="btn-cinematic w-full !py-5 text-base tracking-[0.2em] font-black shadow-2xl shadow-accent/20 group"
            >
              <span className="flex items-center justify-center gap-3">
                ENTRAR AGORA
                <i className="bi bi-arrow-right transition-transform group-hover:translate-x-1"></i>
              </span>
            </button>
          </form>
          
          <div className="mt-10 pt-8 border-t border-border/50 flex items-center justify-between text-[9px] text-text-muted font-bold tracking-widest uppercase opacity-60">
            <span>Security Protected</span>
            <div className="flex gap-4">
              <i className="bi bi-shield-check text-accent"></i>
              <span>256-bit Encrypted</span>
            </div>
          </div>
        </div>

        <p className="mt-16 text-center text-text-muted text-[10px] tracking-[0.3em] font-bold uppercase opacity-30">
          © 2026 CineWeb Premium Selection
        </p>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
};

export default ClientGate;
