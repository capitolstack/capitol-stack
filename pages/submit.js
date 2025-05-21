// pages/submit.js

import Head from 'next/head';

export default function SubmitPage() {
  return (
    <>
      <Head>
        <title>Submit Your Company | Capitol Stack</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-white px-6 py-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Submit Your Company</h1>
        <iframe
          src="https://capitolstack.decilehub.com/submit_your_company"
          width="100%"
          height="1400"
          style={{ border: 'none', borderRadius: '0.5rem' }}
          title="Decile Hub Submission Form"
        ></iframe>
      </main>
    </>
  );
}
