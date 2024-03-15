import { Elysia, t } from "elysia";
import { auth } from "../handlers/auth.handler";
import { authentication } from "./auth";

export const authRoutes = new Elysia().use(authentication).post(
  "/auth",
  async ({ body }) => {
    return auth(body);
  },
  {
    body: t.Object({
      email: t.String(),
      password: t.String(),
    }),
  }
)