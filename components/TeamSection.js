import Image from 'next/image';

export default function TeamSection() {
  return (
    <section className="bg-white py-12 sm:py-20 lg:py-28 px-4 sm:px-6 font-inter text-center text-[#1A1A1A]">
      <div className="max-w-4xl mx-auto">
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto mb-4 sm:mb-6">
          <Image
            src="/jason-headshot.jpg"
            alt="Jason Cahill"
            fill
            className="rounded-full object-cover border border-[#E5E7EB] shadow-sm"
            sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 128px"
            priority
          />
        </div>
        <div className="space-y-2 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1A1A1A]">Jason Cahill</h2>
          <p className="text-sm sm:text-md text-[#4B5563]">Founder & Managing Director</p>
        </div>
        <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed text-left max-w-2xl mx-auto mt-6 sm:mt-8">
          Jason Cahill is the founder and Managing Director of Capitol Stack. He's a systems thinker who's spent the last two decades building at the intersection of infrastructure, technology, and impact. Before launching Capitol Stack, he led Amazon's Sustainable Cities program at AWS, founded his own startup, and invested in climate tech through Carbon Ventures.
          <br /><br />
          Jason has a deep belief in backing people who know how systems work—because they helped run them. Many of the founders he supports come from public institutions like the Department of Energy, EPA, or USAID. They're mission-driven, often overlooked by traditional VCs, and ready to build what government can't.
          <br /><br />
          He's also former US Army, a professor of entrepreneurship, and a firm believer that climate impact starts with founder-first capital.
        </p>
      </div>
    </section>
  );
}
