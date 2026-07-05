/*
  Warnings:

  - Added the required column `address` to the `settings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `settings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mobile` to the `settings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `settings` ADD COLUMN `address` VARCHAR(191) NOT NULL,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `mobile` INTEGER NOT NULL;
