import type { NextPage } from 'next';

const APIS = [
  '/api/random',
  '/api/words',
  '/api/words?level=3',
  '/api/words?page=20&limit=10',
];

const Home: NextPage = () => {
  return (
    <ul>
      {APIS.map((api) => (
        <li key={api}>
          <a href={api}>
            <code>{api}</code>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Home;
