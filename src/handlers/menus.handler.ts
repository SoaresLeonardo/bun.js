import menusRepository from "../repositories/menus-repository";

export async function findAll() {
  const menus = await menusRepository.findAll();

  return menus;
}
