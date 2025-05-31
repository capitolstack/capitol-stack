import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

export default function BlogSection({ posts }) {
  const displayPosts = posts?.slice(0, 6) || [];

  if (!displayPosts.length) {
    return null;
  }

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Latest insights
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Learn about the latest developments in climate tech and venture capital.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {displayPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                {/* Image - Stripe's 16:10 ratio */}
                <div className="relative mb-6 overflow-hidden rounded-lg bg-gray-100">
                  <div className="aspect-[16/10] w-full">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading={index < 3 ? 'eager' : 'lazy'}
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gray-100">
                        <svg
                          className="h-12 w-12 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <time className="text-sm font-medium text-gray-500">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>

                  <h3 className="text-xl font-semibold leading-tight text-gray-900 group-hover:text-[#007070] transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-base leading-relaxed text-gray-600 line-clamp-2">
                    {post.summary || post.description}
                  </p>

                  {/* Author */}
                  {post.author && (
                    <div className="flex items-center space-x-3 pt-2">
                      {post.author.avatar ? (
                        <img
                          className="h-8 w-8 rounded-full"
                          src={post.author.avatar}
                          alt={post.author.name}
                        />
                      ) : (
                        <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-xs font-medium text-gray-600">
                            {post.author.name.charAt(0)}
                          </span>
                        </div>
                      )}
                      <div className="text-sm">
                        <p className="font-medium text-gray-900">{post.author.name}</p>
                        {post.author.role && (
                          <p className="text-gray-500">{post.author.role}</p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* View all link */}
        <div className="mt-16 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center rounded-full bg-[#007070] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#005f5f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#007070] transition-colors"
          >
            View all articles
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
