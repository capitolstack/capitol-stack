import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import BlogCard from '@/components/BlogCard'
import { useState } from 'react'

export async function getStaticProps() {
  const postsDir = path.join(process.cwd(), 'posts')
  const filenames = fs.readdirSync(postsDir)

  const now = new Date()

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
      const postDate = new Date(post.date)
      return postDate <= now && post.slug !== 'example-hidden-post'
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))

  const featured = posts.find(post => post.slug === 'inside-capitol-stack')
  const nonFeatured = posts.filter(post => post.slug !== 'inside-capitol-stack')

  return {
    props: {
      featured: featured || null,
      posts: nonFeatured
    },
    revalidate: 60, // ISR revalidation every 60 seconds
  }
}

export default function Blog({ featured, posts }) {
  const visibleCount = 3
  const [index, setIndex] = useState(0)

  const slideLeft = () => {
    setIndex((prev) => (prev - 1 + posts.length) % posts.length)
  }

  const slideRight = () => {
    setIndex((prev) => (prev + 1) % posts.length)
  }

  const visiblePosts = posts.length > 0
    ? Array.from({ length: Math.min(visibleCount, posts.length) }).map((_, i) => {
        const postIndex = (index + i) % posts.length
        return posts[postIndex]
      })
    : []

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">Capitol Stack Blog</h1>

      {featured && (
        <div className="mb-12">
          <BlogCard post={featured} featured />
