// components/Layout.js
import Head from 'next/head';
import { useState } from 'react';

export default function Layout({ children, title = 'Capitol Stack' }) {
  const siteUrl = 'https://www.capitolstack.vc';
  const description = 'Capitol Stack backs the next generation of climate tech builders.';
  const ogImage = `${siteUrl}/images/og-preview.png`;

  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/capitol-stack-logo.png" />

        <link rel="canonical" href={siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={ogImage} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
      </Head>

      <main className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-8">
        {children}
      </main>

      {/* Newsletter Section */}
      <section id="newsletter" className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Join Our Newsletter</h2>
          <p className="text-gray-600 mb-6">Sign up to get our latest insights, updates, and more. No spam, just signal.</p>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="px-4 py-2 rounded-full border border-gray-300 w-full sm:w-64"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-colors"
              >
                Subscribe for Updates
              </button>
            </form>
          ) : (
            <p className="text-green-600 font-medium">Thanks! You're now subscribed.</p>
          )}
        </div>
      </section>
    </>
  );
}
