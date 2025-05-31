import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

export default function Blog({ posts }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12">Inside Capitol Stack</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
              <img 
                src={post.image || '/default-blog.jpg'} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 text-sm">{post.description}</p>
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
  
  const posts = filenames.map((filename) => {
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
  
  return { props: { posts } }
}
