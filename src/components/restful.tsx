import { useState } from 'react';
import useSWR from 'swr';

const APIS = [
  '/api/words',
  '/api/words?level=3',
  '/api/words?offset=20&limit=10',
  '/api/words/random',
  '/api/words/all',
];

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function RESTful() {
  const [api, setApi] = useState(APIS[0]);
  const { data, error, mutate } = useSWR(() => api, fetcher);

  const result =
    !data && !error
      ? 'loading...'
      : error
      ? JSON.stringify(error)
      : JSON.stringify(data, null, 2);

  const update = (api: string) => {
    mutate(null);
    setApi(api);
  };

  return (
    <section>
      <h2>RESTful</h2>
      <div className="grid md:grid-cols-3  gap-4 grid-cols-none">
        <ul>
          {APIS.map((i) => (
            <li key={i}>
              <button
                onClick={() => update(i)}
                className={`underline text-left ${
                  api === i ? '' : 'text-slate-400'
                }`}
              >
                {i}
              </button>
            </li>
          ))}
        </ul>
        <pre className="md:col-span-2 overflow-scroll h-80 text-xs m-0">
          {result}
        </pre>
      </div>
    </section>
  );
}
