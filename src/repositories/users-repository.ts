import prisma from "../database/prisma";
import type { AddUserDTO } from "../dtos/users";

class PassengersRepository {
  async findAll() {
    return await prisma.users.findMany({
      include: {
        reservations: true,
      },
    });
  }
  async findByEmail(email: string) {
    return await prisma.users.findUnique({
      where: {
        email,
      },
    });
  }
  async add(data: AddUserDTO) {
    return await prisma.users.create({
      data,
    });
  }
  async findById(id: number) {
    return await prisma.users.findUnique({
      where: {
        id,
      },
      include: {
        reservations: true,
      },
    });
  }

  async removeById(id: number) {
    return await prisma.users.delete({
      where: {
        id,
      },
    });
  }
}

export default new PassengersRepository();
