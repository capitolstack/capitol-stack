import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ slug, title, date, author = 'Capitol Stack', excerpt, image }) {
  const imagePath = image?.startsWith('/') ? image : `/blog/${image}`;
  const authorName = typeof author === 'string' ? author : author?.name ?? 'Capitol Stack';
  const authorAvatar = typeof author === 'object' ? author?.avatar : null;
  const authorRole = typeof author === 'object' ? author?.role : null;

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl shadow hover:shadow-md transition bg-white">
      {image && (
        <Link href={`/blog/${slug}`} passHref>
          <div className="relative w-full aspect-[16/9]">
            <Image
              src={imagePath}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
        </Link>
      )}
      <div className="flex flex-col justify-between flex-1 p-4 sm:p-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            <Link href={`/blog/${slug}`}>
              <span className="hover:underline">{title}</span>
            </Link>
          </h2>
          <p className="mt-2 text-sm text-gray-600">{excerpt}</p>
        </div>
        <div className="mt-4 flex items-center gap-3 text-xs text-gray-500">
          {authorAvatar && (
            <Image
              src={authorAvatar}
              alt={authorName}
              width={24}
              height={24}
              className="rounded-full object-cover"
            />
          )}
          <div className="flex flex-col leading-tight">
            <span className="font-medium">{authorName}</span>
            {authorRole && <span className="text-[0.7rem] text-gray-400">{authorRole}</span>}
          </div>
          <span className="ml-auto">{date}</span>
        </div>
      </div>
    </div>
  );
}
