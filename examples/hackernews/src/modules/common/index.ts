import { createModule } from 'graphql-modules';
import { commonResolvers } from './resolvers/common.resolvers';
import common from './typeDefs/common.graphql';

export const CommonModule = createModule({
  id: 'common-module',
  dirname: __dirname,
  typeDefs: [common],
  resolvers: [commonResolvers],
});
