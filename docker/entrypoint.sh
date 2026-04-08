#!/bin/sh
set -e

# Aguarda o DB estar disponível (o healthcheck do Compose já ajuda, mas NC é resiliente)
DB_HOST=${DB_HOST:-postgres}
DB_PORT=${DB_PORT:-5432}

echo "🟡 Aguardando banco de dados em $DB_HOST:$DB_PORT..."
while ! nc -z $DB_HOST $DB_PORT; do
  sleep 1
done
echo "🟢 Banco disponível!"

# 1. Aplica migrations (deploy é seguro, não apaga dados)
echo "🚀 Rodando Prisma Migrate Deploy..."
npx prisma migrate deploy

# 2. Gera o Prisma Client (garante tipagem no container)
echo "🛠️ Gerando Prisma Client..."
npx prisma generate

# 3. Inicia a aplicação (exec repassa sinais de interrupção corretamente)
echo "✅ Iniciando servidor..."
exec "$@"

