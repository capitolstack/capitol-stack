import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/capitol-stack-logo.png"
            alt="Capitol Stack Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-xl font-bold text-gray-900 tracking-tight">
            Capitol Stack
          </span>
        </Link>

        <ul className="flex space-x-6 text-base font-medium text-gray-700">
          <li className="relative group">
            <Link href="/" className="hover:text-black">
              Home
              <span className="block h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          </li>
          <li className="relative group">
            <Link href="/#portfolio" className="hover:text-black">
              Portfolio
              <span className="block h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          </li>
          <li className="relative group">
            <Link href="/blog" className="hover:text-black">
              Blog
              <span className="block h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          </li>
          <li className="relative group">
            <Link href="/#contact" className="hover:text-black">
              Contact
              <span className="block h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          </li>
        </ul>

        <div className="ml-6">
          <Link href="/submit.html">
            <span className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition">
              Submit Startup
            </span>
          </Link>
        </div>
      </nav>
    </header>
  )
}
