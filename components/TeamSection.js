export default function TeamSection() {
  return (
    <section className="bg-white py-28 px-6 font-inter text-center text-[#1A1A1A]">
      <div className="max-w-4xl mx-auto">
        <img
          src="/jason-headshot.jpg"
          alt="Jason Cahill"
          className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border border-[#E5E7EB] shadow-sm"
        />
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-[#1A1A1A]">Jason Cahill</h2>
          <p className="text-md text-[#4B5563]">Founder & Managing Director</p>
        </div>
        <p className="text-lg text-[#4B5563] leading-relaxed text-left max-w-2xl mx-auto mt-8">
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
