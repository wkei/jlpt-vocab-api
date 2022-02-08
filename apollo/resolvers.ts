import { Config } from 'apollo-server-micro';

import { Word } from '../types';
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
      let data = {
        total: DB.length,
        page,
        limit,
        words,
      };
      if (level) {
        return { ...data, level };
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
