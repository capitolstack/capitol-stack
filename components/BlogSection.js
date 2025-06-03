import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function BlogSection({ posts }) {
  const featured = posts?.find((post) => post.slug === 'inside-capitol-stack');

  if (!featured) return null;

  const imagePath = featured.image?.startsWith('/') ? featured.image : `/images/blog/${featured.image}`;

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Explore Capitol Stack
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Understand the thesis behind our fund and the role of community in climate innovation.
          </p>
        </div>

        {/* Featured Blog Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <Link href={`/blog/${featured.slug}`} className="group block rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="relative w-full h-64 sm:h-80 md:h-96">
              <Image
                src={imagePath}
                alt={featured.title}
                fill
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 75vw"
                priority
              />
            </div>
            <div className="bg-white p-6">
              <h3 className="text-2xl font-bold text-gray-900">{featured.title}</h3>
              <p className="mt-2 text-gray-600">{featured.excerpt}</p>
              <div className="mt-4 text-sm text-gray-500">
                {featured.date && new Date(featured.date).toLocaleDateString()}
              </div>
            </div>
          </Link>
        </motion.div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="text-base font-medium text-blue-600 hover:text-blue-800 underline"
          >
            View Full Blog Archive →
          </Link>
        </div>
      </div>
    </section>
  );
}
