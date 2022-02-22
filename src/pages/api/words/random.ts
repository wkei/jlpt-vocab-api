import { NextApiRequest, NextApiResponse } from 'next'

import { Word } from '../../../types'
import DB from '../../../../data-source/db.json'
import withCors from '../../../utils/with-cors'

function handler(req: NextApiRequest, res: NextApiResponse<Word>) {
  const word: Word = DB[Math.floor(Math.random() * DB.length)]
  res.status(200).json(word)
}

export default withCors(handler)
