import { GraphQLServer } from "graphql-yoga";

// type definitions
const typeDefs = `
type Query {
    hello: String!
    name: String!
    location: String!
    bio: String!
}
`;

// resolvers
const resolvers = {
  Query: {
    hello() {
      return "This is my first query!";
    },
    name() {
      return "Andrew";
    },
    location() {
      return "Philadelphia";
    },
    bio() {
      return "I live in Philly and teach on Udemy!";
    },
  },
};

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() => {
  console.log("Server is running on localhost:4000");
});
