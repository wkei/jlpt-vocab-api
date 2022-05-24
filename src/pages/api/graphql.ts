import type { NextApiRequest, NextApiResponse } from 'next'
import { ApolloServer } from 'apollo-server-micro'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import Cors from 'micro-cors'

import typeDefs from '../../apollo/type-defs'
import resolvers from '../../apollo/resolvers'

const cors = Cors()

export const config = {
  api: {
    bodyParser: false,
  },
}
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  // plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
})

const startServer = apolloServer.start()

export default cors(async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }

  await startServer
  return apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
})
