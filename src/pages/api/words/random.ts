import { NextApiRequest, NextApiResponse } from 'next'

import { Word } from '../../../types'
import withCors from '../../../utils/with-cors'
import { randomWord } from '../../../utils/search-words'

function handler(req: NextApiRequest, res: NextApiResponse<Word>) {
  const data = randomWord(parseInt(req.query.level, 10) || 0)
  res.status(200).json(data)
}

export default withCors(handler)
