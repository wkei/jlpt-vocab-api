import type { NextApiRequest, NextApiResponse } from 'next';

import {
  Word,
  ErrorMsg,
  WordsResponse,
  PaginationParams,
} from '../../../types';
import DB from '../../../data-source/db.json';

export type WordsQuery = {
  page?: string;
  limit?: string;
  level?: string;
};

const DEFAULT_PAGINATION: PaginationParams = {
  page: 1,
  limit: 10,
};

const TOTAL = DB.length;

function parseIntQuery(val: string | undefined, defaultVal: number): number {
  if (val === undefined || val === '') {
    return defaultVal;
  }
  return parseInt(val, 10);
}

export default function handler(
  req: NextApiRequest & { query: WordsQuery },
  res: NextApiResponse<WordsResponse | ErrorMsg>
) {
  const { query } = req;
  const page = parseIntQuery(query.page, DEFAULT_PAGINATION.page);
  const limit = parseIntQuery(query.limit, DEFAULT_PAGINATION.limit);
  const level = parseIntQuery(query.level, 0); // 0 means all levels

  const start = (page - 1) * limit;
  const filteredDB = level ? DB.filter((item) => item.level === level) : DB;
  const words: Word[] = filteredDB.slice(start, start + limit);

  const data: WordsResponse = {
    total: TOTAL,
    page,
    limit,
    words,
  };
  if (level) {
    data.level = level;
  }

  res.status(200).json(data);
}
