import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ post }) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <div className="group relative border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition">
        <div className="aspect-video relative w-full h-48">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4 bg-white">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary">
            {post.title}
          </h3>
          <p className="mt-1 text-sm text-gray-600">{post.description}</p>
        </div>
      </div>
    </Link>
  );
}
