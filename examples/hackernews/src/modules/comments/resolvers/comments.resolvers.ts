import { Comment } from '../../../schema/base/resolvers/Comment';
import { postCommentOnLink } from '../../../schema/base/resolvers/Mutation/postCommentOnLink';
import { comment } from '../../../schema/base/resolvers/Query/comment';

export const commentResolvers = {
  Query: {
    comment: comment,
  },
  Mutation: {
    postCommentOnLink: postCommentOnLink,
  },
  Comment: Comment,
};
