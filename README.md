# GraphQL blogging API

A GraphQL blogging API using Prisma, Apollo Client and Node.js.

## 1) GraphQL Basics

A simple blogging API to understand GraphQL basics.

[See graphql-basics folder](graphql-basics)

### Features

- understanding GraphQL schemas with graphql-yoga.
- creating a GraphQL server with typeDefs and resolvers.
- using data types: scalar types, custom types and input type.
- fetching data with GraphQL queries.
- working with operation arguments and arrays.
- defining relationships between Users, Posts and Comments.
- creating, updating and deleting data with GraphQL mutations.
- generating unique IDs with uuid.
- adopting a scalable folder structure.
- leveraging GraphQL subscriptions to listen to events and publish them.
- using enums to define a set of constants for events (created, updated, deleted).
- handling ES6 import/export feature and object spread operator with Babel.

## 2) GraphQL Prisma

A GraphQL blogging API to understand Prisma 1.

[See graphql-prisma folder](graphql-prisma)

## Features

- setting up a PostgreSQL database and a server on Heroku with [Prisma Cloud integration](https://www.prisma.io/blog/heroku-integration-homihof6eifi).
- installing pgAdmin to visualize data and exploring the Prisma GraphQL API (directives, create and connect).
- integrating Prisma into Node.js with prisma-binding and graphql-cli.
- using prisma-binding and async/await method to perform CRUD operations: query, mutation, exists, subscription.
- handling deletions with @relation, SET_NULL and CASCADE.
- integrating operation arguments and refactoring resolvers for queries, mutations and subscriptions.
- using Node.js as a middleware to protect the GraphQL API.
- storing passwords with bcryptjs and handling tokens with JWT.
- making sure the necessary data is always provided with fragments.
- enabling pagination (first, last, skip, before, after) and sorting (orderBy: field_ASC or field_DESC).
- synchronizing available sorting operations with prisma-graphql-import.
- creating 3 project stages with env-cmd and prisma deploy: development, test and production.
- writing test suites for User, Post and Comment with Jest.
- seeding the database with test data, cleaning dummy data before each test and handling authentication.
- using GraphQL variables to avoid duplicate code.
- setting up Apollo Client to listen to subscriptions.

## 3) GraphQL Prisma 2

A quick experimentation to understand Prisma 2.

[See graphql-prisma2 folder](graphql-prisma2)

### Features

- playing with Prisma CLI (init, introspect, generate).
- connecting to a PostgreSQL database on Heroku.
- understanding key differences between schema.prisma and GraphQL SDL.
- updating data model with Prisma migrate.
- adding data with Prisma studio.
- fetching data with Prisma client.

## 4) GraphQL Prisma Next.js Project

An example to understand how to deploy a Next.js website with Prisma client.

### Features

- creating a PostgreSQL database.
- using Prisma client to handle database operations.
- serving a REST API with Next.js.
- creating a Next.js page to interact with the API.

[See graphql-prisma-next folder](graphql-prisma-next)

## 5) Apollo Client

An example to understand how to fetch data in the browser with Apollo Client.

[See apollo-client folder](apollo-client)

## 6) GraphQL Prisma Boilerplate Project

A boilerplate project to create a GraphQL API with Prisma 1.

[See graphql-boilerplate folder](graphql-prisma-boilerplate)

Based on [The Modern GraphQL Bootcamp (with Node.js and Apollo)](https://www.udemy.com/course/graphql-bootcamp/) by Andrew Mead (2018)
