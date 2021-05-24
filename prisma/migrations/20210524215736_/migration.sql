/*
  Warnings:

  - You are about to drop the column `rentabilidade` on the `Fundo_Update` table. All the data in the column will be lost.
  - The migration will add a unique constraint covering the columns `[cnpj_fundo,dt_comptc]` on the table `Fundo_Update`. If there are existing duplicate values, the migration will fail.

*/
-- AlterTable
ALTER TABLE "Fundo_Update" DROP COLUMN "rentabilidade";

-- CreateIndex
CREATE UNIQUE INDEX "Fundo_Update.cnpj_fundo_dt_comptc_unique" ON "Fundo_Update"("cnpj_fundo", "dt_comptc");
