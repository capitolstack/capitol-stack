import { motion } from 'framer-motion';
import Script from 'next/script';

export default function ContactSection() {
  const contactFormUrl = 'https://tally.so/embed/wA5yjW?hideTitle=1&transparentBackground=1';

  return (
    <section id="contact" className="py-12 sm:py-20 lg:py-28 px-4 sm:px-6 bg-[#F9FAFB] font-inter text-[#1A1A1A]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A] mb-4 sm:mb-6 border-l-4 border-[#007070] pl-4 text-left">
          Get in Touch
        </h2>
        <p className="mb-6 sm:mb-8 text-base sm:text-lg text-[#4B5563] text-left">
          Whether you're a founder or just reaching out, we'd love to hear from you.
        </p>

        <div className="relative min-h-[500px] sm:min-h-[640px]">
          <motion.iframe
            key="contact"
            src={contactFormUrl}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            width="100%"
            height="640"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Contact Form"
            className="min-h-[500px] sm:min-h-[640px]"
          />
        </div>
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
  );
}
