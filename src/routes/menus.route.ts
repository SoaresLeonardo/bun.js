import { Elysia } from "elysia";
import { findAll } from "../handlers/menus.handler";

export const menusRoutes = new Elysia().get("/menus", async () => {
  return await findAll();
});
