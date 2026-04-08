import { z } from 'zod';

export const filmeSchema = z.object({
  titulo: z.string().min(1, 'Título é obrigatório'),
  sinopse: z.string().min(10, 'Sinopse deve ter no mínimo 10 caracteres'),
  classificacao: z.string().min(1, 'Classificação é obrigatória'),
  duracao: z.number().positive('Duração deve ser um número positivo'),
  genero: z.string().min(1, 'Gênero é obrigatório'),
  datasExibicao: z.string().min(1, 'Datas de exibição são obrigatórias'),
});

export type FilmeFormData = z.infer<typeof filmeSchema>;

export const salaSchema = z.object({
  numero: z.string().min(1, 'Número da sala é obrigatório'),
  capacidade: z.number().positive('Capacidade deve ser um número positivo'),
});

export type SalaFormData = z.infer<typeof salaSchema>;

export const sessaoSchema = z.object({
  filmeId: z.string().min(1, 'Filme é obrigatório'),
  salaId: z.string().min(1, 'Sala é obrigatória'),
  data: z.string().refine((val) => {
    const dataSelecionada = new Date(val);
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    return dataSelecionada >= hoje;
  }, { message: 'Data não pode ser anterior à atual' }),
  horario: z.string().min(1, 'Horário é obrigatório'),
});

export type SessaoFormData = z.infer<typeof sessaoSchema>;

export const lancheSchema = z.object({
  nome: z.string().min(1, 'Nome é obrigatório'),
  preco: z.number().positive('Preço deve ser um número positivo'),
  tipo: z.string().min(1, 'Tipo é obrigatório'),
});

export type LancheFormData = z.infer<typeof lancheSchema>;

export const comboSchema = z.object({
  nome: z.string().min(1, 'Nome é obrigatório'),
  preco: z.number().positive('Preço deve ser um número positivo'),
  lanchesIds: z.array(z.string()).min(1, 'Selecione pelo menos um lanche'),
});

export type ComboFormData = z.infer<typeof comboSchema>;

export const pedidoSchema = z.object({
  sessaoId: z.string().min(1, 'Sessão é obrigatória'),
  quantidadeIngressos: z.number().min(1, 'Mínimo de 1 ingresso'),
  tipoIngresso: z.enum(['Inteira', 'Meia']),
  lancheId: z.string().optional(),
  comboId: z.string().optional(),
  valorTotal: z.number().optional(),
});

export type PedidoFormData = z.infer<typeof pedidoSchema>;
