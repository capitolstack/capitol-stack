
import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ post }) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Link href={`/blog/${post.slug}`}>
      <a className="block group border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
        <div className="aspect-w-16 aspect-h-9 bg-gray-100">
          <Image
            src={post.image}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            className="group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
        <div className="p-4 bg-white dark:bg-gray-900">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white group-hover:underline">
            {post.title}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{formattedDate}</p>
          <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm line-clamp-3">
            {post.description}
          </p>
        </div>
      </a>
    </Link>
  );
}
