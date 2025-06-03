
import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (typeof window.gtag === 'function') {
        window.gtag('config', 'G-NH6MMP8EQF', {
          page_path: url,
        });
      }
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>Capitol Stack – Founder-First Climate Tech VC</title>
        <meta
          name="description"
          content="Capitol Stack backs mission-driven climate tech founders emerging from government, science, and infrastructure systems."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
      </Head>

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

      <div className={inter.variable}>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
