import Cors from 'cors'
import type { NextApiRequest, NextApiResponse } from 'next'

import withMiddleware from './middleware'

const cors = Cors({
  methods: ['GET', 'HEAD', 'OPTIONS'],
})
const handleCors = withMiddleware(cors)

export default function withCors(
  handler: (req: NextApiRequest, res: NextApiResponse) => void
) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    await handleCors(req, res)
    return handler(req, res)
  }
}
