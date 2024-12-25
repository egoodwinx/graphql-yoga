import { gql } from 'graphql-modules';

// eslint-disable-next-line import/no-default-export
export default gql`
  type Query {
    comment(id: ID!): Comment
  }

  type Mutation {
    postCommentOnLink(linkId: ID!, body: String!): Comment!
  }

  type Comment {
    id: ID!
    createdAt: String!
    body: String!
    link: Link!
  }
`;
