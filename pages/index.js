import Head from 'next/head'
import Image from 'next/image'
import ThesisSection from '../components/ThesisSection'
import PortfolioSection from '../components/PortfolioSection'
import TeamSection from '../components/TeamSection'
import BlogSection from '../components/BlogSection'





export default function Home() {
  return (
    <>
      <Head>
        <title>Capitol Stack VC</title>
        <link rel="icon" href="/capitol-stack-logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>
      <main className="min-h-screen px-6 py-24 max-w-5xl mx-auto text-center font-inter">
        <Image src="/capitol-stack-logo.png" alt="Capitol Stack Logo" width={200} height={60} className="mx-auto mb-8" />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Backing the Next Generation of Climate Tech Builders
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Capitol Stack is a pre-seed VC fund based in Washington, D.C., investing in founders emerging from the world's deepest policy, tech, and scientific talent pool.
        </p>
        <a href="#contact" className="inline-block px-6 py-3 bg-teal-700 text-white rounded-full hover:bg-teal-800 font-semibold">
          Learn More
        </a>
      <ThesisSection />
      <PortfolioSection />
      <TeamSection />
      <BlogSection />

      </main>
    </>
  )
}
