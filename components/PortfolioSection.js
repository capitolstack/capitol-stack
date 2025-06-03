import Image from 'next/image';

export default function PortfolioSection() {
  return (
    <section className="bg-white py-28 px-6 font-inter text-[#1A1A1A] dark:text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-[#1A1A1A] dark:text-white mb-4 border-l-4 border-[#007070] pl-4">
          Portfolio Highlights
        </h2>
        <p className="text-md text-[#4B5563] dark:text-gray-300 mb-12 pl-4">
          Selected investments from the founder's prior fund, Carbon Ventures
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
          {/* Fortify */}
          <div className="flex items-start space-x-4">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex-shrink-0">
              <Image
                src="/logos/fortify.png"
                alt="Fortify Logo"
                fill
                className="object-contain rounded-md border border-[#E5E7EB]"
                sizes="(max-width: 640px) 48px, (max-width: 768px) 56px, 64px"
              />
            </div>
            <div className="space-y-3 min-w-0 flex-1">
              <h3 className="text-xl font-bold text-[#1A1A1A] dark:text-white">Fortify</h3>
              <p className="text-md text-[#4B5563] dark:text-gray-300">
                Fortify is a Boston-based digital manufacturing company specializing in advanced composite materials for additive manufacturing.
              </p>
            </div>
          </div>

          {/* Andium */}
          <div className="flex items-start space-x-4">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex-shrink-0">
              <Image
                src="/logos/andium.png"
                alt="Andium Logo"
                fill
                className="object-contain rounded-md border border-[#E5E7EB]"
                sizes="(max-width: 640px) 48px, (max-width: 768px) 56px, 64px"
              />
            </div>
            <div className="space-y-3 min-w-0 flex-1">
              <h3 className="text-xl font-bold text-[#1A1A1A] dark:text-white">Andium</h3>
              <p className="text-md text-[#4B5563] dark:text-gray-300">
                Andium provides AI-powered remote field monitoring solutions to reduce greenhouse gas emissions and enhance operational efficiency in the energy sector.
              </p>
            </div>
          </div>

          {/* SmarterX */}
          <div className="flex items-start space-x-4">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex-shrink-0">
              <Image
                src="/logos/smarterx.png"
                alt="SmarterX Logo"
                fill
                className="object-contain rounded-md border border-[#E5E7EB]"
                sizes="(max-width: 640px) 48px, (max-width: 768px) 56px, 64px"
              />
            </div>
            <div className="space-y-3 min-w-0 flex-1">
              <h3 className="text-xl font-bold text-[#1A1A1A] dark:text-white">SmarterX</h3>
              <p className="text-md text-[#4B5563] dark:text-gray-300">
                SmarterX uses data and science to help brands and retailers safely manage regulated consumer products, reducing environmental harm and risk at scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
