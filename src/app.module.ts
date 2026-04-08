import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { FilmeModule } from './CRUD/filme/filme.module';
import { CinemaModule } from './CRUD/cinema/cinema.module';
import { SalaModule } from './CRUD/sala/sala.module';
import { SessaoModule } from './CRUD/sessao/sessao.module';
import { IngressoModule } from './CRUD/ingresso/ingresso.module';
import { LancheComboModule } from './CRUD/lanche-combo/lanche-combo.module';
import { PedidoModule } from './CRUD/pedido/pedido.module';
import { GeneroModule } from './CRUD/genero/genero.module';

@Module({
  imports: [
    GeneroModule,
    FilmeModule,
    CinemaModule,
    SalaModule,
    SessaoModule,
    IngressoModule,
    LancheComboModule,
    PedidoModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
