export default function ContactSection() {
  return (
    <section id="contact" className="py-28 px-6 bg-white font-inter text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-gray-900 border-l-4 border-[#007070] pl-4 text-left">
          Get in Touch
        </h2>
        <p className="mb-8 text-lg text-gray-700 text-left">
          Interested in investing, collaborating, or learning more? Reach out — or share your deck directly below.
        </p>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded" />
          <textarea placeholder="Message" rows="5" className="w-full p-3 border rounded" />
          <button
            type="submit"
            className="w-full bg-[#007070] hover:bg-[#005F5F] text-white font-semibold py-3 rounded transition-colors"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10">
          <a
            href="https://tally.so/r/3XyzJP"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-full transition-colors"
          >
            Submit Your Deck
          </a>
        </div>
      </div>
    </section>
  );
}
