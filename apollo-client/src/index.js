import ApolloBoost, { gql } from "apollo-boost";

const client = new ApolloBoost({
  uri: "http://localhost:4000/",
});

const getUsers = gql`
  query {
    users {
      id
      name
    }
  }
`;

const getPosts = gql`
  query {
    posts {
      title
      author {
        name
      }
    }
  }
`;

client
  .query({
    query: getUsers,
  })
  .then((response) => {
    // console.log(response.data)
    let html = "";
    response.data.users.forEach((user) => {
      html += `
        <div><h3>${user.name}</h3></div>
        `;
    });
    document.getElementById("users").innerHTML = html;
  });

client
  .query({
    query: getPosts,
  })
  .then((response) => {
    // console.log(response.data);
    let html = "";
    response.data.posts.forEach((post) => {
      html += `
        <div><h3>${post.title} by ${post.author.name}</h3></div>
        `;
    });
    document.getElementById("posts").innerHTML = html;
  });
