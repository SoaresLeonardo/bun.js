import prisma from "../database/prisma";

class MenusRepository {
  async findAll() {
    return await prisma.menu.findMany({
      include: {
        restaurant: true,
      },
    });
  }
}

export default new MenusRepository();
