export type Level = 0 | 1 | 2 | 3 | 4 | 5
export type Word = {
  word: string
  meaning: string
  furigana: string
  romaji: string
  level: Level
}

export type PaginationParams = {
  offset: number
  limit: number
}

export type WordsResponse = PaginationParams & {
  total: number
  words: Word[]
}

export type ErrorMsg = {
  message: string
}
