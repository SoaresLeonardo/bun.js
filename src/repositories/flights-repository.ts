import prisma from "../database/prisma";
import type { AddFlightDTO } from "../dtos/flights";

class FlightsRepository {
  async findAll() {
    return await prisma.flights.findMany({
      orderBy: {
        departure: "desc",
      },
      include: {
        reservations: true,
      },
    });
  }

  async add(data: AddFlightDTO) {
    const { departure, ...rest } = data;
    return await prisma.flights.create({
      data: {
        departure: new Date(departure),
        ...rest,
      },
    });
  }

  async findById(id: number) {
    return await prisma.flights.findUnique({
      where: {
        id,
      },
      include: {
        reservations: true,
      },
    });
  }

  async removeById(id: number) {
    const flightIsExists = await prisma.flights.findUnique({
      where: {
        id,
      },
    });

    if (!flightIsExists) return;

    return await prisma.flights.delete({
      where: {
        id,
      },
    });
  }
}


export default new FlightsRepository();