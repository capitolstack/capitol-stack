// pages/blog/[slug].js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const postsDirectory = path.join(process.cwd(), 'posts');

export async function getStaticPaths() {
  const filenames = fs.readdirSync(postsDirectory);
  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(/\.mdx$/, '') },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(postsDirectory, `${params.slug}.mdx`);
  const source = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(source);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
    },
    scope: data,
  });

  return {
    props: {
      frontMatter: data,
      mdxSource,
    },
  };
}

export default function PostPage({ frontMatter, mdxSource }) {
  return (
    <>
      <Head>
        <title>{frontMatter.title} | Capitol Stack</title>
        <meta name="description" content={frontMatter.excerpt} />
      </Head>
      <article className="prose dark:prose-invert max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1>{frontMatter.title}</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          {new Date(frontMatter.date).toLocaleDateString()}
        </p>
        <MDXRemote {...mdxSource} />
      </article>
    </>
  );
}
