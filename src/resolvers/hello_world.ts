const HelloResolver = {
  Query: {
    hello: async (_: any, { name }: any = {}, context: any, z: any) => {
      return "Hello world!";
    },
  },
};
export default HelloResolver;
