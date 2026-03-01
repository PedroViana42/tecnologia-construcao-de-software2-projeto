/*
  Warnings:

  - You are about to drop the column `location` on the `Cinema` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Cinema` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Filme` table. All the data in the column will be lost.
  - You are about to drop the column `capacity` on the `Sala` table. All the data in the column will be lost.
  - You are about to drop the column `number` on the `Sala` table. All the data in the column will be lost.
  - Added the required column `localizacao` to the `Cinema` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `Cinema` table without a default value. This is not possible if the table is not empty.
  - Added the required column `titulo` to the `Filme` table without a default value. This is not possible if the table is not empty.
  - Added the required column `capacidade` to the `Sala` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numero` to the `Sala` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cinema" DROP COLUMN "location",
DROP COLUMN "name",
ADD COLUMN     "localizacao" TEXT NOT NULL,
ADD COLUMN     "nome" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Filme" DROP COLUMN "title",
ADD COLUMN     "titulo" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Sala" DROP COLUMN "capacity",
DROP COLUMN "number",
ADD COLUMN     "capacidade" INTEGER NOT NULL,
ADD COLUMN     "numero" INTEGER NOT NULL;
