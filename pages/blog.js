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
          <Link key={post.slug} href={`/posts/${post.slug}`}>
            <div className="group relative rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
              {post.image && (
                <Image
                  src={post.image}
                  alt="Post image"
                  width={500}
                  height={300}
                  className="mb-4 rounded-md"
                />
              )}
              <h2 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-600">
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

      // Skip unpublished posts
      if (data.published === false) return null;

      return {
        slug: filename.replace(/\.mdx?$/, ''),
        title: data.title,
        description: data.description ?? data.summary ?? '',
        image: data.image || null,
      };
    })
    .filter(Boolean); // remove nulls

  return {
    props: {
      posts,
    },
  };
}
