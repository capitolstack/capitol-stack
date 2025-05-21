// pages/submit.js

import Head from 'next/head';

export default function SubmitPage() {
  return (
    <>
      <Head>
        <title>Submit Your Company | Capitol Stack</title>
      </Head>

      <main className="min-h-screen bg-white px-6 py-24 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Submit Your Company
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mb-8">
          We use Decile Hub to manage startup submissions. Clicking below will open the form in a new tab.
        </p>
        <a
          href="https://capitolstack.decilehub.com/submit_your_company"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white text-lg font-semibold px-8 py-4 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Open Submission Form
        </a>
      </main>
    </>
  );
}
