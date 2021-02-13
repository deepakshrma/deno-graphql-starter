import { getUsers } from "../model/database.ts";

const UserResolver = {
  Query: {
    users: async (d: any = {}, context: any) => {
      return getUsers(d.name ? (u) => u.name.includes(d.name) : undefined);
    },
  },
};
export default UserResolver;
