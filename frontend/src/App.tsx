/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ScrollToTop } from './components/ScrollToTop';
import { FilmesList } from './pages/FilmesList';
import { FilmeForm } from './pages/FilmeForm';
import { SalasList } from './pages/SalasList';
import { SalaForm } from './pages/SalaForm';
import { SessoesList } from './pages/SessoesList';
import { SessaoForm } from './pages/SessaoForm';
import { LanchesList } from './pages/LanchesList';
import { LancheForm } from './pages/LancheForm';
import { Bomboniere } from './pages/Bomboniere';
import { PedidosList } from './pages/PedidosList';
import { PedidoForm } from './pages/PedidoForm';
import { MeusIngressos } from './pages/MeusIngressos';
import { AdminDashboard } from './pages/AdminDashboard';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import ClientAccessWrapper from './components/ClientAccessWrapper';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Escopo Público Protegido por Código de Acesso */}
          <Route index element={
            <ClientAccessWrapper>
              <FilmesList />
            </ClientAccessWrapper>
          } />
          <Route path="login" element={<Login />} />
          <Route path="comprar" element={
            <ClientAccessWrapper>
              <PedidoForm />
            </ClientAccessWrapper>
          } />
          <Route path="meus-ingressos" element={
            <ClientAccessWrapper>
              <MeusIngressos />
            </ClientAccessWrapper>
          } />
          
          {/* Escopo Admin Protegido */}
          <Route 
            path="admin" 
            element={<ProtectedRoute />}
          >
            <Route index element={<AdminDashboard />} />
            
            <Route path="filmes" element={<FilmesList />} />
            <Route path="filmes/novo" element={<FilmeForm />} />
            <Route path="filmes/editar/:id" element={<FilmeForm />} />
            
            <Route path="salas" element={<SalasList />} />
            <Route path="salas/novo" element={<SalaForm />} />
            <Route path="salas/editar/:id" element={<SalaForm />} />
            
            <Route path="sessoes" element={<SessoesList />} />
            <Route path="sessoes/novo" element={<SessaoForm />} />
            <Route path="sessoes/editar/:id" element={<SessaoForm />} />

            <Route path="lanches" element={<LanchesList />} />
            <Route path="lanches/novo" element={<LancheForm />} />
            <Route path="lanches/editar/:id" element={<LancheForm />} />

            <Route path="bomboniere" element={<Bomboniere />} />

            <Route path="pedidos" element={<PedidosList />} />
            <Route path="pedidos/novo" element={<PedidoForm />} />
            <Route path="pedidos/editar/:id" element={<PedidoForm />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
