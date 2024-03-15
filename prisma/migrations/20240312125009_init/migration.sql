-- CreateTable
CREATE TABLE "Flights" (
    "id" SERIAL NOT NULL,
    "origin" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "departure" TIMESTAMP(3) NOT NULL,
    "airline" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Flights_pkey" PRIMARY KEY ("id")
);
