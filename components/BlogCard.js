// components/BlogCard.js

import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ post }) {
  const { title, excerpt, date, slug, image } = post;

  return (
    <Link
      href={`/blog/${slug}`}
      className="group block overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow bg-white dark:bg-gray-900"
    >
      {image && (
        <div className="relative w-full h-52 md:h-64">
          <Image
            src={`/images/${image}`}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-t-2xl"
            priority
          />
        </div>
      )}
      <div className="p-6">
        <time className="block text-sm text-gray-500 dark:text-gray-400 mb-1">
          {new Date(date).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </time>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors mb-2">
          {title}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
          {excerpt}
        </p>
      </div>
    </Link>
  );
}
