import { createServer } from 'node:http';
import { createApplication } from 'graphql-modules';
import { createYoga } from 'graphql-yoga';
import { useGraphQLModules } from '@envelop/graphql-modules';
import { createContext } from './context';
import { CommentModule } from './modules/comments';
import { CommonModule } from './modules/common';
import { LinkModule } from './modules/links';

// This is your application, it contains your GraphQL schema and the implementation of it.
const application = createApplication({
  modules: [LinkModule, CommentModule, CommonModule],
});

// This is your actual GraphQL schema
const schema = application.schema;

function main() {
  const yoga = createYoga({
    schema,
    plugins: [useGraphQLModules(application)],
    context: createContext,
  });
  const server = createServer(yoga);
  server.listen(4000, () => {
    console.info(`Server is running on http://localhost:4000${yoga.graphqlEndpoint}`);
  });
}

main();
