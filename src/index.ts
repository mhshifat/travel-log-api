import { GraphQLServer } from "graphql-yoga";
import helmet from "helmet";
import { config } from "./config";
import { CBD } from "./db";
import { models, ModelsType } from "./models";
import { resolvers, typeDefs } from "./modules";

export interface IContext {
  models: ModelsType;
}

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: (): IContext => ({ models }),
});

server.express.use(helmet());

CBD(config.db.uri)
  .then(() =>
    server.start({
      port: config.api.port,
      cors: {
        origin: config.api.client_uri,
      },
      endpoint: "/api/v1",
      playground: "/playground",
    })
  )
  .then(() => {
    console.log("[TravelLog] A database connection has been established!");
    console.log(
      `[TravelLog] The server is running on http://localhost:${config.api.port}!`
    );
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });
