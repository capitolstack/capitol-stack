import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function BlogCard({ title, date, summary, image, slug }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <article className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-800 group">
      <Link href={`/blog/${slug}`}>
        <div className="cursor-pointer">
          {/* FIXED: Image Container - No more truncation */}
          <div className="relative w-full h-48 sm:h-56 md:h-64 bg-gray-100 dark:bg-gray-800 overflow-hidden">
            {!imageError && image ? (
              <Image
                src={image}
                alt={title}
                fill
                className={`transition-all duration-300 group-hover:scale-105 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
                onLoad={() => setImageLoaded(true)}
                onError={() => {
                  setImageError(true);
                  setImageLoaded(true);
                }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={false}
              />
            ) : (
              /* Fallback when no image or error */
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700">
                <div className="text-center text-gray-500 dark:text-gray-400">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm font-medium">Article</p>
                </div>
              </div>
            )}
            
            {/* Loading skeleton */}
            {!imageLoaded && !imageError && image && (
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
            )}
          </div>

          {/* Content - Fixed padding and spacing */}
          <div className="p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-[#007070] transition-colors leading-tight">
              <span className="line-clamp-2">{title}</span>
            </h2>
            
            <time className="text-gray-500 dark:text-gray-400 text-sm mb-4 block font-medium">
              {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long', 
                day: 'numeric'
              })}
            </time>
            
            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
              <span className="line-clamp-3">{summary}</span>
            </p>
            
            {/* Read more indicator */}
            <div className="flex items-center text-[#007070] font-medium text-sm group-hover:translate-x-1 transition-transform">
              Read article
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
