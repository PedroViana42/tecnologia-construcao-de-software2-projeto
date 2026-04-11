const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const pg = require('pg');
const bcrypt = require('bcrypt');

const databaseUrl = process.env.DATABASE_URL || 'postgresql://prisma:prisma123@postgres:5432/appdb';
const pool = new pg.Pool({ connectionString: databaseUrl });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Iniciando seed (JS with Adapter)...');

  const adminEmail = 'admin@cineweb.com';
  const existingAdmin = await prisma.usuario.findUnique({
    where: { email: adminEmail },
  });

  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash('admin123', 10);
    await prisma.usuario.create({
      data: {
        nome: 'Administrador CineWeb',
        email: adminEmail,
        senha: hashedPassword,
      },
    });
    console.log('✅ Usuário admin criado: admin@cineweb.com / admin123');
  } else {
    console.log('ℹ️ Usuário admin já existe.');
  }

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
