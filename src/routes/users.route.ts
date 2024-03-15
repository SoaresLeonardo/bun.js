import { t, type Elysia } from "elysia";
import { add, findAll, findById, removeById } from "../handlers/users.handler";
import { UserRole } from "../dtos/users";
import { NotAManagerError } from "./errors/not-a-manager-error";

export const usersRoutes = (elisia: Elysia) =>
  elisia.guard(
    {
      beforeHandle: ({ headers }) => {
        const role = headers.role as UserRole | null;

        console.log(role);

        if (!role) {
          return {
            message: "Role invalid",
          };
        }

        if (role !== "ADMIN") {
          throw new NotAManagerError();
        }
      },
    },
    (app) => (
      app.get("/users", async () => {
        const users = await findAll();
        return users;
      }),
      app.get("/users/:id", async ({ params }) => {
        const passenger = await findById(parseInt(params.id));
        return passenger;
      }),
      app.delete("/users/:id", async ({ params }) => {
        await removeById(parseInt(params.id));
        return {
          response: "success removed",
        };
      })
    )
  );
