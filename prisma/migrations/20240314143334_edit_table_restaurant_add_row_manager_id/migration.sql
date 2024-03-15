/*
  Warnings:

  - Added the required column `managerId` to the `restaurants` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "restaurants" ADD COLUMN     "managerId" INTEGER NOT NULL;
