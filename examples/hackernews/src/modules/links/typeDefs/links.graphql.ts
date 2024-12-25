import { gql } from 'graphql-modules';

// eslint-disable-next-line import/no-default-export
export default gql`
  type Query {
    link(id: ID!): Link
  }

  type Mutation {
    postLink(url: String!, description: String!): Link!
  }

  type Link {
    id: ID!
    description: String!
    url: String!
    comments: [Comment!]!
  }
`;
