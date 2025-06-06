import React from 'react';

export default function NewsletterForm() {
  return (
    <section id="newsletter" className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Subscribe to Newsletter</h2>
        <p className="text-gray-600 mb-6">
          Sign up for <strong>Stacked Signals</strong> — insights, founder spotlights, and fund updates from Capitol Stack.
        </p>
        <form
          action="https://buttondown.email/api/emails/embed-subscribe/capitolstack"
          method="post"
          target="popupwindow"
          onSubmit={() => window.open('https://buttondown.email/capitolstack', 'popupwindow')}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <input
            type="email"
            name="email"
            className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="you@example.com"
            required
          />
          <input
            type="submit"
            value="Subscribe"
            className="bg-indigo-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-indigo-700 transition"
          />
        </form>
        <p className="text-xs text-gray-500 mt-4">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
