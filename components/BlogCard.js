// components/BlogCard.js
import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ slug, title, date, author, excerpt, image }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl shadow-md transition hover:shadow-lg bg-white">
      {image && (
        <div className="relative w-full aspect-[16/9]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-t-2xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
      )}
      <div className="flex flex-col justify-between flex-1 p-6">
        <div>
          <h2 className="text-xl font-semibold leading-snug tracking-tight text-gray-900">
            <Link href={`/blog/${slug}`}>
              <span className="hover:underline">{title}</span>
            </Link>
          </h2>
          <p className="mt-2 text-gray-600 text-sm">{excerpt}</p>
        </div>
        <div className="mt-4 text-sm text-gray-500">
          <p>By {author || 'Capitol Stack'}</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
}
