-- AlterTable
ALTER TABLE `Stone` MODIFY `country` VARCHAR(191) NULL,
    MODIFY `radioactivityClass` VARCHAR(191) NULL,
    MODIFY `waterAbsorption` VARCHAR(191) NULL,
    MODIFY `density` VARCHAR(191) NULL,
    MODIFY `abrasion` VARCHAR(191) NULL,
    MODIFY `otherNames` VARCHAR(191) NULL,
    MODIFY `similarGranites` VARCHAR(191) NULL,
    MODIFY `variants` JSON NULL;
