import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import BlogCard from '@/components/BlogCard'
import Link from 'next/link'
import { useRef, useState } from 'react'

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
    .sort((a, b) => new Date(b.date) - new Date(a.date))

  const featured = posts.find(post => post.featured)
  const nonFeatured = posts.filter(post => !post.featured)
  const carousel = nonFeatured.slice(0, 4)
  const historical = nonFeatured.slice(4)

  return {
    props: {
      featured: featured || null,
      carousel,
      historical
    }
  }
}

export default function Blog({ featured, carousel, historical }) {
  const [index, setIndex] = useState(0)

  const slideLeft = () => {
    setIndex((prev) => Math.max(prev - 1, 0))
  }

  const slideRight = () => {
    setIndex((prev) => Math.min(prev + 1, carousel.length - 1))
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Capitol Stack Blog</h1>

      {featured && (
        <div className="mb-12">
          <BlogCard post={featured} featured />
        </div>
      )}

      <h2 className="text-2xl font-semibold mb-4">Recent Posts</h2>
      <div className="relative flex items-center">
        <button
          onClick={slideLeft}
          className="bg-white border border-gray-300 rounded-full p-2 shadow z-10 hover:bg-gray-100"
          aria-label="Scroll Left"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex-1 px-6">
          <BlogCard post={carousel[index]} />
        </div>

        <button
          onClick={slideRight}
          className="bg-white border border-gray-300 rounded-full p-2 shadow z-10 hover:bg-gray-100"
          aria-label="Scroll Right"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {historical.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold mt-12 mb-4">Historical Posts</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {historical.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </>
      )}
    </main>
  )
}
