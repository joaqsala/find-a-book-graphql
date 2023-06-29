const { gql } = require('apollo-server-express');

// define the graphql types
const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        savedBooks: [Book]
    }

    type Book {
        _id: ID!
        authors: [String]
        description: String!
        bookId: String!
        image: String
        link: String
        title: String!
    }

    type Auth {
        token: ID!
        user: User
  }

    type Query {
        user(_id: String): [User]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        createUser(_id: String!, username: String!, email: String!, password: String!): [User]
        saveBook(_id: String!, bookId: String!): [User]
        deleteBook(_id: String!, bookId: String!): [User]
    }
`