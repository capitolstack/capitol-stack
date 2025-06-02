
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/90 backdrop-blur shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Site Name */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <img src="/logo.svg" alt="Capitol Stack Logo" className="h-8 w-auto" />
              <span className="text-xl font-bold text-gray-900 hover:text-teal-600 transition-colors">Capitol Stack</span>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-900">
            <Link href="/blog" className="hover:text-teal-600 transition-colors">Blog</Link>
            <Link href="/#contact" className="hover:text-teal-600 transition-colors">Contact</Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="text-gray-900 hover:text-teal-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white/95 backdrop-blur-md shadow-md`}>
        <div className="px-4 pt-4 pb-6 space-y-4 text-center text-base font-medium">
          <Link href="/blog" className="block hover:text-teal-600">Blog</Link>
          <Link href="/#contact" className="block hover:text-teal-600">Contact</Link>
        </div>
      </div>
    </header>
  );
}
