// prisma.query, prisma.mutation, prisma.subscription, prisma exists

// prisma.query
//   .users(null, "{id name posts {id title}}")
//   .then((data) => console.log(JSON.stringify(data, undefined, 2)));

// prisma.query
//   .comments(null, "{id text author {id name}}")
//   .then((data) => console.log(JSON.stringify(data, undefined, 2)));

// prisma.mutation
//   .createPost(
//     {
//       data: {
//         title: "GraphQL 101",
//         body: "",
//         isPublished: false,
//         author: {
//           connect: {
//             id: "ckbozsipg00310772r0bir0jv",
//           },
//         },
//       },
//     },
//     "{id title body isPublished}"
//   )
//   .then((data) => {
//     console.log(JSON.stringify(data, undefined, 2));
//     return prisma.query
//       .users(null, "{id name posts {id title}}")
//       .then((data) => console.log(JSON.stringify(data, undefined, 2)));
//   });

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

// prisma.exists
//   .User({
//     id: "ckboyxxei001p0772mlabrwrh",
//     },
//   })
//   .then((exists) => console.log(exists));
