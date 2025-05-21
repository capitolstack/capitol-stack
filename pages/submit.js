// pages/submit.js

import Head from 'next/head';

export default function SubmitPage() {
  return (
    <>
      <Head>
        <title>Submit Your Company | Capitol Stack</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-24 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Submit Your Company
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mb-8">
          We’d love to learn about what you're building. Click below to submit your company through our secure Decile Hub form.
        </p>
        <a
          href="https://capitolstack.decilehub.com/submit_your_company"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white text-lg font-semibold px-8 py-4 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Submit Now
        </a>
      </main>
    </>
  );
}
