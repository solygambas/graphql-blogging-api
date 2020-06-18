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

// resolver challenges
// add(parent, args, ctx, info) {
//     return args.a + args.b;
//   },
//   sum(parent, args, ctx, info) {
//     if (args.numbers.length == 0) {
//       return 0;
//     }
//     return args.numbers.reduce((accumulator, currentValue) => {
//       return accumulator + currentValue;
//     });
//   },
//   grades(parent, args, ctx, info) {
//     return [99, 80, 93];
//   },
//   greeting(parent, args, ctx, info) {
//     // console.log(args)
//     if (args.name && args.position) {
//       return `Hello, ${args.name}! You are my favorite ${args.position}.`;
//     } else {
//       return "Hello";
//     }
//   },
