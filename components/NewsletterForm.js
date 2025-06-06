import Script from 'next/script';
import { motion } from 'framer-motion';

export default function NewsletterForm() {
  const newsletterUrl = 'https://tally.so/embed/m6zeoo?hideTitle=1&transparentBackground=1';

  return (
    <section id="newsletter" className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Subscribe to Newsletter</h2>
        <p className="text-gray-600 mb-6">
          Sign up for <strong>Stacked Signals</strong> — insights, founder spotlights, and fund updates from Capitol Stack.
        </p>

        <div className="relative w-full max-w-2xl mx-auto rounded-md overflow-hidden min-h-[700px]">
          <motion.iframe
            key="newsletter"
            src={newsletterUrl}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            width="100%"
            height="700"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Newsletter Signup"
            className="w-full h-[700px] rounded-md border-none"
          />
        </div>
      </div>

      <Script
        id="tally-newsletter"
        src="https://tally.so/widgets/embed.js"
        onLoad={() => {
          if (window.Tally) {
            window.Tally.loadEmbeds();
          }
        }}
      />
    </section>
  );
}
