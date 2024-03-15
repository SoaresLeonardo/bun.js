import { t, type Elysia } from "elysia";
import { add } from "../handlers/users.handler";
import { UserRole } from "../dtos/users";

export const createUserRoutes = (elisia: Elysia) =>
  elisia.post(
    "/user/create",
    async ({ body }) => {
      await add(body);

      return {
        response: "success added",
      };
    },
    {
      body: t.Object({
        name: t.String(),
        email: t.String(),
        password: t.String(),
        role: t.Enum(UserRole),
      }),
    }
  );
