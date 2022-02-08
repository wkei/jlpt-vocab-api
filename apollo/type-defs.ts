import { gql, Config } from 'apollo-server-micro';

const typeDefs: Config['typeDefs'] = gql`
  type Word {
    word: String
    meaning: String
    hiragana: String
    romaji: String
    level: Int
    uuid: String
  }

  type PaginatedWords {
    total: Int
    page: Int
    limit: Int
    level: Int
    words: [Word]
  }

  type Query {
    words(page: Int = 1, limit: Int = 10, level: Int = 0): PaginatedWords

    random: Word

    all: [Word]
  }
`;

export default typeDefs;
