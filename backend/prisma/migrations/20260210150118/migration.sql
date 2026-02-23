/*
  Warnings:

  - The primary key for the `cabin_filter` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `car` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `coolant` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `engine_air_filter` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `fuel_filter` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `oil_engine` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `oil_filter` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `oil_transmission` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `cabin_filter_with_coal_id` to the `car` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "car" DROP CONSTRAINT "car_cabin_filter_id_fkey";

-- DropForeignKey
ALTER TABLE "car" DROP CONSTRAINT "car_coolant_id_fkey";

-- DropForeignKey
ALTER TABLE "car" DROP CONSTRAINT "car_engine_air_filter_id_fkey";

-- DropForeignKey
ALTER TABLE "car" DROP CONSTRAINT "car_fuel_filter_id_fkey";

-- DropForeignKey
ALTER TABLE "car" DROP CONSTRAINT "car_oil_engine_id_fkey";

-- DropForeignKey
ALTER TABLE "car" DROP CONSTRAINT "car_oil_filter_id_fkey";

-- DropForeignKey
ALTER TABLE "car" DROP CONSTRAINT "car_oil_transmission_id_fkey";

-- AlterTable
ALTER TABLE "cabin_filter" DROP CONSTRAINT "cabin_filter_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "cabin_filter_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "cabin_filter_id_seq";

-- AlterTable
ALTER TABLE "car" DROP CONSTRAINT "car_pkey",
ADD COLUMN     "cabin_filter_with_coal_id" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "oil_engine_id" SET DATA TYPE TEXT,
ALTER COLUMN "oil_transmission_id" SET DATA TYPE TEXT,
ALTER COLUMN "oil_filter_id" SET DATA TYPE TEXT,
ALTER COLUMN "fuel_filter_id" SET DATA TYPE TEXT,
ALTER COLUMN "engine_air_filter_id" SET DATA TYPE TEXT,
ALTER COLUMN "cabin_filter_id" SET DATA TYPE TEXT,
ALTER COLUMN "coolant_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "car_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "car_id_seq";

-- AlterTable
ALTER TABLE "coolant" DROP CONSTRAINT "coolant_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "coolant_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "coolant_id_seq";

-- AlterTable
ALTER TABLE "engine_air_filter" DROP CONSTRAINT "engine_air_filter_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "engine_air_filter_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "engine_air_filter_id_seq";

-- AlterTable
ALTER TABLE "fuel_filter" DROP CONSTRAINT "fuel_filter_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "fuel_filter_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "fuel_filter_id_seq";

-- AlterTable
ALTER TABLE "oil_engine" DROP CONSTRAINT "oil_engine_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "oil_engine_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "oil_engine_id_seq";

-- AlterTable
ALTER TABLE "oil_filter" DROP CONSTRAINT "oil_filter_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "oil_filter_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "oil_filter_id_seq";

-- AlterTable
ALTER TABLE "oil_transmission" DROP CONSTRAINT "oil_transmission_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "oil_transmission_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "oil_transmission_id_seq";

-- CreateTable
CREATE TABLE "cabin_filter_with_coal" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "cabin_filter_with_coal_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "car" ADD CONSTRAINT "car_oil_engine_id_fkey" FOREIGN KEY ("oil_engine_id") REFERENCES "oil_engine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "car" ADD CONSTRAINT "car_oil_transmission_id_fkey" FOREIGN KEY ("oil_transmission_id") REFERENCES "oil_transmission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "car" ADD CONSTRAINT "car_oil_filter_id_fkey" FOREIGN KEY ("oil_filter_id") REFERENCES "oil_filter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "car" ADD CONSTRAINT "car_fuel_filter_id_fkey" FOREIGN KEY ("fuel_filter_id") REFERENCES "fuel_filter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "car" ADD CONSTRAINT "car_engine_air_filter_id_fkey" FOREIGN KEY ("engine_air_filter_id") REFERENCES "engine_air_filter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "car" ADD CONSTRAINT "car_cabin_filter_id_fkey" FOREIGN KEY ("cabin_filter_id") REFERENCES "cabin_filter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "car" ADD CONSTRAINT "car_cabin_filter_with_coal_id_fkey" FOREIGN KEY ("cabin_filter_with_coal_id") REFERENCES "cabin_filter_with_coal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "car" ADD CONSTRAINT "car_coolant_id_fkey" FOREIGN KEY ("coolant_id") REFERENCES "coolant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
