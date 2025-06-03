
import Head from 'next/head'
import ThesisSection from '../components/ThesisSection'
import PortfolioSection from '../components/PortfolioSection'
import TeamSection from '../components/TeamSection'
import BlogSection from '../components/BlogSection'
import ContactSection from '../components/ContactSection'
import { motion } from 'framer-motion'
import { getAllPosts } from '@/lib/posts'

export async function getStaticProps() {
  const posts = getAllPosts()
  const featured = posts.find(post => post.slug === 'inside-capitol-stack') || null
  return {
    props: { featured }
  }
}

export default function Home({ featured }) {
  return (
    <div>
      <Head>
        <title>Capitol Stack – Founder-First Climate Tech VC</title>
        <meta
          name="description"
          content="Capitol Stack backs mission-driven climate tech founders emerging from government, science, and infrastructure systems."
        />
        <link rel="canonical" href="https://capitolstack.vc/" />
        <link rel="icon" href="/capitol-stack-logo.png" />
        <meta property="og:title" content="Capitol Stack – Founder-First Climate Tech VC" />
        <meta
          property="og:description"
          content="Investing in overlooked but deeply capable builders at the intersection of climate, government, and software."
        />
        <meta property="og:image" content="/images/og-preview.png" />
        <meta property="og:url" content="https://capitolstack.vc" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen px-6 py-16 text-center">
        <motion.img
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          src="/capitol-stack-logo.png"
          alt="Capitol Stack Logo"
          className="w-48 sm:w-64 md:w-72 lg:w-80 mx-auto mb-10 object-contain"
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6 max-w-4xl mx-auto">
          Backing the Next Generation<br className="hidden md:inline" />
          <span className="text-teal-700"> of Climate Tech Builders</span>
        </h1>
        <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto text-gray-700 leading-relaxed">
          Capitol Stack is a pre-seed VC fund based in Washington, D.C., investing in founders emerging from the deepest policy, tech, and scientific talent pool.
        </p>
        <a 
          href="#contact" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors font-medium text-base sm:text-lg"
        >
          Learn More
        </a>
      </main>

      <ThesisSection />
      <PortfolioSection />
      <TeamSection />
      {featured && <BlogSection featured={featured} />}
      <ContactSection />

      <footer role="contentinfo" className="bg-black text-white p-8 text-center">
        <p>© 2024 Capitol Stack VC. All rights reserved.</p>
      </footer>
    </div>
  )
}
