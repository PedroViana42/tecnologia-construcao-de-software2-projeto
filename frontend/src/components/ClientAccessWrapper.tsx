import React, { useState, useEffect } from 'react';
import ClientGate from '../pages/ClientGate';

interface ClientAccessWrapperProps {
  children: React.ReactNode;
}

const ClientAccessWrapper: React.FC<ClientAccessWrapperProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const auth = sessionStorage.getItem('cliente_autenticado');
    setIsAuthenticated(!!auth);
  }, []);

  if (isAuthenticated === null) return null; // Aguardando verificação

  if (!isAuthenticated) {
    return <ClientGate onSuccess={() => setIsAuthenticated(true)} />;
  }

  return <>{children}</>;
};

export default ClientAccessWrapper;
