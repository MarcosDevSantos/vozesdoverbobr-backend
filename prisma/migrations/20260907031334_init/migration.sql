/*
  Warnings:

  - You are about to drop the column `userId` on the `JornadaDeMissas` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userEmail` to the `JornadaDeMissas` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `JornadaDeMissas` DROP FOREIGN KEY `JornadaDeMissas_userId_fkey`;

-- DropIndex
DROP INDEX `JornadaDeMissas_userId_fkey` ON `JornadaDeMissas`;

-- AlterTable
ALTER TABLE `JornadaDeMissas` DROP COLUMN `userId`,
    ADD COLUMN `userEmail` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_email_key` ON `User`(`email`);

-- AddForeignKey
ALTER TABLE `JornadaDeMissas` ADD CONSTRAINT `JornadaDeMissas_userEmail_fkey` FOREIGN KEY (`userEmail`) REFERENCES `User`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;
