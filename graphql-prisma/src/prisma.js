import { Prisma } from "prisma-binding";
import { endpoint, secret } from "../config/config";

const prisma = new Prisma({
  typeDefs: "src/generated/prisma.graphql",
  endpoint,
  secret,
});

export { prisma as default };

// prisma.query, prisma.mutation, prisma.subscription, prisma exists

// const createPostForUser = async (authorId, data) => {
//   const userExists = await prisma.exists.User({ id: authorId });
//   if (!userExists) {
//     throw new Error("User not found");
//   }
//   const post = await prisma.mutation.createPost(
//     {
//       data: {
//         ...data,
//         author: {
//           connect: {
//             id: authorId,
//           },
//         },
//       },
//     },
//     "{author {id name email posts {id title isPublished}}}"
//   );
//   return post.author;
// };

// createPostForUser("ckboyxxei001p0772mlabrwrh", {
//   title: "Great books to read 3",
//   body: "The war of art 3",
//   isPublished: true,
// })
//   .then((user) => {
//     console.log(JSON.stringify(user, undefined, 2));
//   })
//   .catch((error) => console.log(error.message));

// const updatePostforUser = async (postId, data) => {
//   const postExists = await prisma.exists.Post({ id: postId });
//   if (!postExists) {
//     throw new Error("Post not found");
//   }
//   const post = await prisma.mutation.updatePost(
//     {
//       where: { id: postId },
//       data,
//     },
//     "{author {id name email posts {id title isPublished}}}"
//   );
//   return post.author;
// };

// updatePostforUser("ckbq484t000190767z843iskc", {
//   isPublished: false,
// })
//   .then((user) => {
//     console.log(JSON.stringify(user, undefined, 2));
//   })
//   .catch((error) => console.log(error.message));
