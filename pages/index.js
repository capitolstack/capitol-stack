
import Head from 'next/head'
import ThesisSection from '../components/ThesisSection'
import PortfolioSection from '../components/PortfolioSection'
import TeamSection from '../components/TeamSection'
import BlogSection from '../components/BlogSection'
import ContactSection from '../components/ContactSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Capitol Stack VC</title>
        <link rel="icon" href="/capitol-stack-logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="bg-[#F3F7FB] min-h-screen px-6 py-32 text-center font-inter flex flex-col items-center justify-center text-[#1A1A1A]">
        <img
          src="/capitol-stack-logo.png"
          alt="Capitol Stack Logo"
          className="w-[140px] mb-10"
        />
        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 max-w-3xl mb-6">
          Backing the Next Generation of Climate Tech Builders
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-8">
          Capitol Stack is a pre-seed VC fund based in Washington, D.C., investing in founders emerging from the world's deepest policy, tech, and scientific talent pool.
        </p>
        <a
          href="#contact"
          className="inline-block bg-[#007070] hover:bg-[#005F5F] text-white font-semibold px-8 py-3 rounded-full transition-colors mb-20"
        >
          Learn More
        </a>
      </main>

      <ThesisSection />
      <PortfolioSection />
      <TeamSection />
      <BlogSection />
      <ContactSection />

      <footer className="bg-black text-white py-10 text-center font-inter">
        <p>&copy; {new Date().getFullYear()} Capitol Stack VC. All rights reserved.</p>
      </footer>
    </>
  )
}
