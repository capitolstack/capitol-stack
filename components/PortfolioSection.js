export default function PortfolioSection() {
  return (
    <section className="py-20 px-6 font-inter bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Portfolio Preview</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">Company A</h3>
            <p className="text-md text-gray-600">
              Carbon removal marketplace built by former DOE engineers.
            </p>
          </div>
          <div className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">Company B</h3>
            <p className="text-md text-gray-600">
              AI-powered grid optimization spun out of USAID.
            </p>
          </div>
          <div className="border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">Company C</h3>
            <p className="text-md text-gray-600">
              Climate fintech targeting underbanked resiliency zones.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
