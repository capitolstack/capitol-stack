import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [email, setEmail] = useState('');
  const [formVisible, setFormVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => {
        setSubmitted(false);
        setFormVisible(false);
      }, 3000);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/">
          <span className="text-xl font-bold text-gray-800">Capitol Stack</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/submit" className="text-gray-600 hover:text-gray-900 font-medium">
            Submit a Deck
          </Link>
          <button
            onClick={() => setFormVisible(!formVisible)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm transition-colors"
          >
            Get Updates
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {formVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-gray-100 border-t border-gray-300"
          >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
              <div className="text-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Stay Updated</h2>
                <p className="text-sm text-gray-600">Get notified when we publish new posts or open up our network.</p>
              </div>
              {!submitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row items-center gap-4 justify-center"
                >
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="px-4 py-2 rounded-full border border-gray-300 w-full sm:w-64 text-sm"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              ) : (
                <p className="text-green-600 text-center font-medium">Thanks! You're now subscribed.</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
