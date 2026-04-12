import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import * as pg from 'pg';
import * as bcrypt from 'bcrypt';

const databaseUrl = process.env.DATABASE_URL;
const pool = new pg.Pool({ connectionString: databaseUrl });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
  log: ['info', 'warn', 'error'],
});

async function main() {
  console.log('🌱 Iniciando seed...');

  // 1. Criar Administrador Padrão
  const adminEmail = 'admin@cineweb.com';
  const existingAdmin = await prisma.usuario.findUnique({
    where: { email: adminEmail },
  });

  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash('Cineweb743', 10);
    await prisma.usuario.create({
      data: {
        nome: 'Administrador CineWeb',
        email: adminEmail,
        senha: hashedPassword,
      },
    });
    console.log('✅ Usuário admin criado: admin@cineweb.com / Cineweb743');
  } else {
    console.log('ℹ️ Usuário admin já existe.');
  }

  // 2. Garantir Cinema Padrão
  const cinemaExistente = await prisma.cinema.findFirst();
  if (!cinemaExistente) {
    await prisma.cinema.create({
      data: {
        nome: 'CineWeb Premium',
        localizacao: 'Av. das Estrelas, 1000 - Hollywood',
      },
    });
    console.log('✅ Cinema padrão criado.');
  }

  console.log('🏁 Seed finalizado com sucesso!');
}

main()
  .catch((e) => {
    console.error('❌ Erro no seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
