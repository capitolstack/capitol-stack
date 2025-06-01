import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function BlogCard({ slug, title, date, author = 'Capitol Stack', excerpt, image }) {
  const imagePath = image?.startsWith('/') ? image : `/images/blog/${image}`;
  const authorName = typeof author === 'string' ? author : author?.name ?? 'Capitol Stack';

  return (
    <motion.div
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <Link href={`/blog/${slug}`} className="block">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={imagePath}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
        <div className="flex flex-col justify-between p-6">
          <h2 className="text-lg font-semibold text-gray-900 group-hover:underline">
            {title}
          </h2>
          <p className="mt-2 text-sm text-gray-600">{excerpt}</p>
          <div className="mt-4 text-xs text-gray-500">
            <span>{authorName}</span> &bull; <span>{date}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
