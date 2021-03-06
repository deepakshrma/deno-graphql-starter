import { AppContext } from "../interfaces.ts";
import { getUsers } from "../model/database.ts";

const UserResolver = {
  Query: {
    users: async ({name}: any = {}, {request, response}: AppContext) => {
      return getUsers(name ? (u: any) => u.name.includes(name) : undefined);
    },
  },
};
export default UserResolver;
