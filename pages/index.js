import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getAllPosts } from '@/lib/posts';

// Import your components
import Navbar from '@/components/Navbar';
import ThesisSection from '@/components/ThesisSection';
import TeamSection from '@/components/TeamSection';
import PortfolioSection from '@/components/PortfolioSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts: posts.slice(0, 3), // Only pass a few posts for the homepage
    },
  };
}

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Capitol Stack – Founder-First Climate Tech VC</title>
        <meta
          name="description"
          content="Capitol Stack backs mission-driven climate tech founders emerging from government, science, and infrastructure systems."
        />
        <link rel="canonical" href="https://www.capitolstack.vc" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Capitol Stack – Founder-First Climate Tech VC" />
        <meta property="og:description" content="Capitol Stack backs mission-driven climate tech founders emerging from government, science, and infrastructure systems." />
        <meta property="og:url" content="https://www.capitolstack.vc" />
        <meta property="og:image" content="https://www.capitolstack.vc/images/og-preview.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Capitol Stack – Founder-First Climate Tech VC" />
        <meta name="twitter:description" content="Capitol Stack backs mission-driven climate tech founders emerging from government, science, and infrastructure systems." />
        <meta name="twitter:image" content="https://www.capitolstack.vc/images/og-preview.png" />
      </Head>

      {/* Add Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-20 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6">
              Founder-First Climate Tech VC
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Capitol Stack backs mission-driven climate tech founders emerging from government, science, and infrastructure systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="https://capitolstack.decilehub.com/submit_your_company"
                className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Submit Your Deck
              </a>
              <a
                href="#contact"
                className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Your existing sections */}
      <ThesisSection />
      <TeamSection />
      <PortfolioSection />
      <BlogSection posts={posts} />
      <ContactSection />
    </>
  );
}
