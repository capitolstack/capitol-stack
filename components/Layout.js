// components/Layout.js
import Head from 'next/head';
import Navbar from './Navbar';

export default function Layout({ children, title = 'Capitol Stack' }) {
  const siteUrl = 'https://www.capitolstack.vc';
  const description = 'Capitol Stack backs the next generation of climate tech builders.';
  const ogImage = `${siteUrl}/images/og-preview.png`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/capitol-stack-logo.png" />

        {/* Canonical */}
        <link rel="canonical" href={siteUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={ogImage} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
      </Head>

      <Navbar />

      <main className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-8">
        {children}
      </main>
    </>
  );
}
