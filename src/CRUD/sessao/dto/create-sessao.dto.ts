import { IsDate, IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateSessaoDto {
  @IsDate()
  @Type(() => Date)
  horario: Date;

  @IsInt()
  salaId: number;

  @IsInt()
  filmeId: number;

  @IsInt()
  cinemaId: number;
}
