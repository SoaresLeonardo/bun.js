import evaluationsRepository from "../repositories/evaluations-repository";

export async function findAll() {
  const evaluations = await evaluationsRepository.findAll();

  return evaluations;
}
