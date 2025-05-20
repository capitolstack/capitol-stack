export default function BlogSection() {
  return (
    <section className="py-20 px-6 bg-gray-50 font-inter">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-10">Insights & Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="border border-gray-200 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">Why D.C. Is the Next Climate Tech Hub</h3>
            <p className="text-md text-gray-600">
              Exploring how policy, science, and software intersect in the nation’s capital to create world-changing startups.
            </p>
          </div>
          <div className="border border-gray-200 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">Lessons from Climate Founders in Our Portfolio</h3>
            <p className="text-md text-gray-600">
              Tactical takeaways from real startups solving real problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
