import { createModule } from 'graphql-modules';
import { linkResolvers } from './resolvers/links.resolvers';
import links from './typeDefs/links.graphql';

export const LinkModule = createModule({
  id: 'link-module',
  dirname: __dirname,
  typeDefs: [links],
  resolvers: [linkResolvers],
});
