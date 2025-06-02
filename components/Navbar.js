// components/Navbar.js
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <img
                src="/capitol-stack-logo.png"
                alt="Capitol Stack Logo"
                className="h-10 w-auto"
              />
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-medium">
              Blog
            </Link>
            <a href="/#contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Contact
            </a>
            <a
              href="https://capitolstack.decilehub.com/submit_your_company"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors text-sm font-medium"
            >
              Submit Your Deck
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 focus:outline-none">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-3 shadow-sm">
          <Link href="/blog" className="block text-gray-700 hover:text-blue-600 font-medium">
            Blog
          </Link>
          <a href="/#contact" className="block text-gray-700 hover:text-blue-600 font-medium">
            Contact
          </a>
          <a
            href="https://capitolstack.decilehub.com/submit_your_company"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors text-sm font-medium"
          >
            Submit Your Deck
          </a>
        </div>
      )}
    </nav>
  );
}
