import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import BlogCard from '@/components/BlogCard'
import Layout from '@/components/Layout'
import { useState } from 'react'

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
    .filter(post => {
      const now = new Date()
      const postDate = new Date(post.date)
      return postDate <= now && post.hide !== true
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))

  const featured = posts.find(post => post.slug === 'inside-capitol-stack')
  const nonFeatured = posts.filter(post => post.slug !== 'inside-capitol-stack')

  return {
    props: {
      featured: featured || null,
      posts: nonFeatured
    },
    revalidate: 60
  }
}

export default function Blog({ featured, posts }) {
  const visibleCount = Math.min(3, posts.length)
  const [index, setIndex] = useState(0)

  const slideLeft = () => {
    setIndex((prev) => (prev - 1 + posts.length) % posts.length)
  }

  const slideRight = () => {
    setIndex((prev) => (prev + 1) % posts.length)
  }

  const visiblePosts = posts.length > 3
    ? Array.from({ length: visibleCount }).map((_, i) => {
        const postIndex = (index + i) % posts.length
        return posts[postIndex]
      })
    : posts

  return (
    <Layout title="Capitol Stack Blog">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-white">Capitol Stack Blog</h1>

        {featured && (
          <div className="mb-8 sm:mb-12">
            <BlogCard post={featured} featured />
          </div>
        )}

        {posts.length > 1 && (
          <>
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900 dark:text-white">More from the Blog</h2>
            <div className="relative flex items-center mb-8">
              {posts.length > 3 && (
                <button
                  onClick={slideLeft}
                  className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full p-2 shadow z-10 hover:bg-gray-100 dark:hover:bg-gray-700 mr-2 flex-shrink-0"
                  aria-label="Scroll Left"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}

              <div className="flex gap-4 overflow-x-auto px-2 w-full scrollbar-hide">
                {visiblePosts.map((post) => (
                  <div key={post.slug} className="flex-none w-full sm:w-80 md:w-96">
                    <BlogCard post={post} />
                  </div>
                ))}
              </div>

              {posts.length > 3 && (
                <button
                  onClick={slideRight}
                  className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full p-2 shadow z-10 hover:bg-gray-100 dark:hover:bg-gray-700 ml-2 flex-shrink-0"
                  aria-label="Scroll Right"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>
          </>
        )}

        {posts.length > 0 && (
          <>
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 sm:mt-12 mb-4 text-gray-900 dark:text-white">All Posts</h2>
            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </>
        )}
      </div>
    </Layout>
  )
}
