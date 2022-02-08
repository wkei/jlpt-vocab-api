import { useState, useEffect, useRef } from 'react';

export default function useCacheFetcher(cacheId: string) {
  const fetcher = (url: string) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const cacheRef = useRef<Cache | null>(null);

    useEffect(() => {
      const run = async () => {
        cacheRef.current = await caches.open(cacheId);
        const res = await cacheRef.current.match(url);
        if (res) {
          setData(await res.json());
        } else {
          await cacheRef.current.add(url);
          const res = await cacheRef.current.match(url);
          res && setData(await res.json());
        }
      };
      try {
        run();
      } catch (error: any) {
        setError(error);
      }
    }, []);

    return { data, error };
  };

  const clean = () => caches.delete(cacheId);

  return {
    fetcher,
    clean,
  };
}
