export type Word = {
  word: string
  meaning: string
  furigana: string
  romaji: string
  level: number
  uuid: string
}

export type PaginationParams = {
  offset: number
  limit: number
}

export type WordsResponse = PaginationParams & {
  total: number
  level?: number
  words: Word[]
}

export type ErrorMsg = {
  message: string
}
