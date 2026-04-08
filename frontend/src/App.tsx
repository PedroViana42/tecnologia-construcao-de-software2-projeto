/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { FilmesList } from './pages/FilmesList';
import { FilmeForm } from './pages/FilmeForm';
import { SalasList } from './pages/SalasList';
import { SalaForm } from './pages/SalaForm';
import { SessoesList } from './pages/SessoesList';
import { SessaoForm } from './pages/SessaoForm';
import { LanchesList } from './pages/LanchesList';
import { LancheForm } from './pages/LancheForm';
import { CombosList } from './pages/CombosList';
import { ComboForm } from './pages/ComboForm';
import { Bomboniere } from './pages/Bomboniere';
import { PedidosList } from './pages/PedidosList';
import { PedidoForm } from './pages/PedidoForm';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/filmes" replace />} />
          
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

          <Route path="combos" element={<CombosList />} />
          <Route path="combos/novo" element={<ComboForm />} />
          <Route path="combos/editar/:id" element={<ComboForm />} />

          <Route path="bomboniere" element={<Bomboniere />} />

          <Route path="pedidos" element={<PedidosList />} />
          <Route path="pedidos/novo" element={<PedidoForm />} />
          <Route path="pedidos/editar/:id" element={<PedidoForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
