import { Word, WordsResponse, Level } from '../types';
import { all, n1, n2, n3, n4, n5 } from '../../data-source/db'

export const pickDB = (level?: Level): Word[] => {
  if (level === 1) return n1
  if (level === 2) return n2
  if (level === 3) return n3
  if (level === 4) return n4
  if (level === 5) return n5
  return all
}

export const search = (db: Word[], word: string): Word[] => {
  return db.filter(w => w.word === word)
}

export const searchWords = (
  { offset, limit, level, word }: { offset: number; limit: number; level?: Level, word?: String }
) => {
  limit = limit || 10
  offset = offset || 0
  const db = pickDB(level)
  const result = word ? search(db, word) : db
  const start = offset * limit;
  const words = result.slice(start, start + limit);
  const data: WordsResponse = {
    total: result .length,
    offset,
    limit,
    words,
  };
  return data;
} 

export const randomWord = (level?: Level) => {
  const db = pickDB(level)
  return db[Math.floor(Math.random() * db.length)];
}
