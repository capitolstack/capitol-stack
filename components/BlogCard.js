import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ title, date, summary, image, slug }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
      {image && (
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2">
          <Link href={`/blog/${slug}`}>
            <span className="hover:underline">{title}</span>
          </Link>
        </h2>
        <p className="text-gray-500 text-sm mb-4">{date}</p>
        <p className="text-gray-700 text-base">{summary}</p>
      </div>
    </div>
  );
}
