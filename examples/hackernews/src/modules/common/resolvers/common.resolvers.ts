import { feed } from '../../../schema/base/resolvers/Query/feed';
import { info } from '../../../schema/base/resolvers/Query/info';

export const commonResolvers = {
  Query: {
    info: info,
    feed: feed,
  },
};
