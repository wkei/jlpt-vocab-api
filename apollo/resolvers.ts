import { Config } from 'apollo-server-micro';

import { Word, WordsResponse } from '../types';
import DB from '../data-source/db.json';

const resolvers: Config['resolvers'] = {
  Query: {
    words: (
      _: any,
      { page, limit, level }: { page: number; limit: number; level: number }
    ) => {
      const start = (page - 1) * limit;
      const filteredDB = level ? DB.filter((item) => item.level === level) : DB;
      const words: Word[] = filteredDB.slice(start, start + limit);
      let data: WordsResponse = {
        total: DB.length,
        page,
        limit,
        words,
      };
      if (level) {
        data.level = level;
      }
      return data;
    },

    random: () => {
      return DB[Math.floor(Math.random() * DB.length)];
    },

    all: () => {
      return DB;
    },
  },
};

export default resolvers;
