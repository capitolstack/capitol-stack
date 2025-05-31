import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ title, date, summary, image, slug }) {
  return (
    <article className="group">
      <Link href={`/blog/${slug}`} className="block">
        {/* Image Container - Stripe uses 16:10 ratio */}
        <div className="relative mb-6 overflow-hidden rounded-lg bg-gray-100">
          <div className="aspect-[16/10] w-full">
            {image ? (
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
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

        {/* Content - Stripe typography */}
        <div className="space-y-3">
          <time className="text-sm font-medium text-gray-500">
            {new Date(date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>

          <h3 className="text-xl font-semibold leading-tight text-gray-900 group-hover:text-[#007070] transition-colors">
            {title}
          </h3>

          <p className="text-base leading-relaxed text-gray-600 line-clamp-2">
            {summary}
          </p>
        </div>
      </Link>
    </article>
  );
}
