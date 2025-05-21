import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Script from 'next/script';

export default function ContactSection() {
  const [formType, setFormType] = useState('contact');

  const forms = {
    contact: 'https://tally.so/embed/wA5yjW?hideTitle=1&transparentBackground=1',
    deck: 'https://tally.so/embed/3XyzJP?hideTitle=1&transparentBackground=1',
  };

  return (
    <section id="contact" className="py-28 px-6 bg-[#F9FAFB] font-inter text-[#1A1A1A]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-[#1A1A1A] mb-6 border-l-4 border-[#007070] pl-4 text-left">
          Get in Touch
        </h2>
        <p className="mb-8 text-lg text-[#4B5563] text-left">
          Whether you're a founder or just reaching out, use the toggle below to get started.
        </p>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-10">
          <button
            onClick={() => setFormType('contact')}
            className={`px-6 py-2 rounded-l-full border transition-colors duration-200 ${
              formType === 'contact'
                ? 'bg-[#007070] text-white'
                : 'bg-[#E5E7EB] text-[#1A1A1A] hover:bg-[#D1D5DB]'
            }`}
          >
            Message Us
          </button>
          <button
            onClick={() => setFormType('deck')}
            className={`px-6 py-2 rounded-r-full border transition-colors duration-200 ${
              formType === 'deck'
                ? 'bg-[#007070] text-white'
                : 'bg-[#E5E7EB] text-[#1A1A1A] hover:bg-[#D1D5DB]'
            }`}
          >
            Submit Your Deck
          </button>
        </div>

        {/* Animated Form Container */}
        <div className="relative min-h-[640px]">
          <AnimatePresence mode="wait">
            {formType === 'contact' && (
              <motion.iframe
                key="contact"
                src={forms.contact}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                width="100%"
                height="640"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Contact Form"
              />
            )}

            {formType === 'deck' && (
              <motion.iframe
                key="deck"
                src={forms.deck}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                width="100%"
                height="640"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Deck Submission Form"
              />
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Tally Embed Script + GA4 Tracking for deck submissions */}
      <Script
        id="tally-js"
        src="https://tally.so/widgets/embed.js"
        onLoad={() => {
          if (window.Tally) {
            window.Tally.loadEmbeds();

            window.addEventListener('message', function (e) {
              const isTally = e.origin.includes('tally.so');
              const { type, formId } = e.data || {};

              if (
                isTally &&
                type === 'TALLY_FORM_SUBMITTED' &&
                formId === '3XyzJP'
              ) {
                if (typeof window.gtag === 'function') {
                  window.gtag('event', 'deck_submission', {
                    event_category: 'Forms',
                    event_label: 'Pitch Deck Submitted',
                  });
                }
              }
            });
          }
        }}
      />
    </section>
  );
}
