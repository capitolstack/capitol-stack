import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ title, date, summary, image, slug }) {
  return (
    <article className="group cursor-pointer">
      <Link href={`/blog/${slug}`} className="block">
        {/* Image Container - Stripe-style aspect ratio */}
        <div className="relative mb-6 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
          <div className="aspect-[16/10]">
            {image ? (
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="mt-2 text-sm text-gray-500">Image</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Content - Stripe-style typography */}
        <div className="space-y-3">
          {/* Date */}
          <time className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>

          {/* Title */}
          <h3 className="text-xl font-semibold leading-tight text-gray-900 dark:text-white group-hover:text-[#007070] transition-colors duration-200">
            {title}
          </h3>

          {/* Summary */}
          <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300 line-clamp-2">
            {summary}
          </p>

          {/* Read more link - Stripe style */}
          <div className="pt-2">
            <span className="inline-flex items-center text-sm font-medium text-[#007070] group-hover:text-[#005f5f] transition-colors">
              Read article
              <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
