import type { NextPage } from 'next';

import { Word } from '../types';
import useCacheFetcher from '../utils/use-cache-fetcher';

const Home: NextPage = () => {
  const { fetcher } = useCacheFetcher('words');
  const { data, error } = fetcher<Word[]>('/api/words/all');

  if (error) return <code>failed to load</code>;
  if (!data) return <div>loading...</div>;
  return <code>{data.length} words</code>;
};

export default Home;
