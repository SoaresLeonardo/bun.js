import { Elysia } from "elysia";
import { findAll } from "../handlers/customers.handler";

export const customersRoutes = new Elysia().get("/customers", async () => {
  return await findAll();
});
