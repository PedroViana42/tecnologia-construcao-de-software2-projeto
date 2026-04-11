export interface Filme {
  id: number;
  titulo: string;
  duracao: number;
  dataLancamento: string;
  classificacaoEtaria: string;
  generoId: number;
  genero?: Genero;
}

export interface Sala {
  id: number;
  numero: number;
  capacidade: number;
  cinemaId: number;
}

export interface Sessao {
  id: number;
  filmeId: number;
  salaId: number;
  cinemaId: number;
  horario: string;
  valorIngresso: number;
}

export interface Ingresso {
  id: number;
  sessaoId: number;
  tipo: 'Inteira' | 'Meia';
  valorPago: number;
}

export interface LancheCombo {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
}

export interface Pedido {
  id: number;
  cliente: string;
  dataPedido: string;
  valorTotal: number;
  ingressos?: Ingresso[];
  lancheCombos?: LancheCombo[];
}

export interface Genero {
  id: number;
  nome: string;
}
