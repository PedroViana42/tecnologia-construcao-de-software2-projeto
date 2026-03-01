#!/bin/sh
set -e

DB_HOST=${DB_HOST:-postgres}
DB_PORT=${DB_PORT:-5432}

echo "Waiting for database $DB_HOST:$DB_PORT..."
while ! nc -z $DB_HOST $DB_PORT; do
  sleep 1
done

echo "Database available — running migrations"
# Tenta aplicar migrations (deploy), se falhar faz db push como fallback
npx prisma migrate deploy || npx prisma db push

echo "Generating Prisma client"
npx prisma generate

echo "Starting application"
exec "$@"
