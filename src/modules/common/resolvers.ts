import { IResolvers } from "../index";

export const resolvers: IResolvers = {
  Query: {
    hello: () => "World",
  },
};
