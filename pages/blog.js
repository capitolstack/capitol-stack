import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';

export default function Blog({ posts }) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold text-gray-900">Inside Capitol Stack</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link key={post.slug} href={`/posts/${post.slug}`} className="group">
            <div className="relative flex flex-col rounded-xl border border-gray-200 bg-white p-6 transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl">
              {post.image && (
                <div className="relative mb-4 h-48 w-full overflow-hidden rounded-md">
                  <Image
                    src={post.image}
                    alt={`Image for ${post.title}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="text-sm text-gray-500">
                {post.date} &bull; {post.author}
              </div>
              <h2 className="mt-1 text-xl font-semibold text-gray-900 group-hover:text-primary">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-gray-600">{post.description}</p>
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
        date: data.date || '',
        author: data.author || 'Capitol Stack',
      };
    })
    .filter(Boolean);

  return {
    props: {
      posts,
    },
  };
}
