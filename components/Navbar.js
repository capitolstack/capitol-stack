import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = router.pathname === '/';

  const scrollToContact = (e) => {
    e.preventDefault();
    if (isHome) {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/#contact');
    }
  };

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/capitol-stack-logo.png" alt="Capitol Stack Logo" width={32} height={32} />
          <span className="text-lg font-semibold text-gray-800">Capitol Stack</span>
        </Link>
        <div className="flex items-center space-x-6">
          <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition">Blog</Link>
          <button onClick={scrollToContact} className="text-gray-700 hover:text-blue-600 transition">Contact</button>
          <a
            href="https://capitolstack.decilehub.com/submit_your_company"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
          >
            Submit a Deck
          </a>
        </div>
      </nav>
    </header>
  );
}
