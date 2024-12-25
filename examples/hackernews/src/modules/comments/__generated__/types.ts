import * as gm from 'graphql-modules';
import * as Types from '../../../__generated__/types';

export namespace CommentsModule {
  interface DefinedFields {
    Query: 'comment';
    Mutation: 'postCommentOnLink';
    Comment: 'id' | 'createdAt' | 'body' | 'link';
  }

  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type Comment = Pick<Types.Comment, DefinedFields['Comment']>;
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
  export type Link = Types.Link;

  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  export type CommentResolvers = Pick<
    Types.CommentResolvers,
    DefinedFields['Comment'] | '__isTypeOf'
  >;

  export interface Resolvers {
    Query?: QueryResolvers;
    Mutation?: MutationResolvers;
    Comment?: CommentResolvers;
  }

  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      comment?: gm.Middleware[];
    };
    Mutation?: {
      '*'?: gm.Middleware[];
      postCommentOnLink?: gm.Middleware[];
    };
    Comment?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      createdAt?: gm.Middleware[];
      body?: gm.Middleware[];
      link?: gm.Middleware[];
    };
  }
}
