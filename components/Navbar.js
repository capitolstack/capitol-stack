// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-white shadow">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/capitol-stack-logo.png"
              alt="Capitol Stack Logo"
              className="h-10 w-auto"
            />
            <span className="text-lg font-bold text-gray-900">Capitol Stack</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/#thesis" className="text-gray-700 hover:text-gray-900">
            Thesis
          </Link>
          <Link href="/#portfolio" className="text-gray-700 hover:text-gray-900">
            Portfolio
          </Link>
          <Link href="/#team" className="text-gray-700 hover:text-gray-900">
            Team
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-gray-900">
            Blog
          </Link>
          <Link href="/#contact" className="text-gray-700 hover:text-gray-900">
            Contact
          </Link>
          <a
            href="https://capitolstack.decilehub.com/submit_your_company"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
          >
            Submit your deck
          </a>
        </div>
      </nav>
    </header>
  );
}
