import customersRepository from "../repositories/customers-repository";

export async function findAll() {
  const customers = customersRepository.findAll();

  return customers;
}
export async function create() {}
