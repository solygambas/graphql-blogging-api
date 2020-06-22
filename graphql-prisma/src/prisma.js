import { Prisma } from "prisma-binding";
import { endpoint, secret } from "../config/config";

const prisma = new Prisma({
  typeDefs: "src/generated/prisma.graphql",
  endpoint,
});

// prisma.query, prisma.mutation, prisma.subscription, prisma exists

const createPostForUser = async (authorId, data) => {
  const post = await prisma.mutation.createPost(
    {
      data: {
        ...data,
        author: {
          connect: {
            id: authorId,
          },
        },
      },
    },
    "{id title body}"
  );
  const user = await prisma.query.user(
    {
      where: { id: authorId },
    },
    "{id name email posts {id title isPublished}}"
  );
  return user;
};

// createPostForUser("ckboyxxei001p0772mlabrwrh", {
//   title: "Great books to read",
//   body: "The war of art",
//   isPublished: true,
// }).then((user) => {
//   console.log(JSON.stringify(user, undefined, 2));
// });

const updatePostforUser = async (postId, data) => {
  const post = await prisma.mutation.updatePost(
    {
      where: { id: postId },
      data,
    },
    "{author {id}}"
  );
  const user = await prisma.query.user(
    {
      where: { id: post.author.id },
    },
    "{id name email posts {id title isPublished}}"
  );
  return user;
};

updatePostforUser("ckbq484t000190767z843iskc", {
  isPublished: false,
}).then((user) => {
  console.log(JSON.stringify(user, undefined, 2));
});

// prisma.mutation
//   .updatePost(
//     {
//       where: { id: "ckbq34o50000o0767ggn2gixi" },
//       data: {
//         body: "This is cool!",
//         isPublished: true,
//       },
//     },
//     "{id title body isPublished}"
//   )
//   .then((data) => {
//     console.log(JSON.stringify(data, undefined, 2));
//     return prisma.query
//       .posts(null, "{id title body isPublished}")
//       .then((data) => console.log(JSON.stringify(data, undefined, 2)));
//   });
