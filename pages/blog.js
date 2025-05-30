import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';

export default function Blog({ posts }) {
  if (!posts.length) {
    return <p className="p-12 text-center text-gray-600">No blog posts available.</p>;
  }

  const [featured, ...others] = posts;

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="mb-12 text-4xl font-bold text-gray-900">Inside Capitol Stack</h1>

      {/* Featured Article */}
      <Link href={`/posts/${featured.slug}`} className="group block mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {featured.image && (
            <div className="relative w-full h-72 lg:h-96 rounded-lg overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          )}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 group-hover:text-primary transition-colors">
              {featured.title}
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              {formatDate(featured.date)} · {featured.author || 'Capitol Stack'}
            </p>
            <p className="mt-4 text-gray-700 text-lg max-w-xl">
              {featured.description}
            </p>
          </div>
        </div>
      </Link>

      {/* Remaining Posts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {others.map((post) => (
          <Link key={post.slug} href={`/posts/${post.slug}`} className="group block">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-lg">
              {post.image && (
                <div className="mb-4 aspect-video relative rounded-md overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{post.description}</p>
              <p className="mt-3 text-xs text-gray-500">
                {formatDate(post.date)} · {post.author || 'Capitol Stack'}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Format date to readable form
function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames
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
        date: data.date || null,
        author: data.author || null,
      };
    })
    .filter(Boolean)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return {
    props: {
      posts,
    },
  };
}
