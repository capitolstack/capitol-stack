import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';

export default function Blog({ featuredPost, posts }) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold text-gray-900">Inside Capitol Stack</h1>

      {/* Featured Article */}
      {featuredPost && (
        <Link href={`/blog/${featuredPost.slug}`} className="block mb-12">
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 rounded-xl overflow-hidden border border-gray-200 bg-white hover:shadow-lg transition-all duration-300">
            <div className="relative w-full h-64 md:h-auto">
              <Image
                src={featuredPost.image}
                alt="Featured Post"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900">{featuredPost.title}</h2>
              <p className="mt-2 text-gray-700 text-sm">{featuredPost.description}</p>
              <div className="mt-4 flex items-center gap-2">
                {featuredPost.author && (
                  <>
                    <Image
                      src={`/images/authors/${featuredPost.author.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                      alt={featuredPost.author}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <span className="text-sm text-gray-500">
                      {featuredPost.author} · {format(new Date(featuredPost.date), 'MMMM d, yyyy')}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        </Link>
      )}

      {/* Remaining Posts */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="group relative rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
              <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
                <Image
                  src={post.image}
                  alt="Post image"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-gray-600">{post.description}</p>
              <div className="mt-4 flex items-center gap-2">
                {post.author && (
                  <>
                    <Image
                      src={`/images/authors/${post.author.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                      alt={post.author}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span className="text-xs text-gray-500">
                      {post.author} · {format(new Date(post.date), 'MMM d, yyyy')}
                    </span>
                  </>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const allPosts = filenames
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      if (data.published === false) return null;

      return {
        slug: filename.replace(/\.mdx?$/, ''),
        title: data.title,
        description: data.description ?? data.summary ?? '',
        image: data.image || null,
        date: data.date,
        author: data.author,
      };
    })
    .filter(Boolean);

  const featuredPost = allPosts.find((post) => post.slug === 'inside-capitol-stack');
  const remainingPosts = allPosts
    .filter((post) => post.slug !== 'inside-capitol-stack')
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return {
    props: {
      featuredPost,
      posts: remainingPosts,
    },
  };
}
