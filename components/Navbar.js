import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="w-full border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 md:px-8 py-4 flex items-center justify-between">
      <Link 
        href="/"
        className="text-xl font-bold tracking-tight text-gray-900 dark:text-white hover:opacity-80 transition-opacity"
      >
        Capitol Stack
      </Link>

      <div className="flex items-center gap-6">
        <Link 
          href="/blog"
          className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors"
        >
          Blog
        </Link>
        <Link 
          href="/submit"
          className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors"
        >
          Submit
        </Link>

        {mounted && (
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="ml-4 p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
            aria-label="Toggle Dark Mode"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        )}
      </div>
    </nav>
  );
}
