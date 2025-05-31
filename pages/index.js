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
      </Head>

      <main className="bg-gray-50 min-h-screen p-8 text-center">
        <img src="/capitol-stack-logo.png" alt="Capitol Stack Logo" className="w-32 mx-auto mb-8" />
        <h1 className="text-5xl font-bold mb-6">Backing the Next Generation of Climate Tech Builders</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Capitol Stack is a pre-seed VC fund based in Washington, D.C.</p>
        <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded">Learn More</a>
      </main>

      <ThesisSection />
      <PortfolioSection />
      <TeamSection />
      <BlogSection posts={posts} />
      <ContactSection />

      <footer className="bg-black text-white p-8 text-center">
        <p>Capitol Stack VC 2024</p>
      </footer>
    </div>
  )
}
