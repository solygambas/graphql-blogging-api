const Query = {
  users(parent, args, { db }, info) {
    if (!args.query) {
      return db.users;
    }
    return db.users.filter((user) => {
      return user.name.toLowerCase().includes(args.query.toLowerCase());
    });
  },
  posts(parent, args, { db }, info) {
    if (!args.query) {
      return db.posts;
    }
    return db.posts.filter((post) => {
      const isTitle = post.title
        .toLowerCase()
        .includes(args.query.toLowerCase());
      const isBody = post.body.toLowerCase().includes(args.query.toLowerCase());
      return isTitle || isBody;
    });
  },
  comments(parent, args, { db }, info) {
    return db.comments;
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
};

export { Query as default };
