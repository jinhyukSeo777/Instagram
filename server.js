require("dotenv").config();
import { ApolloServer, gql } from "apollo-server";
import schema from "./schema";
import protectResolver from "./users/users.utils";

const server = new ApolloServer({
  schema,
  context: async ({ req }) => {
    return {
      loggedInUser: await getUser(req.headers.token),
    };
  },
});

server.listen().then(() => console.log("✅ Server is listening"));
