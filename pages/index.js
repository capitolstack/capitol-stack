import Head from 'next/head'
import ThesisSection from '../components/ThesisSection'
import PortfolioSection from '../components/PortfolioSection'
import TeamSection from '../components/TeamSection'
import BlogSection from '../components/BlogSection'
import ContactSection from '../components/ContactSection'
import { getAllPosts } from '@/lib/posts'

export async function getStaticProps() {
  const posts = getAllPosts()
  return {
    props: { posts }
  }
}

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Capitol Stack VC</title>
        <link rel="icon" href="/capitol-stack-logo.png" />
      </Head>

      <main className="bg-gray-50 min-h-screen p-8 text-center">
        <img 
          src="/capitol-stack-logo.png" 
          alt="Capitol Stack Logo" 
          className="w-32 h-32 mx-auto mb-8 object-contain" 
        />
        <h1 className="text-5xl font-bold mb-6 text-gray-900">
          Backing the Next Generation of Climate Tech Builders
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">
          Capitol Stack is a pre-seed VC fund based in Washington, D.C., investing in founders emerging from the deepest policy, tech, and scientific talent pool.
        </p>
        <a 
          href="#contact" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors"
        >
          Learn More
        </a>
      </main>

      <ThesisSection />
      <PortfolioSection />
      <TeamSection />
      <BlogSection posts={posts} />
      <ContactSection />

      <footer className="bg-black text-white p-8 text-center">
        <p>© 2024 Capitol Stack VC. All rights reserved.</p>
      </footer>
    </div>
  )
}
