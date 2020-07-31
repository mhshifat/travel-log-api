import { Log } from "../../types/graphql";
import { IResolvers } from "../index";

export const resolvers: IResolvers = {
  Query: {
    logs: async (_, __, { models }) => models.Log.find({}),
  },
  Mutation: {
    createLog: async (_, { input }, { models }) => {
      const createdLogs = await models.Log.create(input as Log);
      return createdLogs;
    },
  },
};
