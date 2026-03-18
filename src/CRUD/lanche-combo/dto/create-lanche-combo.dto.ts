import { IsString, IsNumber } from 'class-validator';

export class CreateLancheComboDto {
  @IsString()
  nome: string;

  @IsString()
  descricao: string;

  @IsNumber()
  adicional: number;

  @IsNumber()
  subtotal: number;
}
