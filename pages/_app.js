import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ThemeProvider, useTheme } from 'next-themes';
import '../styles/globals.css';
import Navbar from '@/components/Navbar';

import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

function DarkModeClassManager() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (resolvedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [resolvedTheme]);

  return null;
}

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
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <DarkModeClassManager />
      <main role="main" className={inter.variable}>
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

        <Navbar />
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
