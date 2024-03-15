import { Elysia, t } from "elysia";
import { add, findAll, findById } from "../handlers/flights.handler";

export const flightRoutes = (app: Elysia) => (
  app.get("/flights", async () => {
    const flights = findAll();

    return flights;
  }),
  app.post(
    "/flight/create",
    async ({ body }) => {
      await add(body);
    },
    {
      body: t.Object({
        origin: t.String(),
        destination: t.String(),
        departure: t.String(),
        airline: t.String(),
        price: t.Number(),
      }),
    }
  ),
  app.get("/flight/:id", async ({ params }) => {
    const { id } = params;
    const flight = findById(parseInt(id));

    return flight;
  }),
  app.delete("/flight/:id", async ({ params }) => {
    const { id } = params;
    await findById(parseInt(id));
  })
);
