import prisma from "../database/prisma";

class ProductsRepository {
  async findAll() {
    return await prisma.product.findMany({
      include:{
        restaurant: true,
      }
    });
  }
}

export default new ProductsRepository();
