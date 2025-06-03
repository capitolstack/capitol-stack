import Link from 'next/link';
import Head from 'next/head';
import Navbar from '@/components/Navbar';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found – Capitol Stack</title>
        <meta name="robots" content="noindex" />
      </Head>
      
      {/* Add navbar */}
      <Navbar />
      
      {/* ONLY CHANGE: Added pt-20 to account for fixed navbar */}
      <main className="flex flex-col items-center justify-center min-h-screen px-6 py-16 pt-20 bg-gray-50 dark:bg-gray-900 text-center">
        <img
          src="/capitol-stack-logo.png"
          alt="Capitol Stack Logo"
          className="w-24 md:w-32 mb-6"
        />
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          404 – Page Not Found
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-xl">
          Sorry, the page you were looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <a className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition">
            Go Home
          </a>
        </Link>
      </main>
    </>
  );
}
