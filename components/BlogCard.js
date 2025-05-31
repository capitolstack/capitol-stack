import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ title, date, summary, image, slug }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden">
      <Link href={`/blog/${slug}`}>
        <div>
          <div className="w-full h-64">
            <Image
              src={image}
              alt={title}
              width={400}
              height={256}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">
              {title}
            </h2>
            <p className="text-gray-500 text-sm mb-4">{date}</p>
            <p className="text-gray-700 text-base">{summary}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
