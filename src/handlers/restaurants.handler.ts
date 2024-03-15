import restaurantsRepository from "../repositories/restaurants-repository";

export async function findAll() {
  const restaurants = await restaurantsRepository.findAll();

  return restaurants;
}
export async function create() {}
