import Head from 'next/head';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Capitol Stack – Founder-First Climate Tech VC</title>
        <meta
          name="description"
          content="Capitol Stack backs mission-driven climate tech founders emerging from government, science, and infrastructure systems."
        />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph for link previews */}
        <meta property="og:title" content="Capitol Stack – Founder-First Climate Tech VC" />
        <meta
          property="og:description"
          content="Investing in overlooked but deeply capable builders at the intersection of climate, government, and software."
        />
        <meta property="og:image" content="/images/og-preview.png" />
        <meta property="og:url" content="https://your-vercel-url.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Mobile theme color */}
        <meta name="theme-color" content="#007070" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
