import Head from 'next/head';
import Navbar from '@/components/Navbar';

export default function Submit() {
  return (
    <>
      <Head>
        <title>Submit Your Company | Capitol Stack</title>
        <meta name="description" content="Submit your climate tech company to Capitol Stack. We invest $250K–$750K at pre-seed and seed." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.capitolstack.vc/submit" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Submit Your Company | Capitol Stack" />
        <meta property="og:description" content="Submit your climate tech company to Capitol Stack. We invest $250K–$750K at pre-seed and seed." />
        <meta property="og:url" content="https://www.capitolstack.vc/submit" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Submit Your Company | Capitol Stack" />
        <meta name="twitter:description" content="Submit your climate tech company to Capitol Stack. We invest $250K–$750K at pre-seed and seed." />
      </Head>

      <Navbar />

      <main className="bg-gray-50 text-gray-900 font-sans px-4 sm:px-6 pt-20 pb-10 max-w-5xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Submit Your Company</h1>

        <section className="mb-6 sm:mb-10 max-w-3xl">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
            Capitol Stack — Backing Builders Who've Been Inside the System
          </h2>

          <p className="mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
            We invest <strong>$250K–$750K at pre-seed and seed</strong> from a <strong>$7M fund</strong> focused on software-first climate tech companies led by systems-trained founders from government, labs, and infrastructure.
          </p>
          <p className="mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">
            If you've worked inside an agency, utility, or legacy industry and <em>know how the system actually works</em> — we want to be your first check when you step out to fix it.
          </p>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
            We believe the next great climate companies won't be built by outsiders. They're already inside — and ready to go.
          </p>

          <div className="mt-4 sm:mt-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">What We Look For:</h3>
            <ul className="list-disc list-inside mb-4 sm:mb-6 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li>Founders from DOE, EPA, USAID, national labs, or infrastructure firms</li>
              <li>Code-first approaches to climate and infrastructure (grid, water, permitting, built world)</li>
              <li>Teams who navigate policy-heavy markets with speed and insight</li>
            </ul>
          </div>

          <div className="mt-4 sm:mt-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Why Us:</h3>
            <ul className="list-disc list-inside mb-4 sm:mb-6 space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li>Led by the former head of AWS Sustainable Cities</li>
              <li>Prior fund exit to Adobe, with follow-ons from Accel, Bain, Aramco, and Amazon</li>
              <li>We've lived in the system and now help founders redesign it</li>
            </ul>
          </div>

          <p className="font-medium text-sm sm:text-base">D.C.-based · Operator-led · Founder-first</p>
        </section>

        <iframe
          src="https://capitolstack.decilehub.com/submit_your_company"
          title="Decile Hub Form"
          width="100%"
          height="1400"
          className="rounded-lg border-0 w-full min-h-[800px] sm:min-h-[1400px]"
        />
      </main>
    </>
  );
}
