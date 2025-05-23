export default function PortfolioSection() {
  return (
    <section className="bg-white py-28 px-6 font-inter text-[#1A1A1A]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-[#1A1A1A] mb-4 border-l-4 border-[#007070] pl-4">
          Portfolio Highlights
        </h2>
        <p className="text-md text-[#4B5563] mb-12 pl-4">
          Selected investments from the founder’s prior fund, Carbon Ventures
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
          {/* Fortify */}
          <div className="flex items-start space-x-4">
            <img
              src="/logos/fortify.png"
              alt="Fortify Logo"
              className="w-16 h-16 object-contain rounded-md border border-[#E5E7EB]"
            />
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-[#1A1A1A]">Fortify</h3>
              <p className="text-md text-[#4B5563]">
                Fortify is a Boston-based digital manufacturing company specializing in advanced composite materials for additive manufacturing.
              </p>
            </div>
          </div>

          {/* Andium */}
          <div className="flex items-start space-x-4">
            <img
              src="/logos/andium.png"
              alt="Andium Logo"
              className="w-16 h-16 object-contain rounded-md border border-[#E5E7EB]"
            />
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-[#1A1A1A]">Andium</h3>
              <p className="text-md text-[#4B5563]">
                Andium provides AI-powered remote field monitoring solutions to reduce greenhouse gas emissions and enhance operational efficiency in the energy sector.
              </p>
            </div>
          </div>

          {/* SmarterX */}
          <div className="flex items-start space-x-4">
            <img
              src="/logos/smarterx.png"
              alt="SmarterX Logo"
              className="w-16 h-16 object-contain rounded-md border border-[#E5E7EB]"
            />
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-[#1A1A1A]">SmarterX</h3>
              <p className="text-md text-[#4B5563]">
                SmarterX uses data and science to help brands and retailers safely manage regulated consumer products, reducing environmental harm and risk at scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
