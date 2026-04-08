import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { motion, AnimatePresence } from 'motion/react';

export function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <Navbar />
      
      <AnimatePresence mode="wait">
        <motion.main 
          key={location.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex-grow relative overflow-hidden"
        >
          {/* Cinematic Transition Overlay */}
          <div className="curtain-container fixed inset-0 flex z-50 pointer-events-none">
            <motion.div 
              className="curtain-left flex-1 h-full bg-black shadow-[inset_-20px_0_50px_rgba(229,9,20,0.1)]"
              variants={{
                initial: { x: 0 },
                animate: { x: '-100%' },
                exit: { x: 0 }
              }}
              transition={{ duration: 0.8, ease: [0.45, 0, 0.55, 1] }}
            />
            <motion.div 
              className="curtain-right flex-1 h-full bg-black shadow-[inset_20px_0_50px_rgba(229,9,20,0.1)]"
              variants={{
                initial: { x: 0 },
                animate: { x: '100%' },
                exit: { x: 0 }
              }}
              transition={{ duration: 0.8, ease: [0.45, 0, 0.55, 1] }}
            />
          </div>

          <motion.div
            variants={{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -20 }
            }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="container mx-auto px-4 py-12"
          >
            <Outlet />
          </motion.div>
        </motion.main>
      </AnimatePresence>

      <footer className="bg-black text-white/40 py-16 border-t border-white/5 text-center">
        <p className="font-display font-extrabold text-3xl mb-6 tracking-tighter text-white">CINE <span className="text-accent">MODERNO</span></p>
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
