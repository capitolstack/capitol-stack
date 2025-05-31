import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function BlogSection({ posts }) {
  if (!posts || posts.length === 0) {
    return null
  }

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Latest Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.slice(0, 4).map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative w-full h-64">
                    <Image
                      src={post.image || '/default-blog.jpg'}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-[#007070] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {post.date}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      {post.summary}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link 
            href="/blog"
            className="inline-block bg-[#007070] hover:bg-[#005F5F] text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  )
}
