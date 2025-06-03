
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
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <Link href={`/blog/${post.slug}`}>
        <div className="aspect-w-16 aspect-h-9 bg-gray-100">
          <Image
            src={post.image}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </Link>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{post.title}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{formattedDate}</p>
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{post.description}</p>
        <Link href={`/blog/${post.slug}`}>
          <span className="text-blue-600 dark:text-blue-400 font-medium hover:underline">Read more →</span>
        </Link>
      </div>
    </div>
  );
}
