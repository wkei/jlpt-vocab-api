import { gql, Config } from 'apollo-server-micro'

export const typeDefs: Config['typeDefs'] = gql`
  type Word {
    word: String
    meaning: String
    furigana: String
    romaji: String
    level: Int
  }

  type PaginatedWords {
    total: Int
    offset: Int
    limit: Int
    words: [Word]
  }

  type Query {
    words(offset: Int = 0, limit: Int = 10, level: Int, word: String): PaginatedWords

    random(level: Int): Word

    all: [Word]
  }
`

export default typeDefs
