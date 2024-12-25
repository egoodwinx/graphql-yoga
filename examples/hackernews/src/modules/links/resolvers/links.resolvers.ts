import { Link } from '../../../schema/base/resolvers/Link';
import { postLink } from '../../../schema/base/resolvers/Mutation/postLink';
import { link } from '../../../schema/base/resolvers/Query/link';

export const linkResolvers = {
  Query: {
    link: link,
  },
  Mutation: {
    postLink: postLink,
  },
  Link: Link,
};
