import { createModule } from 'graphql-modules';
import { commentResolvers } from './resolvers/comments.resolvers';
import comments from './typeDefs/comments.graphql';

export const CommentModule = createModule({
  id: 'comment-module',
  dirname: __dirname,
  typeDefs: [comments],
  resolvers: [commentResolvers],
});
