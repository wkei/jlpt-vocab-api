import type { NextApiRequest, NextApiResponse } from 'next';
import { ApolloServer } from 'apollo-server-micro';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';

import typeDefs from '../../apollo/type-defs';
import resolvers from '../../apollo/resolvers';

export const config = {
  api: {
    bodyParser: false,
  },
};
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const startServer = apolloServer.start();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await startServer;

  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
}
