import { IsString } from 'class-validator';

export class CreateCinemaDto {
  @IsString()
  nome: string;

  @IsString()
  localizacao: string;
}
