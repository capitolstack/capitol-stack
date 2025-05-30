import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';

export default function Blog({ featured, posts }) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-12 text-4xl font-bold text-gray-900">Inside Capitol Stack</h1>

      {featured && (
        <Link href={`/posts/${featured.slug}`} className="block mb-16 group">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="aspect-video relative w-full h-64 md:h-full">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="rounded-xl object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 group-hover:text-primary">
                {featured.title}
              </h2>
              <p className="mt-2 text-gray-700">{featured.description}</p>
              {featured.author && (
                <div className="mt-4 flex items-center gap-3">
                  {featured.author.avatar && (
                    <Image
                      src={featured.author.avatar}
                      alt={featured.author.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  )}
                  <div className="text-sm text-gray-600">
                    <p className="font-medium">{featured.author.name}</p>
                    {featured.author.role && <p>{featured.author.role}</p>}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Link>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link key={post.slug} href={`/posts/${post.slug}`}>
            <div className="group relative border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition">
              <div className="aspect-video relative w-full h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600">{post.description}</p>
                {post.author && (
                  <div className="mt-4 flex items-center gap-3">
                    {post.author.avatar && (
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                    )}
                    <div className="text-xs text-gray-600">
                      <p className="font-medium">{post.author.name}</p>
                      {post.author.role && <p>{post.author.role}</p>}
                    </div>
                  </div>
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
    .filter(name => name.endsWith('.mdx'))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      if (data.published === false) return null;

      return {
        slug: filename.replace(/\.mdx$/, ''),
        title: data.title ?? '',
        description: data.description ?? data.summary ?? '',
        image: data.image || null,
        date: data.date || null,
        author: data.author || null,
      };
    })
    .filter(Boolean);

  const featuredSlug = 'inside-capitol-stack';
  const featured = allPosts.find((post) => post.slug === featuredSlug) || null;
  const posts = allPosts
    .filter((post) => post.slug !== featuredSlug)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return {
    props: {
      featured,
      posts,
    },
  };
}
