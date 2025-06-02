import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleContactClick = (e) => {
    e.preventDefault();
    if (router.pathname === '/') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/#contact');
    }
  };

  const headerClass = scrolled
    ? 'bg-white shadow-md'
    : 'bg-white bg-opacity-60 backdrop-blur-sm';

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${headerClass}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/capitol-stack-logo.png" alt="Capitol Stack Logo" width={32} height={32} />
          <span className="text-lg font-bold text-gray-900">Capitol Stack</span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link href="/blog" className="text-gray-700 hover:text-gray-900 transition">Blog</Link>
          <a href="#contact" onClick={handleContactClick} className="text-gray-700 hover:text-gray-900 transition">Contact</a>
          <a href="https://capitolstack.decilehub.com/submit_your_company" target="_blank" rel="noopener noreferrer"
             className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Submit a Deck
          </a>
        </div>
      </nav>
    </header>
  );
}
