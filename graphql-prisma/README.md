# GraphQL Prisma

A GraphQL blogging API to understand Prisma 1.

[See Demo deployed on Heroku](https://prisma-node-server.herokuapp.com/)

## Features

- setting up a PostgreSQL database and a server on Heroku with [Prisma Cloud integration](https://www.prisma.io/blog/heroku-integration-homihof6eifi).
- installing pgAdmin to visualize data and exploring the Prisma GraphQL API (directives, create and connect).
- integrating Prisma into Node.js with prisma-binding and graphql-cli.
- using prisma-binding and async/await method to perform CRUD operations : query, mutation, exists, subscription.
- handling deletions with @relation, SET_NULL and CASCADE.
- integrating operation arguments and refactoring resolvers for queries, mutations and subscriptions.
- using Node.js as a middleware to protect the GraphQL API.
- storing passwords with bcryptjs and handling tokens with JWT.
- making sure the necessary data is always provided with fragments.
- enabling pagination (first, last, skip, before, after) and sorting (orderBy: field_ASC or field_DESC).
- synchronizing available sorting operations with prisma-graphql-import.
- creating 3 project stages with env-cmd and prisma deploy : development, test and production.
- fetching data with Apollo Client.
- writing test suites for User, Post and Comment with Jest.
- seeding the database with test data, cleaning dummy data before each test and handling authentication.
- using GraphQL variables to reuse operations.
- setting up Apollo Client to listen to subscriptions.

Based on [The Modern GraphQL Bootcamp (with Node.js and Apollo)](https://www.udemy.com/course/graphql-bootcamp/) by Andrew Mead (2018)
