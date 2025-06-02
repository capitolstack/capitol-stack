// components/Navbar.js
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-colors duration-500 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-2xl font-bold text-gray-900 transition-colors duration-300 hover:text-teal-600">
                Capitol Stack
              </span>
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/#blog" className="text-gray-700 hover:text-teal-600 transition-colors duration-300">Blog</Link>
            <Link href="/#contact" className="text-gray-700 hover:text-teal-600 transition-colors duration-300">Contact</Link>
            <a
              href="https://capitolstack.decilehub.com/submit_your_company"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-teal-600 hover:bg-teal-700 transition-colors duration-300 px-4 py-2 rounded-md shadow-md"
            >
              Submit a Deck
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 transition-transform duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg transition-all duration-300 ease-in-out">
          <Link href="/#blog" className="block text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-base font-medium">Blog</Link>
          <Link href="/#contact" className="block text-gray-700 hover:text-teal-600 px-3 py-2 rounded-md text-base font-medium">Contact</Link>
          <a
            href="https://capitolstack.decilehub.com/submit_your_company"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-white bg-teal-600 hover:bg-teal-700 px-3 py-2 rounded-md text-base font-medium"
          >
            Submit a Deck
          </a>
        </div>
      )}
    </header>
  );
}
