import Head from 'next/head'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import Script from 'next/script'

export default function ContactPage() {
  const contactFormUrl = 'https://tally.so/embed/wA5yjW?hideTitle=1&transparentBackground=1'

  return (
    <Layout>
      <Head>
        <title>Contact Us | Capitol Stack</title>
        <meta name="description" content="Get in touch with the Capitol Stack team" />
      </Head>
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-white font-inter text-[#1A1A1A] dark:text-white">
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-md">
          <h2 className="text-3xl font-semibold text-[#1A1A1A] dark:text-white mb-6 border-l-4 border-[#007070] pl-4">
            Get in Touch
          </h2>
          <p className="mb-8 text-lg text-[#4B5563] dark:text-gray-300">
            Whether you're a founder or just reaching out, we’d love to hear from you.
          </p>
          <motion.iframe
            key="contact"
            src={contactFormUrl}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            width="100%"
            height="700"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Contact Form"
            className="w-full h-[700px] rounded-md border-none"
          />
        </div>
        <Script
          id="tally-js"
          src="https://tally.so/widgets/embed.js"
          onLoad={() => {
            if (window.Tally) {
              window.Tally.loadEmbeds();
            }
          }}
        />
      </section>
    </Layout>
  )
}
