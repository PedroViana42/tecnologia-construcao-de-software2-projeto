/*
  Warnings:

  - You are about to drop the column `genero` on the `Filme` table. All the data in the column will be lost.
  - You are about to drop the column `preco` on the `Ingresso` table. All the data in the column will be lost.
  - You are about to drop the column `adicional` on the `LancheCombo` table. All the data in the column will be lost.
  - You are about to drop the column `subtotal` on the `LancheCombo` table. All the data in the column will be lost.
  - You are about to drop the column `total` on the `Pedido` table. All the data in the column will be lost.
  - You are about to drop the `PedidoIngresso` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PedidoLancheCombo` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `classificacaoEtaria` to the `Filme` table without a default value. This is not possible if the table is not empty.
  - Added the required column `generoId` to the `Filme` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo` to the `Ingresso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valorPago` to the `Ingresso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `preco` to the `LancheCombo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valorTotal` to the `Pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valorIngresso` to the `Sessao` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PedidoIngresso" DROP CONSTRAINT "PedidoIngresso_ingressoId_fkey";

-- DropForeignKey
ALTER TABLE "PedidoIngresso" DROP CONSTRAINT "PedidoIngresso_pedidoId_fkey";

-- DropForeignKey
ALTER TABLE "PedidoLancheCombo" DROP CONSTRAINT "PedidoLancheCombo_lancheComboId_fkey";

-- DropForeignKey
ALTER TABLE "PedidoLancheCombo" DROP CONSTRAINT "PedidoLancheCombo_pedidoId_fkey";

-- AlterTable
ALTER TABLE "Filme" DROP COLUMN "genero",
ADD COLUMN     "classificacaoEtaria" TEXT NOT NULL,
ADD COLUMN     "generoId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Ingresso" DROP COLUMN "preco",
ADD COLUMN     "tipo" TEXT NOT NULL,
ADD COLUMN     "valorPago" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "LancheCombo" DROP COLUMN "adicional",
DROP COLUMN "subtotal",
ADD COLUMN     "preco" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Pedido" DROP COLUMN "total",
ADD COLUMN     "dataPedido" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "valorTotal" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Sessao" ADD COLUMN     "valorIngresso" DOUBLE PRECISION NOT NULL;

-- DropTable
DROP TABLE "PedidoIngresso";

-- DropTable
DROP TABLE "PedidoLancheCombo";

-- CreateTable
CREATE TABLE "Genero" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Genero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PedidoToIngresso" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_PedidoToIngresso_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_PedidoToLancheCombo" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_PedidoToLancheCombo_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Genero_nome_key" ON "Genero"("nome");

-- CreateIndex
CREATE INDEX "_PedidoToIngresso_B_index" ON "_PedidoToIngresso"("B");

-- CreateIndex
CREATE INDEX "_PedidoToLancheCombo_B_index" ON "_PedidoToLancheCombo"("B");

-- AddForeignKey
ALTER TABLE "Filme" ADD CONSTRAINT "Filme_generoId_fkey" FOREIGN KEY ("generoId") REFERENCES "Genero"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PedidoToIngresso" ADD CONSTRAINT "_PedidoToIngresso_A_fkey" FOREIGN KEY ("A") REFERENCES "Ingresso"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PedidoToIngresso" ADD CONSTRAINT "_PedidoToIngresso_B_fkey" FOREIGN KEY ("B") REFERENCES "Pedido"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PedidoToLancheCombo" ADD CONSTRAINT "_PedidoToLancheCombo_A_fkey" FOREIGN KEY ("A") REFERENCES "LancheCombo"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PedidoToLancheCombo" ADD CONSTRAINT "_PedidoToLancheCombo_B_fkey" FOREIGN KEY ("B") REFERENCES "Pedido"("id") ON DELETE CASCADE ON UPDATE CASCADE;
