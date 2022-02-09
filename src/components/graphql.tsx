import { request, RequestDocument } from 'graphql-request';
import Link from 'next/link';
import useSWR from 'swr';

const fetcher = (query: RequestDocument) => request('/api/graphql', query);

const QUERY = `query {
  words (offset: 22, limit: 5) {
    total
    words {
      word
      meaning
      hiragana
      level
    }
  }
}`;

export default function GraphQL() {
  const { data, error } = useSWR(QUERY, fetcher);

  const result =
    !data && !error
      ? 'loading...'
      : error
      ? JSON.stringify(error)
      : JSON.stringify(data, null, 2);

  return (
    <section>
      <h2>RESTful</h2>
      <p>
        Playground: <Link href="/api/graphql">/api/graphql</Link>
      </p>
      <div className="grid  md:grid-cols-3  gap-4 grid-cols-none">
        <textarea
          className="font-mono text-sm border p-4 resize-none"
          readOnly
          value={QUERY}
        />
        <pre className="col-span-2 overflow-scroll h-80 text-xs m-0">
          {result}
        </pre>
      </div>
    </section>
  );
}
