import { Elysia } from "elysia";
import { flightRoutes } from "./routes/flights.route";
import { usersRoutes } from "./routes/users.route";
import { authRoutes } from "./routes/auth.route";
import { verify } from "jsonwebtoken";
import type { UserRole } from "@prisma/client";
import { createUserRoutes } from "./routes/create-user.route";
import swagger from "@elysiajs/swagger";
import { UnauthorizedError } from "./routes/errors/unauthorized-error";
import { NotAManagerError } from "./routes/errors/not-a-manager-error";
import { authentication } from "./routes/auth";
import { customersRoutes } from "./routes/customers.route";
import { orderRoutes } from "./routes/orders.route";
import { restaurantRoutes } from "./routes/restaurants.route";
import { productsRoutes } from "./routes/products.route";
import { evaluationsRoutes } from "./routes/evaluations.route";
import { menusRoutes } from "./routes/menus.route";

interface TokenPayload {
  sub: string;
  role: UserRole;
}

const port = 3001;

new Elysia()
  .use(swagger())
  .use(authentication)
  .use(authRoutes)
  .use(createUserRoutes)
  .use(customersRoutes)
  .use(restaurantRoutes)
  .use(productsRoutes)
  .use(orderRoutes)
  .use(evaluationsRoutes)
  .use(menusRoutes)
  .get("/hello", () => "hello")
  .error({
    UNAUTHORIZED: UnauthorizedError,
    NOT_A_MANAGER: NotAManagerError,
  })
  .onError(({ code, error, set }) => {
    switch (code) {
      case "UNAUTHORIZED":
        set.status = 401;
        return { code, message: error.message };
      case "NOT_A_MANAGER":
        set.status = 401;
        return { code, message: error.message };
    }
  })
  .guard(
    {
      beforeHandle: ({ headers }) => {
        const authToken = headers.authorization;

        if (!authToken) {
          return {
            message: "Auth dont Provider",
          };
        }

        const [, token] = authToken.split(" ");

        try {
          if (process.env.JWT_SECRET_KEY === undefined) {
            throw new Error("error on sync enviroment variables");
          }

          const decoded = verify(
            token,
            process.env.JWT_SECRET_KEY
          ) as TokenPayload;

          headers.role = decoded.role;

          console.log(decoded);
        } catch (err) {}
      },
    },
    (app) => (app.use(flightRoutes), app.use(usersRoutes))
  )

  .listen(3001, () =>
    console.log(`Server is started at http://localhost:${port}`)
  );
