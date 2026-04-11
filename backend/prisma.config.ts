import "dotenv/config";
import { defineConfig } from "prisma/config";

console.log('🔍 [PRISMA CONFIG] DATABASE_URL detectada:', process.env.DATABASE_URL ? 'OK' : 'MISSING');
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "ts-node prisma/seed.ts",
  },
  datasource: {
    url: process.env.DATABASE_URL,
  },
});
