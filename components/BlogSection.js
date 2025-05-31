// components/BlogSection.js
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function BlogSection({ posts }) {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8">Latest Insights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <Link href={`/blog/${post.slug}`}>
              <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow hover:shadow-lg transition group-hover:scale-[1.02]">
                <div className="relative w-full aspect-[16/9] mb-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="rounded-md object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {post.date}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  {post.summary}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
