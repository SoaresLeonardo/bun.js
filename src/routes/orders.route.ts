import { Elysia } from "elysia";

export const orderRoutes = new Elysia().get("/orders", async () => {
  return "orders";
});
