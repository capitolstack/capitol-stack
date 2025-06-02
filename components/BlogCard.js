import Link from 'next/link'

export default function BlogCard({ post, featured = false }) {
  const containerClasses = featured
    ? "md:flex shadow-lg rounded-xl overflow-hidden bg-white"
    : "rounded-lg shadow-md bg-white transition hover:shadow-xl"

  const imageWrapperClasses = featured ? "md:w-1/2" : ""
  const textWrapperClasses = featured ? "md:w-1/2 p-6 flex flex-col justify-center" : "p-4"
  const titleClasses = featured ? "text-3xl font-bold text-gray-900 mb-2" : "text-xl font-bold text-gray-900 mb-2"

  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString('en-US', {\n      timeZone: 'UTC',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : ''

  return (
    <Link href={`/blog/${post.slug}`}>
      <div className={containerClasses}>
        <div className={imageWrapperClasses}>
          <img
            src={`/images/${post.cover}`}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className={textWrapperClasses}>
          <h2 className={titleClasses}>
            {post.title}
          </h2>
          <p className="text-gray-600 mb-2">{post.excerpt || ''}</p>
          <div className="text-sm text-gray-500">
            {formattedDate}
          </div>
        </div>
      </div>
    </Link>
  )
}
