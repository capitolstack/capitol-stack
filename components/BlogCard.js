import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ post, featured = false }) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  if (featured) {
    return (
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl overflow-hidden transition-shadow duration-300">
        <Link href={`/blog/${post.slug}`}>
          <div className="w-full">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={675}
              className="w-full h-48 sm:h-64 md:h-80 object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
          </div>
        </Link>
        <div className="p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">{post.title}</h2>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-3">{formattedDate}</p>
          <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">{post.description}</p>
          <Link href={`/blog/${post.slug}`}>
            <span className="text-blue-600 dark:text-blue-400 font-medium hover:underline text-sm sm:text-base">Read more →</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg overflow-hidden transition-shadow duration-300">
      <Link href={`/blog/${post.slug}`}>
        <div className="w-full">
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={450}
            className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>
      </Link>
      <div className="p-3 sm:p-4">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">{post.title}</h2>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2">{formattedDate}</p>
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-3 sm:mb-4 line-clamp-3">{post.description}</p>
        <Link href={`/blog/${post.slug}`}>
          <span className="text-blue-600 dark:text-blue-400 font-medium hover:underline text-sm">Read more →</span>
        </Link>
      </div>
    </div>
  );
}
