import { AppContext } from "../interfaces.ts";

const HelloResolver = {
  Query: {
    hello: async (args: any = {}, {request, response}: AppContext) => {
      return "Hello world!";
    },
  },
};
export default HelloResolver;
