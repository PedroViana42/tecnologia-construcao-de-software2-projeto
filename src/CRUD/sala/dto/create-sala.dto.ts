import { IsInt } from 'class-validator';

export class CreateSalaDto {
  @IsInt()
  numero: number;

  @IsInt()
  capacidade: number;

  @IsInt()
  cinemaId: number;
}
