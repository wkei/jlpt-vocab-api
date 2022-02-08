export type Word = {
  word: string;
  meaning: string;
  hiragana: string;
  romaji: string;
  level: number;
  uuid: string;
};

export type PaginationParams = {
  page: number;
  limit: number;
};

export type ErrorMsg = {
  message: string;
};
