import NextHead from 'next/head';
import Script from 'next/script';

const title = 'JLPT Vocabulary API';
const desc = 'A RESTful / GraphQL API for JPLT vocabulary from N5 to N1';
const url = 'https://jlpt-keiz.vercel.app';

export default function Head() {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <link rel="shortcut icon" type="image/x-icon" href="/icon-r.png" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${url}/icon-s.png`} />

      <meta name="twitter:card" content="summary" />
      <Script
        async
        defer
        data-website-id="8b828576-7db9-4de6-87f0-b0f36a5a922d"
        src="https://kumami.vercel.app/umami.js"
      />
    </NextHead>
  );
}
