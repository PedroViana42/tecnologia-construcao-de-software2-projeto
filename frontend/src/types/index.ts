export interface Filme {
  id: string;
  titulo: string;
  sinopse: string;
  classificacao: string;
  duracao: number;
  genero: string;
  datasExibicao: string;
}

export interface Sala {
  id: string;
  numero: string;
  capacidade: number;
}

export interface Sessao {
  id: string;
  filmeId: string;
  salaId: string;
  data: string;
  horario: string;
}

export interface Ingresso {
  id: string;
  sessaoId: string;
  tipo: 'Inteira' | 'Meia';
  valor: number;
}

export interface Lanche {
  id: string;
  nome: string;
  preco: number;
  tipo: string; // e.g. 'Pipoca', 'Bebida', 'Doce'
}

export interface Combo {
  id: string;
  nome: string;
  preco: number;
  lanchesIds: string[];
}

export interface Pedido {
  id: string;
  sessaoId: string;
  quantidadeIngressos: number;
  tipoIngresso: 'Inteira' | 'Meia';
  lancheId?: string;
  comboId?: string;
  valorTotal: number;
  dataPedido: string;
}
