import { buildSchema } from "https://cdn.skypack.dev/graphql";
import UserSchema from "./user.ts";
const base = `
type Query {
  hello: String
  users(name: String): [User]
}
`;
export default buildSchema([base, UserSchema].join("\n"), {});
