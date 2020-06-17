import { GraphQLServer } from "graphql-yoga";
import uuidv4 from "uuid/v4";

// Scalar types - String, Boolean, Int, Float, ID

// type definitions
// const typeDefs = `
// type Query {
//     id: ID!
//     name: String!
//     age: Int!
//     employed: Boolean!
//     gpa: Float
// }
// `;
// const typeDefs = `
// type Query {
//     title: String!
//     price: Float!
//     releaseYear: Int
//     rating: Float
//     inStock: Boolean!
// }
// `;

// resolvers
// const resolvers = {
//   Query: {
//     id() {
//       return "abc123";
//     },
//     name() {
//       return "Andrew";
//     },
//     age() {
//       return 27;
//     },
//     employed() {
//       return true;
//     },
//     gpa() {
//       return null;
//     },
//   },
// };
// const resolvers = {
//   Query: {
//     title() {
//       return "Dune";
//     },
//     price() {
//       return 19.99;
//     },
//     releaseYear() {
//       return 1965;
//     },
//     rating() {
//       return 4.5;
//     },
//     inStock() {
//       return true;
//     },
//   },
// };

// Demo user data
let users = [
  { id: "1", name: "Andrew", email: "andrew@example.com", age: 27 },
  { id: "2", name: "Sarah", email: "sarah@example.com" },
  { id: "3", name: "Mike", email: "mike@example.com" },
];

let posts = [
  {
    id: "10",
    title: "GraphQL 101",
    body: "This is how to use GraphQL...",
    isPublished: true,
    author: "1",
  },
  {
    id: "11",
    title: "GraphQL 201",
    body: "This is an advanced GraphQL post...",
    isPublished: false,
    author: "1",
  },
  {
    id: "12",
    title: "Programming Music",
    body: "",
    isPublished: false,
    author: "2",
  },
];

let comments = [
  {
    id: "102",
    text: "This worked well for me. Thanks!",
    author: "3",
    post: "10",
  },
  {
    id: "103",
    text: "Glad you enjoyed it.",
    author: "1",
    post: "10",
  },
  {
    id: "104",
    text: "This did no work.",
    author: "2",
    post: "11",
  },
  {
    id: "105",
    text: "Nevermind. I got it to work.",
    author: "1",
    post: "11",
  },
];

const typeDefs = `
type Query {
  users(query: String): [User!]!
  posts(query: String): [Post!]!
  comments: [Comment!]!
  me: User!
  post: Post!
  greeting(name: String, position: String): String!
  add(a: Float!, b: Float!): Float!
  sum(numbers: [Float!]!): Float!
  grades: [Int!]!
}

type Mutation {
  createUser(data: CreateUserInput!): User!
  deleteUser(id: ID!): User!
  createPost(data: CreatePostInput!): Post!
  deletePost(id: ID!): Post!
  createComment(data: CreateCommentInput!): Comment!
  deleteComment(id: ID!): Comment!
}

input CreateUserInput {
  name: String!
  email: String!
  age: Int
}

input CreatePostInput {
  title: String!
  body: String!
  isPublished: Boolean!
  author: ID!
}

input CreateCommentInput {
  text: String!
  author: ID!
  post: ID!
}

type User {
  id: ID!
  name: String!
  email: String!
  age: Int
  posts: [Post!]!
  comments: [Comment!]!
 }

type Post {
  id: ID!
  title: String!
  body: String!
  isPublished: Boolean!
  author: User!
  comments: [Comment!]!
}

type Comment {
  id: ID!
  text: String!
  author: User!
  post: Post!
}
`;

const resolvers = {
  Query: {
    users(parent, args, ctx, info) {
      if (!args.query) {
        return users;
      }
      return users.filter((user) => {
        return user.name.toLowerCase().includes(args.query.toLowerCase());
      });
    },
    posts(parent, args, ctx, info) {
      if (!args.query) {
        return posts;
      }
      return posts.filter((post) => {
        const isTitle = post.title
          .toLowerCase()
          .includes(args.query.toLowerCase());
        const isBody = post.body
          .toLowerCase()
          .includes(args.query.toLowerCase());
        return isTitle || isBody;
      });
    },
    comments(parent, args, ctx, info) {
      return comments;
    },
    me() {
      return {
        id: "123",
        name: "Mike",
        email: "mike@example.com",
        age: 28,
      };
    },
    post() {
      return {
        id: "123",
        title: "GraphQL 101",
        body: "",
        isPublished: false,
      };
    },
    add(parent, args, ctx, info) {
      return args.a + args.b;
    },
    sum(parent, args, ctx, info) {
      if (args.numbers.length == 0) {
        return 0;
      }
      return args.numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      });
    },
    grades(parent, args, ctx, info) {
      return [99, 80, 93];
    },
    greeting(parent, args, ctx, info) {
      // console.log(args)
      if (args.name && args.position) {
        return `Hello, ${args.name}! You are my favorite ${args.position}.`;
      } else {
        return "Hello";
      }
    },
  },
  Mutation: {
    createUser(parent, args, ctx, info) {
      const emailTaken = users.some((user) => user.email === args.data.email);
      if (emailTaken) {
        throw new Error("Email taken.");
      }
      // Babel plugin transform object rest spread
      // const one = {city: 'Philadelphia'}
      // const two = {population: 1500000, ...one}

      const user = {
        id: uuidv4(),
        ...args.data,
      };
      users.push(user);
      return user;
    },
    deleteUser(parent, args, ctx, info) {
      const userIndex = users.findIndex((user) => user.id === args.id);
      if (userIndex === -1) {
        throw new Error("User not found.");
      }
      const deletedUsers = users.splice(userIndex, 1);
      posts = posts.filter((post) => {
        const match = post.author === args.id;
        if (match) {
          // delete all comments on deleted posts
          comments = comments.filter((comment) => comment.post !== post.id);
        }
        return !match;
      });
      // delete user's comments on other posts
      comments = comments.filter((comment) => comment.author !== args.id);
      return deletedUsers[0];
    },
    createPost(parent, args, ctx, info) {
      const userExists = users.some((user) => user.id === args.data.author);
      if (!userExists) {
        throw new Error("User not found.");
      }
      const post = {
        id: uuidv4(),
        ...args.data,
      };
      posts.push(post);
      return post;
    },
    deletePost(parent, args, ctx, info) {
      const postIndex = posts.findIndex((post) => post.id === args.id);
      if (postIndex === -1) {
        throw new Error("Post not found.");
      }
      const deletedPosts = posts.splice(postIndex, 1);
      comments = comments.filter((comment) => comment.post !== args.id);

      return deletedPosts[0];
    },
    createComment(parent, args, ctx, info) {
      const userExists = users.some((user) => user.id === args.data.author);
      const postExists = posts.some(
        (post) => post.id === args.data.post && post.isPublished
      );
      if (!userExists || !postExists) {
        throw new Error("Unable to find user and post.");
      }
      const comment = {
        id: uuidv4(),
        ...args.data,
      };
      comments.push(comment);
      return comment;
    },
    deleteComment(parent, args, ctx, info) {
      const commentIndex = comments.findIndex(
        (comment) => comment.id === args.id
      );
      if (commentIndex === -1) {
        throw new Error("Comment not found.");
      }
      const deletedComments = comments.splice(commentIndex, 1);
      return deletedComments[0];
    },
  },
  Post: {
    author(parent, args, ctx, info) {
      return users.find((user) => {
        return user.id === parent.author;
      });
    },
    comments(parent, args, ctx, info) {
      return comments.filter((comment) => {
        return comment.post === parent.id;
      });
    },
  },
  User: {
    posts(parent, args, ctx, info) {
      return posts.filter((post) => {
        return post.author === parent.id;
      });
    },
    comments(parent, args, ctx, info) {
      return comments.filter((comment) => {
        return comment.author === parent.id;
      });
    },
  },
  Comment: {
    author(parent, args, ctx, info) {
      return users.find((user) => {
        return user.id === parent.author;
      });
    },
    post(parent, args, ctx, info) {
      return posts.find((post) => {
        return post.id === parent.post;
      });
    },
  },
};

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() => {
  console.log("Server is running on localhost:4000");
});
