import HelloResolver from "./hello_world.ts";
import UserResolver from "./user.ts";

const resolvers =  Object.assign({}, ...[HelloResolver, UserResolver].map((x) => x.Query));
export default resolvers;
