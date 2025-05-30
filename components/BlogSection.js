
import Link from 'next/link';
import { allPosts } from '../lib/posts';

export default function BlogSection() {
  const posts = allPosts
    .filter(post => post.published !== false && new Date(post.date) <= new Date())
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <a className="block p-4 border rounded-lg hover:shadow-md transition">
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="text-sm text-gray-500">{new Date(post.date).toDateString()}</p>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
