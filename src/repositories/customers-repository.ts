import prisma from "../database/prisma";

class CustomersRepository {
  async findAll() {
    return await prisma.customer.findMany({
      include: {
        Order: true,
      },
    });
  }
}

export default new CustomersRepository();
