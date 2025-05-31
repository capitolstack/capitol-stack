// pages/blog/index.js
import Head from 'next/head';
import Link from 'next/link';
import { getAllPosts } from '../../lib/posts';
import BlogCard from '../../components/BlogCard';

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: { posts },
  };
}

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Blog | Capitol Stack</title>
        <meta name="description" content="Insights, stories, and updates from the Capitol Stack team." />
      </Head>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">From the Stack</h1>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}
