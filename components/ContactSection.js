export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-white font-inter text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
        <p className="mb-8 text-lg text-gray-700">
          Interested in investing, collaborating, or learning more? Reach out and let’s talk.
        </p>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded" />
          <textarea placeholder="Message" rows="5" className="w-full p-3 border rounded" />
          <button
            type="submit"
            className="w-full bg-teal-700 text-white font-semibold py-3 rounded hover:bg-teal-800"
           
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
