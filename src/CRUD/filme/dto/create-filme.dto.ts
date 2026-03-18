import { IsString, IsInt, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateFilmeDto {
  @IsString()
  titulo: string;

  @IsString()
  genero: string;

  @IsInt()
  duracao: number;

  @IsDate()
  @Type(() => Date)
  dataLancamento: Date;
}
