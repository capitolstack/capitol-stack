import Head from 'next/head';
import Script from 'next/script';
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
        <meta property="og:title" content="Capitol Stack – Founder-First Climate Tech VC" />
        <meta
          property="og:description"
          content="Investing in overlooked but deeply capable builders at the intersection of climate, government, and software."
        />
        <meta property="og:image" content="/images/og-preview.png" />
        <meta property="og:url" content="https://capitolstack.vc" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="theme-color" content="#007070" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* ✅ Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-NH6MMP8EQF"
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NH6MMP8EQF');
          `,
        }}
      />

      <Component {...pageProps} />
    </>
  );
}
