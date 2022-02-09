import NextHead from 'next/head';

const title = 'JLPT Vocabulary API';
const desc = 'A RESTful / GraphQL API for JPLT vocabulary from N5 to N1';
const url = 'https://jlpt-keiz.vercel.app';
const icon = '/icon.png';

export default function Head() {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <link rel="shortcut icon" href={icon} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={icon} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@kei_yq" />
    </NextHead>
  );
}
