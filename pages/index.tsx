import type { NextPage } from 'next';

import useCacheFetcher from '../utils/use-cache-fetcher';

const Home: NextPage = () => {
  const { fetcher } = useCacheFetcher('words');
  const { data, error } = fetcher('/api/words/all');
  const isLoading = !data && !error;

  return (
    <div>
      <code>{isLoading ? 'loading...' : `${data.length} words`}</code>
    </div>
  );
};

export default Home;
