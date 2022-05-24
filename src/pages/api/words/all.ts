import { NextApiRequest, NextApiResponse } from 'next'

import { Word } from '../../../types'
import DB from '../../../../data-source/db/all.json'
import withCors from '../../../utils/with-cors'

function handler(req: NextApiRequest, res: NextApiResponse<Word[]>) {
  res.status(200).json(DB)
}

export default withCors(handler)
