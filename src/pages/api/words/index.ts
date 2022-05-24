import type { NextApiRequest, NextApiResponse } from 'next'

import withCors from '../../../utils/with-cors'
import { searchWords } from '../../../utils/search-words'
import { ErrorMsg, WordsResponse } from '../../../types'

export type WordsQuery = {
  offset?: string
  limit?: string
  level?: string
  word?: string
}

const DEFAULT_QUERY = {
  offset: 0,
  limit: 10,
}
const parseQuery = (query: WordsQuery) => {
  return Object.entries(query).reduce((result, [k, v]) => {
    if (v !== '') {
      return {
        ...result,
        [k]: isNaN(v) ? v : parseInt(v, 10)
      }
    }
    return result
  }, { ...DEFAULT_QUERY })
}

function handler(
  req: NextApiRequest & { query: WordsQuery },
  res: NextApiResponse<WordsResponse | ErrorMsg>
) {
  const data  = searchWords(parseQuery(req.query))
  res.status(200).json(data)
}

export default withCors(handler)
