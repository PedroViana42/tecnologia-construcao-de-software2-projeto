import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import * as pg from 'pg';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) {
      console.error('❌ [PRISMA] DATABASE_URL não encontrada no ambiente!');
      throw new Error('DATABASE_URL environment variable is not set');
    }

    console.log('📡 [PRISMA] Tentando conectar ao banco via @prisma/adapter-pg...');
    const pool = new pg.Pool({ connectionString: databaseUrl });
    const adapter = new PrismaPg(pool);
    super({ adapter });
  }

  async onModuleInit() {
    try {
      await this.$connect();
      console.log('✅ [PRISMA] Conexão com o banco de dados estabelecida com sucesso!');
      
      // Seed automático do Cinema ID 1
      await (this as any).cinema.upsert({
        where: { id: 1 },
        update: {},
        create: {
          id: 1,
          nome: 'CineWeb',
          localizacao: 'Localização Padrão Sistema',
        },
      });
      console.log('🎬 [PRISMA] Cinema padrão (ID: 1) verificado.');

      // Seed automático do Gênero ID 1
      await (this as any).genero.upsert({
        where: { id: 1 },
        update: {},
        create: {
          id: 1,
          nome: 'Geral/Ação',
        },
      });
      console.log('🎭 [PRISMA] Gênero padrão (ID: 1 - Geral) verificado.');
      
    } catch (error) {
      console.error('❌ [PRISMA] Erro crítico na conexão ou no seed automático:');
      console.error(error);
    }
  }
}
