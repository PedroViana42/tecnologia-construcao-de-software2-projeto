import { Filme, Sala, Sessao, Ingresso, Lanche, Combo, Pedido } from '../types';

const API_URL = import.meta.env.VITE_API_URL || '/api';

export const api = {
  // ... existing methods ...
  getFilmes: async (): Promise<Filme[]> => {
    const res = await fetch(`${API_URL}/filme`);
    return res.json();
  },
  getFilme: async (id: string): Promise<Filme> => {
    const res = await fetch(`${API_URL}/filme/${id}`);
    return res.json();
  },
  createFilme: async (filme: Omit<Filme, 'id'>): Promise<Filme> => {
    const res = await fetch(`${API_URL}/filme`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(filme),
    });
    return res.json();
  },
  updateFilme: async (id: string, filme: Omit<Filme, 'id'>): Promise<Filme> => {
    const res = await fetch(`${API_URL}/filme/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(filme),
    });
    return res.json();
  },
  deleteFilme: async (id: string): Promise<void> => {
    await fetch(`${API_URL}/filme/${id}`, { method: 'DELETE' });
  },

  getSalas: async (): Promise<Sala[]> => {
    const res = await fetch(`${API_URL}/sala`);
    return res.json();
  },
  getSala: async (id: string): Promise<Sala> => {
    const res = await fetch(`${API_URL}/sala/${id}`);
    return res.json();
  },
  createSala: async (sala: Omit<Sala, 'id'>): Promise<Sala> => {
    const res = await fetch(`${API_URL}/sala`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sala),
    });
    return res.json();
  },
  updateSala: async (id: string, sala: Omit<Sala, 'id'>): Promise<Sala> => {
    const res = await fetch(`${API_URL}/sala/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sala),
    });
    return res.json();
  },
  deleteSala: async (id: string): Promise<void> => {
    await fetch(`${API_URL}/sala/${id}`, { method: 'DELETE' });
  },

  getSessoes: async (): Promise<Sessao[]> => {
    const res = await fetch(`${API_URL}/sessao`);
    return res.json();
  },
  getSessao: async (id: string): Promise<Sessao> => {
    const res = await fetch(`${API_URL}/sessao/${id}`);
    return res.json();
  },
  createSessao: async (sessao: Omit<Sessao, 'id'>): Promise<Sessao> => {
    const res = await fetch(`${API_URL}/sessao`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sessao),
    });
    return res.json();
  },
  updateSessao: async (id: string, sessao: Omit<Sessao, 'id'>): Promise<Sessao> => {
    const res = await fetch(`${API_URL}/sessao/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sessao),
    });
    return res.json();
  },
  deleteSessao: async (id: string): Promise<void> => {
    await fetch(`${API_URL}/sessao/${id}`, { method: 'DELETE' });
  },

  getIngressos: async (): Promise<Ingresso[]> => {
    const res = await fetch(`${API_URL}/ingresso`);
    return res.json();
  },
  createIngresso: async (ingresso: Omit<Ingresso, 'id'>): Promise<Ingresso> => {
    const res = await fetch(`${API_URL}/ingresso`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ingresso),
    });
    return res.json();
  },

  getLanches: async (): Promise<Lanche[]> => {
    const res = await fetch(`${API_URL}/lanches`);
    return res.json();
  },
  getLanche: async (id: string): Promise<Lanche> => {
    const res = await fetch(`${API_URL}/lanches/${id}`);
    return res.json();
  },
  createLanche: async (lanche: Omit<Lanche, 'id'>): Promise<Lanche> => {
    const res = await fetch(`${API_URL}/lanches`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lanche),
    });
    return res.json();
  },
  updateLanche: async (id: string, lanche: Omit<Lanche, 'id'>): Promise<Lanche> => {
    const res = await fetch(`${API_URL}/lanches/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lanche),
    });
    return res.json();
  },
  deleteLanche: async (id: string): Promise<void> => {
    await fetch(`${API_URL}/lanches/${id}`, { method: 'DELETE' });
  },

  getCombos: async (): Promise<Combo[]> => {
    const res = await fetch(`${API_URL}/combos`);
    return res.json();
  },
  getCombo: async (id: string): Promise<Combo> => {
    const res = await fetch(`${API_URL}/combos/${id}`);
    return res.json();
  },
  createCombo: async (combo: Omit<Combo, 'id'>): Promise<Combo> => {
    const res = await fetch(`${API_URL}/combos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(combo),
    });
    return res.json();
  },
  updateCombo: async (id: string, combo: Omit<Combo, 'id'>): Promise<Combo> => {
    const res = await fetch(`${API_URL}/combos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(combo),
    });
    return res.json();
  },
  deleteCombo: async (id: string): Promise<void> => {
    await fetch(`${API_URL}/combos/${id}`, { method: 'DELETE' });
  },

  getPedidos: async (): Promise<Pedido[]> => {
    const res = await fetch(`${API_URL}/pedido`);
    return res.json();
  },
  getPedido: async (id: string): Promise<Pedido> => {
    const res = await fetch(`${API_URL}/pedido/${id}`);
    return res.json();
  },
  createPedido: async (pedido: Omit<Pedido, 'id'>): Promise<Pedido> => {
    const res = await fetch(`${API_URL}/pedido`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pedido),
    });
    return res.json();
  },
  updatePedido: async (id: string, pedido: Omit<Pedido, 'id'>): Promise<Pedido> => {
    const res = await fetch(`${API_URL}/pedido/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pedido),
    });
    return res.json();
  },
  deletePedido: async (id: string): Promise<void> => {
    await fetch(`${API_URL}/pedido/${id}`, { method: 'DELETE' });
  },
};

