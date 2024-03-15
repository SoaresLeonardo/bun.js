import { Elysia } from "elysia";
import { findAll } from "../handlers/evaluations.handler";

export const evaluationsRoutes = new Elysia().get("/evaluations", async () => {
  return await findAll();
});
