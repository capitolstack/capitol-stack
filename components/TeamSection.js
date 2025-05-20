export default function TeamSection() {
  return (
    <section className="bg-white py-28 px-6 font-inter text-center">
      <div className="max-w-4xl mx-auto">
        <img
          src="/jason-headshot.jpg"
          alt="Jason Cahill"
          className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border border-gray-300 shadow-sm"
        />
        <h2 className="text-3xl font-semibold text-gray-900 mb-2">Jason Cahill</h2>
        <p className="text-md text-gray-600 mb-6">Founder & Managing Director</p>
        <p className="text-lg text-gray-700 leading-relaxed text-left max-w-3xl mx-auto">
          Jason Cahill is the founder and Managing Director of Capitol Stack. He’s a systems thinker who’s spent the last two decades building at the intersection of infrastructure, technology, and impact. Before launching Capitol Stack, he led Amazon’s Sustainable Cities program at AWS, founded his own startup, and invested in climate tech through Carbon Ventures.
          <br /><br />
          Jason has a deep belief in backing people who know how systems work—because they helped run them. Many of the founders he supports come from public institutions like the Department of Energy, EPA, or USAID. They’re mission-driven, often overlooked by traditional VCs, and ready to build what government can’t.
          <br /><br />
          He’s also former US Army, a professor of entrepreneurship, and a firm believer that climate impact starts with founder-first capital.
        </p>
      </div>
    </section>
  );
}
