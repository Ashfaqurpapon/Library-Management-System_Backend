/*
  Warnings:

  - You are about to drop the column `createdAt` on the `borrowRecord` table. All the data in the column will be lost.
  - You are about to drop the column `returnDate` on the `borrowRecord` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `borrowRecord` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "borrowRecord" DROP COLUMN "createdAt",
DROP COLUMN "returnDate",
DROP COLUMN "updatedAt",
ALTER COLUMN "borrowDate" SET DEFAULT CURRENT_TIMESTAMP;
