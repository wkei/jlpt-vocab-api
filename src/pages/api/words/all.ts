import { NextApiRequest, NextApiResponse } from 'next'

import { Word } from '../../../types'
import { all } from '../../../../data-source/db'
import withCors from '../../../utils/with-cors'

function handler(req: NextApiRequest, res: NextApiResponse<Word[]>) {
  res.status(200).json(all)
}

export default withCors(handler)
