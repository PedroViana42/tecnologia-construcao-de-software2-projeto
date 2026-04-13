import { z } from 'zod';

export const filmeSchema = z.object({
  titulo: z.string().min(1, 'Título é obrigatório'),
  sinopse: z.string().min(10, 'Sinopse deve ter no mínimo 10 caracteres'),
  classificacao: z.string().min(1, 'Classificação é obrigatória'),
  duracao: z.number().positive('Duração deve ser um número positivo'),
  generoId: z.number().int().min(1, 'Gênero é obrigatório'),
  dataLancamento: z.string().min(1, 'Data de lançamento é obrigatória'),
});

export type FilmeFormData = z.infer<typeof filmeSchema>;

export const salaSchema = z.object({
  numero: z.number().int().positive('Número da sala deve ser um inteiro positivo'),
  capacidade: z.number().positive('Capacidade deve ser um número positivo'),
});

export type SalaFormData = z.infer<typeof salaSchema>;

export const sessaoSchema = z.object({
  filmeId: z.number().int().min(1, 'Filme é obrigatório'),
  salaId: z.number().int().min(1, 'Sala é obrigatória'),
  data: z.string().refine((val) => {
    const dataSelecionada = new Date(val);
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    return dataSelecionada >= hoje;
  }, { message: 'Data não pode ser anterior à atual' }),
  horario: z.string().min(1, 'Horário é obrigatório'),
  valorIngresso: z.number().positive('Valor do ingresso deve ser positivo'),
});

export type SessaoFormData = z.infer<typeof sessaoSchema>;

export const lancheComboSchema = z.object({
  nome: z.string().min(1, 'Nome é obrigatório'),
  descricao: z.string().min(1, 'Descrição é obrigatória'),
  preco: z.number().positive('Preço deve ser um número positivo'),
});

export type LancheComboFormData = z.infer<typeof lancheComboSchema>;

export const pedidoSchema = z.object({
  cliente: z.string().min(1, 'Nome do cliente é obrigatório'),
  sessaoId: z.string().min(1, 'Sessão é obrigatória'),
  ingressos: z.array(z.object({
    tipo: z.enum(['Inteira', 'Meia']),
    quantidade: z.number().min(1, 'Mínimo de 1 ingresso'),
  })).min(1, 'Pelo menos um ingresso é necessário'),
  lancheId: z.string().optional(),
  valorTotal: z.number().optional(),
});

export type PedidoFormData = z.infer<typeof pedidoSchema>;
