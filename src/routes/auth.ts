import { Elysia } from "elysia";

export const authentication = new Elysia()
  .derive(({}) => {
    return {
      getUser: () => {
        return "a";
      },
    };
  })
  .derive(({getUser}) => {
    return {
      authorize: () => {
        return true;
      },
    };
  });
