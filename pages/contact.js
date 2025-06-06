import Head from 'next/head'
import Layout from '../components/Layout'

export default function ContactPage() {
  return (
    <Layout>
      <Head>
        <title>Contact Us | Capitol Stack</title>
        <meta name="description" content="Get in touch with the Capitol Stack team" />
      </Head>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-gray-600 mb-8">
            Whether you’re a founder, LP, or just curious — we’d love to hear from you.
          </p>
          <iframe 
            src="https://tally.so/r/m6zeoo" 
            width="100%" 
            height="520" 
            title="Contact Form"
            className="border-none rounded-md"
          ></iframe>
        </div>
      </section>
    </Layout>
  )
}
