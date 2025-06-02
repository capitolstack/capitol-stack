// components/Navbar.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleContactClick = () => {
    if (router.pathname === '/blog') {
      router.push('/#contact');
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <header className={\`fixed top-0 left-0 w-full z-50 transition-all duration-300 \${scrolled ? 'bg-white shadow-md' : 'bg-white bg-opacity-60 backdrop-blur-sm'}\`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/capitol-stack-logo.png" alt="Capitol Stack Logo" width={32} height={32} />
          <span className="text-xl font-semibold text-gray-800">Capitol Stack</span>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <button onClick={handleContactClick} className="text-gray-700 hover:text-blue-600 transition">Contact</button>
          <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition">Blog</Link>
          <a
            href="https://capitolstack.decilehub.com/submit_your_company"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit a Deck
          </a>
          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="flex items-center bg-gray-100 px-2 py-1 rounded-full">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-none focus:outline-none px-2 text-sm"
              />
              <button
                type="submit"
                className="text-sm bg-blue-600 text-white px-3 py-1 rounded-full hover:bg-blue-700 transition"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <span className="text-green-600 text-sm">✓ Subscribed</span>
          )}
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>
      {isOpen && (
        <div className="md:hidden px-4 pb-6 space-y-4 bg-white border-t">
          <button onClick={handleContactClick} className="block text-gray-700 hover:text-blue-600">Contact</button>
          <Link href="/blog" className="block text-gray-700 hover:text-blue-600" onClick={toggleMenu}>Blog</Link>
          <a
            href="https://capitolstack.decilehub.com/submit_your_company"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            onClick={toggleMenu}
          >
            Submit a Deck
          </a>
          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-3 py-2 border rounded-md text-sm"
              />
              <button
                type="submit"
                className="text-sm bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Subscribe
              </button>
            </form>
          ) : (
            <span className="text-green-600 text-sm">✓ Subscribed</span>
          )}
        </div>
      )}
    </header>
  );
}
