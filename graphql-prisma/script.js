const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// A `main` function so that you can use async/await
async function main() {
  // ... you will write your Prisma Client queries here
  // create
  const andrew = await prisma.user.findOne({
    where: {
      id: 1,
    },
  });
  console.log(andrew);
  // const post = await prisma.post.create({
  //   data: {
  //     title: "Prisma makes databases easy",
  //     author: { connect: { email: "sarah@prisma.io" } },
  //   },
  // });
  // console.log(post);
  // update
  // const post = await prisma.post.update({
  //   where: { id: 2 },
  //   data: { published: true },
  // });
  // console.log(post);
  // fetch
  // const allUsers = await prisma.user.findMany({
  //   include: { posts: true },
  // });
  // console.dir(allUsers, { depth: null });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.disconnect();
  });
