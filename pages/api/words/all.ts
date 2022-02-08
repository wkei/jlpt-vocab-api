import type { NextApiRequest, NextApiResponse } from 'next';

import { Word } from '../../../types';
import DB from '../../../data-source/db.json';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Word[]>
) {
  res.status(200).json(DB);
}
