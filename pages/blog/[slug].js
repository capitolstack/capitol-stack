// pages/blog/[slug].js

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import Head from 'next/head';

export default function PostPage({ frontmatter, mdxSource }) {
  const { title, date, excerpt, image } = frontmatter;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Head>
        <title>{title} | Capitol Stack</title>
        <meta name="description" content={excerpt} />
      </Head>

      {image && (
        <div className="relative w-full h-64 md:h-96 mb-6">
          <Image
            src={`/images/${image}`}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover rounded-2xl"
            priority
          />
        </div>
      )}

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">{title}</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
        {new Date(date).toLocaleDateString(undefined, {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })}
      </p>

      <article className="prose dark:prose-invert max-w-none">
        <MDXRemote {...mdxSource} />
      </article>
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));
  const paths = files.map((filename) => ({
    params: { slug: filename.replace('.mdx', '') },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(path.join('posts', `${slug}.mdx`), 'utf-8');
  const { data: frontmatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontmatter,
      mdxSource,
    },
  };
}
