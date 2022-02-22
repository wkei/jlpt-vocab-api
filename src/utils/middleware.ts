import Cors from 'cors'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function withMiddleware(middleware: ReturnType<typeof Cors>) {
  return (req: NextApiRequest, res: NextApiResponse) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result: unknown) => {
        if (result instanceof Error) {
          return reject(result)
        }
        return resolve(result)
      })
    })
}
