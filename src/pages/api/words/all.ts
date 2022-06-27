import { NextApiRequest, NextApiResponse } from 'next'

import { Word, Level } from '../../../types'
import withCors from '../../../utils/with-cors'
import { pickDB } from '../../../utils/search-words'

function handler(
  req: NextApiRequest & { query: { level?: string } },
  res: NextApiResponse<Word[]>
) {
  const level = parseInt(req.query.level || '', 10) as Level
  res.status(200).json(pickDB(level))
}

export default withCors(handler)
