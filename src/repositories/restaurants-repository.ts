import prisma from "../database/prisma";

class RestaurantsRepository {
  async findAll() {
    return await prisma.restaurant.findMany({
      include: {
        Order: true,
        Product: true,
        Evaluation: true,
      },
    });
  }
}

export default new RestaurantsRepository();
