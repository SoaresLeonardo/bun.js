import { Elysia } from "elysia";
import { findAll } from "../handlers/restaurants.handler";

export const restaurantRoutes = new Elysia().get("/restaurants", async () => {
  return await findAll();
});
