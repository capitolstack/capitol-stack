import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import NewsletterButton from './NewsletterButton';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white bg-opacity-60 backdrop-blur-sm'
      }`}
    >
      <nav role="navigation" aria-label="Main Navigation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo & Brand */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/capitol-stack-logo.png" alt="Capitol Stack Logo" width={48} height={48} />
          <span className="text-xl font-semibold text-gray-800">Capitol Stack</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">
            Contact
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition">
            Blog
          </Link>
          <a
            href="https://capitolstack.decilehub.com/submit_your_company"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-gray-50 dark:text-gray-100 px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit a Deck
          </a>
          <NewsletterButton />
        </div>

        {/* Mobile Menu Toggle */}
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

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          <Link
            href="/contact"
            className="block text-gray-700 hover:text-blue-600"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <Link href="/blog" className="block text-gray-700 hover:text-blue-600" onClick={toggleMenu}>
            Blog
          </Link>
          <a
            href="https://capitolstack.decilehub.com/submit_your_company"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-gray-50 dark:text-gray-100 bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit a Deck
          </a>
          <NewsletterButton />
        </div>
      )}
    </header>
  );
}
