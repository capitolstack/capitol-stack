import Link from 'next/link'
import Image from 'next/image'

export default function BlogCard({ post, featured = false }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div
        className={\`\${featured ? "md:flex shadow-lg rounded-xl overflow-hidden bg-white" : "rounded-lg shadow-md bg-white transition hover:shadow-xl"}\`}
      >
        <div className={\`\${featured ? "md:w-1/2" : ""}\`}>
          <Image
            src={`/images/\${post.cover}`}
            alt={post.title}
            width={featured ? 1200 : 600}
            height={featured ? 675 : 338}
            className="w-full h-full object-cover"
          />
        </div>

        <div className={\`\${featured ? "md:w-1/2 p-6 flex flex-col justify-center" : "p-4"}\`}>
          <h2 className={\`\${featured ? "text-3xl" : "text-xl"} font-bold text-gray-900 mb-2\`}>
            {post.title}
          </h2>
          <p className="text-gray-600 mb-2">{post.excerpt || ''}</p>
          <div className="text-sm text-gray-500">
            {post.date && new Date(post.date).toLocaleDateString()}
          </div>
        </div>
      </div>
    </Link>
  )
}
