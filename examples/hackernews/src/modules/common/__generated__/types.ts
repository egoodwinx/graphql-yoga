import * as gm from 'graphql-modules';
import * as Types from '../../../__generated__/types';

export namespace CommonModule {
  interface DefinedFields {
    Query: 'info' | 'feed';
  }

  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type Link = Types.Link;

  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;

  export interface Resolvers {
    Query?: QueryResolvers;
  }

  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      info?: gm.Middleware[];
      feed?: gm.Middleware[];
    };
  }
}
