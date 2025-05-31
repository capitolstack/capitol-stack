// components/Layout.js
import Head from 'next/head';

export default function Layout({ children, title = 'Capitol Stack' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Capitol Stack blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-8">
        {children}
      </main>
    </>
  );
}
