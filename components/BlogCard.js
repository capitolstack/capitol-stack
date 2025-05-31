import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ post }) {
  const { title, excerpt, date, slug, image } = post;

  return (
    <Link href={`/blog/${slug}`} className="group block rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-xl transition-shadow bg-white dark:bg-gray-900">
      {image && (
        <div className="relative w-full h-48 mb-4 rounded overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            priority
          />
        </div>
      )}
      <div className="mb-2">
        <time className="text-sm text-gray-500 dark:text-gray-400">{new Date(date).toLocaleDateString()}</time>
      </div>
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors mb-2">
        {title}
      </h2>
      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">{excerpt}</p>
    </Link>
  );
}
