export default function ThesisSection() {
  return (
    <section className="bg-gray-100 py-20 px-6 font-inter">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Our Thesis</h2>
          <p className="text-lg leading-relaxed">
            With the highest per-capita number of CS grads in the U.S. and a wave of technical talent emerging from DOE, EPA, and USAID, D.C. is poised to become the next frontier of climate innovation. We back mission-driven founders at the intersection of government, science, and software.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-4">Why Capitol Stack</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Deep networks in government, tech, and academia</li>
            <li>Hands-on operational and fundraising support</li>
            <li>Experience building and scaling climate ventures</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
