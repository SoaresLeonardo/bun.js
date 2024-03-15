import prisma from "../database/prisma";

class EvaluationsRepository {
  async findAll() {
    return await prisma.evaluation.findMany();
  }
}

export default new EvaluationsRepository();
