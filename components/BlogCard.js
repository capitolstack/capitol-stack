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
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition hover:shadow-lg">
      <Link href={`/blog/${post.slug}`}>
        <div className="relative w-full h-48">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
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
