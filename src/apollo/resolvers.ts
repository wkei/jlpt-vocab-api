import { Config } from 'apollo-server-micro';
import { pickDB, searchWords, randomWord } from '../utils/search-words'

const resolvers: Config['resolvers'] = {
  Query: {
    words: (
      _: any,
      { offset, limit, level, word }: { offset: number; limit: number; level?: Level, word?: String }
    ) => {
      return searchWords({
        offset,
        limit,
        level,
        word
      })
    },

    random: (
      _: any,
      { level }: { level?: Level }
    ) => {
      return randomWord(level)
    },

    all: () => {
      return pickDB();
    },
  },
};

export default resolvers;
