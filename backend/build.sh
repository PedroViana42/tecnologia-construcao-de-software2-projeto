#!/usr/bin/env bash
# Exit on error
set -o errexit

echo "📦 Instalando dependências..."
npm install

echo "🔄 Rodando Migrations (usando DIRECT_URL)..."
DATABASE_URL="$DIRECT_URL" npx prisma migrate deploy

echo "⚙️ Gerando Prisma Client..."
export PRISMA_CLIENT_ENGINE_TYPE=library
export PRISMA_CLI_QUERY_ENGINE_TYPE=library
npx prisma generate

echo "🌱 Rodando Seed..."
# Forçar motor também para o processo do seed
PRISMA_CLIENT_ENGINE_TYPE=library npx prisma db seed

echo "🏗️ Build final..."
npm run build
