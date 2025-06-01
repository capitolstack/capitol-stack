import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import BlogCard from '@/components/BlogCard'
import Link from 'next/link'

export async function getStaticProps() {
  const postsDir = path.join(process.cwd(), 'posts')
  const filenames = fs.readdirSync(postsDir)

  const posts = filenames
    .filter((fn) => fn.endsWith('.mdx'))
    .map((filename) => {
      const filePath = path.join(postsDir, filename)
      const source = fs.readFileSync(filePath, 'utf-8')
      const { data } = matter(source)

      return {
        slug: filename.replace(/\.mdx$/, ''),
        ...data
      }
    })
    // No date filtering — for testing purposes
    .sort((a, b) => new Date(b.date) - new Date(a.date)) // Most recent first

  const featured = posts.find(post => post.featured)
  const rest = posts.filter(post => !post.featured)

  return {
    props: {
      featured: featured || null,
      posts: rest
    }
  }
}

export default function Blog({ featured, posts }) {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Capitol Stack Blog</h1>

      {featured && (
        <div className="mb-12">
          <BlogCard post={featured} featured />
        </div>
      )}

      <h2 className="text-2xl font-semibold mb-4">Recent Posts</h2>
      <div className="flex overflow-x-auto space-x-6 pb-4 snap-x">
        {posts.map((post) => (
          <div key={post.slug} className="min-w-[300px] snap-center">
            <BlogCard post={post} />
          </div>
        ))}
      </div>
    </main>
  )
}
