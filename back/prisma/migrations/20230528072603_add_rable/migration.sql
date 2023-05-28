/*
  Warnings:

  - Added the required column `comment` to the `Reviews` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Reviews` ADD COLUMN `comment` VARCHAR(191) NOT NULL;
