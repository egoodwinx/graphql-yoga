import { createModule, gql } from 'graphql-modules';
import { Link } from '../schema/base/resolvers/Link';

export const QueryModule = createModule({
  id: 'query-module',
  dirname: __dirname,
  typeDefs: [
    gql`
      type Query {
        info: String!
        feed(filterNeedle: String, skip: Int, take: Int): [Link!]!
      }
    `,
  ],
  resolvers: {
    Query: {
      comment: Link,
    },
  },
});
