// components/BlogCard.js
import Link from 'next/link';

export default function BlogCard({ post }) {
  const { title, excerpt, date, slug } = post;
  return (
    <Link href={`/blog/${slug}`} className="group block rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-xl transition-shadow bg-white dark:bg-gray-900">
      <div className="mb-4">
        <time className="text-sm text-gray-500 dark:text-gray-400">{new Date(date).toLocaleDateString()}</time>
      </div>
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors mb-2">
        {title}
      </h2>
      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">{excerpt}</p>
    </Link>
  );
}
