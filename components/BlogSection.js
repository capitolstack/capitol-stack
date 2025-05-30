// components/BlogSection.js
import Link from 'next/link';
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
            className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <Link href={`/blog/${post.slug}`}>
              <div>
                <img
                  src={post.image}
                  alt={post.title}
                  className="rounded-md mb-4 w-full h-48 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
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
