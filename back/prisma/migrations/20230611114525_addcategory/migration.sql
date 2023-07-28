-- AlterTable
ALTER TABLE `Stone` ADD COLUMN `categoryTitle` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Category_title_key`(`title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Stone` ADD CONSTRAINT `Stone_categoryTitle_fkey` FOREIGN KEY (`categoryTitle`) REFERENCES `Category`(`title`) ON DELETE SET NULL ON UPDATE CASCADE;
