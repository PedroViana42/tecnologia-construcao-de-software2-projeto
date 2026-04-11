import React, { useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import '../styles/CineModal.css';

interface CineModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  onConfirm?: () => void;
  confirmText?: string;
  cancelText?: string;
  isConfirming?: boolean;
}

export const CineModal: React.FC<CineModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  onConfirm,
  confirmText = 'Confirmar',
  cancelText = 'Cancelar',
  isConfirming = false,
}) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
      if (event.key === 'Enter' && onConfirm && !isConfirming) {
        onConfirm();
      }
    },
    [onClose, onConfirm, isConfirming]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen && !document.querySelector('.cinemodal-overlay.active')) return null;

  const content = (
    <div 
      className={`cinemodal-overlay ${isOpen ? 'active' : ''}`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="cinemodal-content">
        <div className="cinemodal-header">
          <h3 className="cinemodal-title">{title}</h3>
        </div>
        <div className="cinemodal-body">
          {children}
        </div>
        <div className="cinemodal-footer">
          <button 
            type="button" 
            className="cinemodal-btn-cancel"
            onClick={onClose}
            disabled={isConfirming}
          >
            {cancelText}
          </button>
          {onConfirm && (
            <button 
              type="button" 
              className="btn-cinematic !px-8"
              onClick={onConfirm}
              disabled={isConfirming}
            >
              {isConfirming ? 'Aguarde...' : confirmText}
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(content, document.body);
};

export default CineModal;
