import { IsNumber, IsInt } from 'class-validator';

export class CreateIngressoDto {
  @IsNumber()
  preco: number;

  @IsInt()
  sessaoId: number;
}
