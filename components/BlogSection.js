import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function BlogSection({ posts }) {
  const displayPosts = posts?.slice(0, 6) || [];

  if (!displayPosts.length) return null;

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
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-10 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {displayPosts.map((post, index) => {
            const imagePath = post.image?.startsWith('/') ? post.image : `/images/blog/${post.image}`;
            return (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative w-full">
                    <Image
                      src={imagePath}
                      alt={post.title}
                      width={1600}
                      height={900}
                      className="object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                    />
                  </div>
                  <div className="flex flex-col justify-between p-6">
                    <div>
                      <time dateTime={post.date} className="block text-sm text-gray-500 mb-2">
                        {post.date}
                      </time>
                      <h2 className="text-lg font-semibold text-gray-900 group-hover:underline">
                        {post.title}
                      </h2>
                      <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                    {post.author && (
                      <div className="mt-4 flex items-center gap-3 text-xs text-gray-500">
                        {typeof post.author === 'object' && post.author.avatar && (
                          <Image
                            src={post.author.avatar}
                            alt={post.author.name}
                            width={24}
                            height={24}
                            className="rounded-full object-cover"
                          />
                        )}
                        <div className="leading-tight">
                          <span className="font-medium">
                            {typeof post.author === 'string'
                              ? post.author
                              : post.author?.name ?? 'Capitol Stack'}
                          </span>
                          {post.author?.role && (
                            <div className="text-gray-400 text-[0.7rem]">{post.author.role}</div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
