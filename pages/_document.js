import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script async src="https://tally.so/widgets/embed.js"></script>
      </Head>
      <body className="font-inter">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
