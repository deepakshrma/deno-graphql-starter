import { Router } from "https://deno.land/x/oak/mod.ts";
import { graphql } from "https://cdn.skypack.dev/graphql";
import schema from "../schema/index.ts";
import resolvers from "../resolvers/index.ts";
import { AppContext } from "../interfaces.ts";

const gqlrouter = new Router();
gqlrouter
  .get("/graphql", (context) => {
    context.response.body = "Please use Post to Query";
  })
  .post("/graphql", async (context) => {
    const result = context.request.body();
    if (result.type === "json") {
      const { query, variables = {} } = await result.value;
      if (query) {
        const data = await (graphql as any)(
          schema,
          query,
          resolvers,
          {
            request: context.request,
            response: context.response,
          } as AppContext,
          variables || {}
        );
        if (data.errors) {
          context.response.body = data;
          context.response.status = 400;
        } else {
          context.response.body = data;
        }
      } else {
        context.response.body = { message: "Invalid Query" };
        context.response.status = 400;
      }
    }
  });

export default gqlrouter;
