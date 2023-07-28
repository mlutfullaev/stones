-- AlterTable
ALTER TABLE `UploadedFile` ADD COLUMN `blogId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `UploadedFile` ADD CONSTRAINT `UploadedFile_blogId_fkey` FOREIGN KEY (`blogId`) REFERENCES `Blog`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
