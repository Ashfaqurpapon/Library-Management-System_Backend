/*
  Warnings:

  - The primary key for the `books` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `bookid` on the `books` table. All the data in the column will be lost.
  - The required column `bookId` was added to the `books` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "books" DROP CONSTRAINT "books_pkey",
DROP COLUMN "bookid",
ADD COLUMN     "bookId" TEXT NOT NULL,
ADD CONSTRAINT "books_pkey" PRIMARY KEY ("bookId");
