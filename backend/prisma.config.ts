import "dotenv/config";
import { defineConfig } from "prisma/config";

console.log('🔍 [PRISMA CONFIG] DATABASE_URL detectada:', process.env.DATABASE_URL ? 'OK' : 'MISSING');
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "npx tsx prisma/seed.ts",
  },
  datasource: {
    url: process.env.DATABASE_URL,
  },
});
