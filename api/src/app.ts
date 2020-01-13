import "graphql-import-node";
import * as express from "express";
import * as cors from "cors";
import { ApolloServer } from "apollo-server-express";
import resolvers from "./resolvers";
import * as typeDefs from "./schema.graphql";

const app: express.Application = express();
const server = new ApolloServer({ typeDefs, resolvers });

// Middlewares
app.use(cors());
server.applyMiddleware({ app });

// Listen to a port
const PORT: number = parseInt(process.env.PORT) || 5000;

app.listen(PORT, () => {
  console.log(`GraphQL server running at: ${PORT} port.`);
  console.log(`Process ID: ${process.pid}`);
});
