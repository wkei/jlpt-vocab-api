import { NextApiRequest, NextApiResponse } from 'next'

import { Word, Level } from '../../../types'
import withCors from '../../../utils/with-cors'
import { randomWord } from '../../../utils/search-words'

function handler(req: NextApiRequest, res: NextApiResponse<Word>) {
  const level = parseInt(req.query.level as string, 10)
  const data = randomWord(level)
  res.status(200).json(data)
}

export default withCors(handler)
