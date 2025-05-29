import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import BlogCard from '@/components/BlogCard';

export default function Blog({ posts }) {
  return (
    <div className="px-6 py-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-10">Capitol Stack Blog</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const postsDir = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDir);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDir, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return {
      ...data,
      slug: filename.replace('.mdx', ''),
    };
  });

  return {
    props: {
      posts,
    },
  };
}
