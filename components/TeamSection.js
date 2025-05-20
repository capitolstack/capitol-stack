export default function TeamSection() {
  return (
    <section className="py-20 px-6 bg-white text-center font-inter">
      <div className="max-w-3xl mx-auto">
        <img
          src="/jason-headshot.jpg"
          alt="Jason Cahill"
          className="w-40 h-40 rounded-full mx-auto mb-6 object-cover"
        />
        <h2 className="text-3xl font-semibold mb-2">Jason Cahill</h2>
        <p className="text-md text-gray-700 mb-4">Founder & General Partner</p>
        <p className="text-lg text-gray-600">
          I'm a former Amazon leader, professor at Columbia, and early-stage investor who’s helped launch and scale over 30 climate startups. I’ve built sustainable city infrastructure at AWS, taught hundreds of students entrepreneurship, and backed mission-driven founders before it was cool. I know how to spot the spark, build the system, and scale the impact. Let’s go.
        </p>
      </div>
    </section>
  );
}
