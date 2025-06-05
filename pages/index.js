
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


<section className="w-full bg-white dark:bg-gray-900 text-center py-20 px-6">
  <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
    The Right Stack Wins.
  </h1>
  <p className="text-xl sm:text-2xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300 mb-4">
    In climate, it isn’t just software—it’s everything that surrounds it.
  </p>
  <p className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
    Code. Capital. Customers. Community.
  </p>
  <p className="text-lg sm:text-xl max-w-2xl mx-auto mt-4 text-gray-800 dark:text-gray-200 font-semibold">
    This is the Capitol Stack.
  </p>
</section>


export default function Home({ featured }) {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
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

      <main className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white py-24 px-6 text-center font-inter">
  <div className="max-w-3xl mx-auto space-y-8">
    <div className="mx-auto">
      <img src="/capitol-stack-logo.png" alt="Capitol Stack Logo" className="mx-auto h-40 md:h-48 object-contain" />
    </div>
    <h1 className="text-4xl font-bold leading-tight">
      Backing the Next Generation <br />
      <span className="text-teal-600 dark:text-teal-400">of Climate Tech Builders</span>
    </h1>
    <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
      Capitol Stack is a pre-seed VC fund based in Washington, D.C., investing in founders emerging
      from the deepest policy, tech, and scientific talent pool.
    </p>
    <a
      href="#contact"
      className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition"
    >
      Learn More
    </a>
  </div>
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
