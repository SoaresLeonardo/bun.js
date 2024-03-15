import productsRepository from "../repositories/products-repository";

export async function findAll() {
  const products = await productsRepository.findAll();
  return products;
}
