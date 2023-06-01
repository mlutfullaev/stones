/*
  Warnings:

  - You are about to drop the column `entity_id` on the `UploadedFile` table. All the data in the column will be lost.
  - You are about to drop the column `entity_type` on the `UploadedFile` table. All the data in the column will be lost.
  - You are about to drop the column `nameMini` on the `UploadedFile` table. All the data in the column will be lost.
  - You are about to drop the `services` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX `UploadedFile_nameMini_key` ON `UploadedFile`;

-- AlterTable
ALTER TABLE `UploadedFile` DROP COLUMN `entity_id`,
    DROP COLUMN `entity_type`,
    DROP COLUMN `nameMini`,
    ADD COLUMN `serviceTitle` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `services`;

-- CreateTable
CREATE TABLE `Services` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `serviceTitle` VARCHAR(191) NOT NULL,
    `info` TEXT NOT NULL,

    UNIQUE INDEX `Services_title_key`(`title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UploadedFile` ADD CONSTRAINT `UploadedFile_serviceTitle_fkey` FOREIGN KEY (`serviceTitle`) REFERENCES `Services`(`title`) ON DELETE CASCADE ON UPDATE CASCADE;
