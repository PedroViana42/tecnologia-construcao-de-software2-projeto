#!/usr/bin/env bash
# Exit on error
set -o errexit

echo "📦 Instalando dependências..."
npm install

echo "🔄 Rodando Migrations (usando DIRECT_URL)..."
DATABASE_URL="$DIRECT_URL" npx prisma migrate deploy

echo "⚙️ Gerando Prisma Client..."
npx prisma generate

echo "🌱 Rodando Seed..."
npx prisma db seed

echo "🏗️ Build final..."
npm run build
