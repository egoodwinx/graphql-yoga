import { gql } from 'graphql-modules';

// eslint-disable-next-line import/no-default-export
export default gql`
  type Query {
    info: String!
    feed(filterNeedle: String, skip: Int, take: Int): [Link!]!
  }
`;
