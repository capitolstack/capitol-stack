import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Image from 'next/image'

export default function Blog({ featured, posts }) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-12 text-4xl font-bold text-gray-900">Inside Capitol Stack</h1>
      
      {featured && (
        <Link href={`/blog/${featured.slug}`} className="block mb-16 group">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative w-full h-64 bg-gray-100 rounded-xl overflow-hidden">
              <Image
                src={featured.image || '/default-blog.jpg'}
                alt={featured.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600">
                {featured.title}
              </h2>
              <p className="mt-2 text-gray-700">{featured.description}</p>
            </div>
          </div>
        </Link>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="group relative border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition bg-white">
              <div className="relative w-full h-48 bg-gray-100">
                <Image
                  src={post.image || '/default-blog.jpg'}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{post.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const filenames = fs.readdirSync(postsDirectory)
  
  const allPosts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)
    
    if (data.published === false) return null
    
    return {
      slug: data.slug || filename.replace(/\.mdx?$/, ''),
      title: data.title || '',
      description: data.description || data.summary || '',
      image: data.image || null,
      date: data.date || null
    }
  }).filter(Boolean)
  
  const featuredSlug = 'inside-capitol-stack'
  const featured = allPosts.find((post) => post.slug === featuredSlug) || null
  const posts = allPosts
    .filter((post) => post.slug !== featuredSlug)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
  
  return {
    props: {
      featured,
      posts
    }
  }
}
