import * as gm from 'graphql-modules';
import * as Types from '../../../__generated__/types';

export namespace LinksModule {
  interface DefinedFields {
    Query: 'link';
    Mutation: 'postLink';
    Link: 'id' | 'description' | 'url' | 'comments';
  }

  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type Link = Pick<Types.Link, DefinedFields['Link']>;
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
  export type Comment = Types.Comment;

  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  export type LinkResolvers = Pick<Types.LinkResolvers, DefinedFields['Link'] | '__isTypeOf'>;

  export interface Resolvers {
    Query?: QueryResolvers;
    Mutation?: MutationResolvers;
    Link?: LinkResolvers;
  }

  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      link?: gm.Middleware[];
    };
    Mutation?: {
      '*'?: gm.Middleware[];
      postLink?: gm.Middleware[];
    };
    Link?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      description?: gm.Middleware[];
      url?: gm.Middleware[];
      comments?: gm.Middleware[];
    };
  }
}
