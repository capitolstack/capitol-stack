// components/Navbar.js
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (email) {
      // Here, connect to your email backend (e.g., ConvertKit, Mailchimp, Formspree)
      console.log('Email submitted:', email);
      setSubmitted(true);
      setTimeout(() => setShowForm(false), 3000); // Auto-close after success
    }
  };

  return (
    <nav className="w-full bg-white shadow-sm px-4 py-4 flex justify-between items-center">
      <Link href="/">
        <span className="text-xl font-bold text-gray-800">Capitol Stack</span>
      </Link>
      <div className="space-x-4">
        <Link href="/submit">
          <span className="text-gray-700 hover:text-blue-700">Submit a Deck</span>
        </Link>
        <button
          onClick={() => setShowForm((prev) => !prev)}
          className="text-gray-700 hover:text-blue-700"
        >
          Get Email Updates
        </button>
      </div>

      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white shadow-lg rounded-xl p-6 z-50"
          >
            {submitted ? (
              <p className="text-green-700 text-sm">Thanks — we’ll keep you updated on what we’re building.</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 items-center">
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="flex-1 px-4 py-2 rounded-full border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium"
                >
                  Submit
                </button>
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
