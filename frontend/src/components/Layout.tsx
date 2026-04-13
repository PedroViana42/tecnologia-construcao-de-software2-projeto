import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <Navbar />
      
      <main className="flex-grow relative">
        <div className="container mx-auto px-4 py-12">
          <Outlet />
        </div>
      </main>

      <footer className="bg-black text-white/40 py-16 border-t border-white/5 text-center">
        <div className="flex justify-center items-center gap-2 mb-6">
          <div className="bg-accent px-2 py-0.5 rounded-[2px]">
            <span className="text-white font-extrabold text-2xl tracking-tighter">CINE</span>
          </div>
          <span className="text-white font-extrabold text-2xl tracking-tighter">WEB</span>
        </div>
        <div className="flex justify-center gap-12 mb-8">
          <i className="bi bi-ticket-perforated text-xl hover:text-accent transition-colors"></i>
          <i className="bi bi-film text-xl hover:text-accent transition-colors"></i>
          <i className="bi bi-camera-reels text-xl hover:text-accent transition-colors"></i>
        </div>
        <p className="font-display text-[10px] tracking-[0.4em] uppercase">
          A Experiência Definitiva • Premium Cinema
        </p>
      </footer>
    </div>
  );
}
