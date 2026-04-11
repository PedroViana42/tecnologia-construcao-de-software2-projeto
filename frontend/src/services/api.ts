import { Filme, Sala, Sessao, Ingresso, LancheCombo, Pedido, Genero } from '../types';

const BASE_URL = (import.meta.env.VITE_API_URL || 'http://localhost:3000').replace(/\/$/, '');
const API_URL = BASE_URL.endsWith('/api') ? BASE_URL : `${BASE_URL}/api`;

const handleResponse = async (res: Response) => {
  if (!res.ok) {
    if (res.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
      throw new Error('Sessão expirada. Faça login novamente.');
    }
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || `Erro na API: ${res.status}`);
  }
  return res.json();
};

const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
  const token = localStorage.getItem('token');
  const headers = {
    ...options.headers,
    'x-access-key': 'CINE2026',
    ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
  };
  return fetch(url, { ...options, headers });
};

export const api = {
  // ... existing methods ...
  getFilmes: async (): Promise<Filme[]> => {
    const res = await fetchWithAuth(`${API_URL}/filme`);
    return handleResponse(res);
  },
  getFilme: async (id: string): Promise<Filme> => {
    const res = await fetchWithAuth(`${API_URL}/filme/${id}`);
    return handleResponse(res);
  },
  createFilme: async (filme: Omit<Filme, 'id'>): Promise<Filme> => {
    const res = await fetchWithAuth(`${API_URL}/filme`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(filme),
    });
    return handleResponse(res);
  },
  updateFilme: async (id: string, filme: Omit<Filme, 'id'>): Promise<Filme> => {
    const res = await fetchWithAuth(`${API_URL}/filme/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(filme),
    });
    return handleResponse(res);
  },
  deleteFilme: async (id: string): Promise<void> => {
    const res = await fetchWithAuth(`${API_URL}/filme/${id}`, { method: 'DELETE' });
    await handleResponse(res);
  },

  getSalas: async (): Promise<Sala[]> => {
    const res = await fetchWithAuth(`${API_URL}/sala`);
    return handleResponse(res);
  },
  getSala: async (id: string): Promise<Sala> => {
    const res = await fetchWithAuth(`${API_URL}/sala/${id}`);
    return handleResponse(res);
  },
  createSala: async (sala: Omit<Sala, 'id'>): Promise<Sala> => {
    const res = await fetchWithAuth(`${API_URL}/sala`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sala),
    });
    return handleResponse(res);
  },
  updateSala: async (id: string, sala: Omit<Sala, 'id'>): Promise<Sala> => {
    const res = await fetchWithAuth(`${API_URL}/sala/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sala),
    });
    return handleResponse(res);
  },
  deleteSala: async (id: string): Promise<void> => {
    const res = await fetchWithAuth(`${API_URL}/sala/${id}`, { method: 'DELETE' });
    await handleResponse(res);
  },

  getSessoes: async (): Promise<Sessao[]> => {
    const res = await fetchWithAuth(`${API_URL}/sessao`);
    return handleResponse(res);
  },
  getSessao: async (id: string): Promise<Sessao> => {
    const res = await fetchWithAuth(`${API_URL}/sessao/${id}`);
    return handleResponse(res);
  },
  createSessao: async (sessao: Omit<Sessao, 'id'>): Promise<Sessao> => {
    const res = await fetchWithAuth(`${API_URL}/sessao`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sessao),
    });
    return handleResponse(res);
  },
  updateSessao: async (id: string, sessao: Omit<Sessao, 'id'>): Promise<Sessao> => {
    const res = await fetchWithAuth(`${API_URL}/sessao/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sessao),
    });
    return handleResponse(res);
  },
  deleteSessao: async (id: string): Promise<void> => {
    const res = await fetchWithAuth(`${API_URL}/sessao/${id}`, { method: 'DELETE' });
    await handleResponse(res);
  },

  getIngressos: async (): Promise<Ingresso[]> => {
    const res = await fetchWithAuth(`${API_URL}/ingresso`);
    return handleResponse(res);
  },
  createIngresso: async (ingresso: Omit<Ingresso, 'id'>): Promise<Ingresso> => {
    const res = await fetchWithAuth(`${API_URL}/ingresso`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...ingresso,
        sessaoId: Number(ingresso.sessaoId)
      }),
    });
    return handleResponse(res);
  },

  getLanches: async (): Promise<LancheCombo[]> => {
    const res = await fetchWithAuth(`${API_URL}/lanches`);
    return handleResponse(res);
  },
  getLanche: async (id: string): Promise<LancheCombo> => {
    const res = await fetchWithAuth(`${API_URL}/lanches/${id}`);
    return handleResponse(res);
  },
  createLanche: async (lanche: Omit<LancheCombo, 'id'>): Promise<LancheCombo> => {
    const res = await fetchWithAuth(`${API_URL}/lanches`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lanche),
    });
    return handleResponse(res);
  },
  updateLanche: async (id: string, lanche: Omit<LancheCombo, 'id'>): Promise<LancheCombo> => {
    const res = await fetchWithAuth(`${API_URL}/lanches/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lanche),
    });
    return handleResponse(res);
  },
  deleteLanche: async (id: string): Promise<void> => {
    const res = await fetchWithAuth(`${API_URL}/lanches/${id}`, { method: 'DELETE' });
    await handleResponse(res);
  },


  getPedidos: async (): Promise<Pedido[]> => {
    const res = await fetchWithAuth(`${API_URL}/pedido`);
    return handleResponse(res);
  },
  getPedido: async (id: string): Promise<Pedido> => {
    const res = await fetchWithAuth(`${API_URL}/pedido/${id}`);
    return handleResponse(res);
  },
  createPedido: async (pedido: any): Promise<Pedido> => {
    const res = await fetchWithAuth(`${API_URL}/pedido`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pedido),
    });
    return handleResponse(res);
  },
  updatePedido: async (id: string, pedido: Omit<Pedido, 'id'>): Promise<Pedido> => {
    const res = await fetchWithAuth(`${API_URL}/pedido/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pedido),
    });
    return handleResponse(res);
  },
  deletePedido: async (id: string): Promise<void> => {
    const res = await fetchWithAuth(`${API_URL}/pedido/${id}`, { method: 'DELETE' });
    await handleResponse(res);
  },

  getGeneros: async (): Promise<Genero[]> => {
    const res = await fetchWithAuth(`${API_URL}/CRUD/genero`);
    return handleResponse(res);
  },
  createGenero: async (genero: { nome: string }): Promise<Genero> => {
    const res = await fetchWithAuth(`${API_URL}/CRUD/genero`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(genero),
    });
    return handleResponse(res);
  },
  updateGenero: async (id: number, genero: { nome: string }): Promise<Genero> => {
    const res = await fetchWithAuth(`${API_URL}/CRUD/genero/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(genero),
    });
    return handleResponse(res);
  },

  post: async (path: string, body: any) => {
    const res = await fetch(`${API_URL}${path}`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'x-access-key': 'CINE2026'
      },
      body: JSON.stringify(body),
    });
    return { data: await handleResponse(res) };
  },
};

export default api;
