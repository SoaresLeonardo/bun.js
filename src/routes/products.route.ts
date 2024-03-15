import { Elysia } from "elysia";
import { findAll } from "../handlers/products.handler";

export const productsRoutes = new Elysia().get("/products", async () => {
  return await findAll();
});
