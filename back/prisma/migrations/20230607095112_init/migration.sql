-- AlterTable
ALTER TABLE `UploadedFile` ADD COLUMN `stoneId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `UploadedFile` ADD CONSTRAINT `UploadedFile_stoneId_fkey` FOREIGN KEY (`stoneId`) REFERENCES `Stone`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
