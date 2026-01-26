-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "car" (
    "id" SERIAL NOT NULL,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "version" TEXT NOT NULL,
    "oil_quantity" DECIMAL(65,30) NOT NULL,
    "coolant_quantity" DECIMAL(65,30) NOT NULL,
    "oil_engine_id" INTEGER NOT NULL,
    "oil_transmission_id" INTEGER NOT NULL,
    "oil_filter_id" INTEGER NOT NULL,
    "fuel_filter_id" INTEGER NOT NULL,
    "engine_air_filter_id" INTEGER NOT NULL,
    "cabin_filter_id" INTEGER NOT NULL,
    "coolant_id" INTEGER NOT NULL,

    CONSTRAINT "car_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "oil_engine" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "viscosity" TEXT NOT NULL,
    "specification" TEXT NOT NULL,

    CONSTRAINT "oil_engine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "oil_transmission" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "viscosity" TEXT NOT NULL,
    "specification" TEXT NOT NULL,

    CONSTRAINT "oil_transmission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "oil_filter" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "oil_filter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fuel_filter" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "fuel_filter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "engine_air_filter" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "engine_air_filter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cabin_filter" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "cabin_filter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "coolant" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "specification" TEXT NOT NULL,

    CONSTRAINT "coolant_pkey" PRIMARY KEY ("id")
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
ALTER TABLE "car" ADD CONSTRAINT "car_coolant_id_fkey" FOREIGN KEY ("coolant_id") REFERENCES "coolant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
