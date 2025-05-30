import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';

export default function Blog({ posts }) {
  if (!posts || posts.length === 0) return <p>No posts found.</p>;

  const [featured, ...rest] = posts;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="mb-10 text-4xl font-bold text-gray-900">Inside Capitol Stack</h1>

      {/* Featured Article */}
      <Link href={`/posts/${featured.slug}`}>
        <div className="group mb-16 flex flex-col lg:flex-row items-start gap-8 rounded-xl border border-gray-200 bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="relative w-full lg:w-1/2 h-auto overflow-hidden rounded-lg">
            {featured.image && (
              <Image
                src={featured.image}
                alt={`Cover for ${featured.title}`}
                width={800}
                height={450}
                className="w-full h-auto rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
            )}
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-indigo-600 mb-2">
              {featured.title}
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              {format(new Date(featured.date), 'MMMM d, yyyy')}
              {featured.author && ` • by ${featured.author}`}
            </p>
            <p className="text-gray-700 text-base">{featured.description}</p>
          </div>
        </div>
      </Link>

      {/* Remaining Articles */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((post) => (
          <Link key={post.slug} href={`/posts/${post.slug}`}>
            <div className="group relative rounded-xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
              <div className="relative mb-4 w-full overflow-hidden rounded-md">
                {post.image && (
                  <Image
                    src={post.image}
                    alt={`Cover for ${post.title}`}
                    width={500}
                    height={300}
                    className="w-full h-auto rounded-md transition-transform duration-300 group-hover:scale-105"
                  />
                )}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {format(new Date(post.date), 'MMMM d, yyyy')}
                {post.author && ` • by ${post.author}`}
              </p>
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
        date: data.date || null,
        author: data.author || null,
      };
    })
    .filter(Boolean)
    .sort((a, b) => new Date(b.date) - new Date(a.date)); // sort newest first

  return {
    props: {
      posts,
    },
  };
}
