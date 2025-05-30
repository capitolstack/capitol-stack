// /pages/blog/[slug].js

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import Image from 'next/image';

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(/\.mdx?$/, '') },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'posts', `${params.slug}.mdx`);
  const source = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(source);
  const mdxSource = await serialize(content);

  return {
    props: {
      source: mdxSource,
      frontMatter: {
        ...data,
        author: typeof data.author === 'string' ? data.author : 'Unknown',
      },
    },
  };
}

export default function BlogPost({ source, frontMatter }) {
  const avatarFileName =
    frontMatter.author && typeof frontMatter.author === 'string'
      ? `/images/authors/${frontMatter.author.toLowerCase().replace(/\s+/g, '-')}.jpg`
      : '/images/authors/default.jpg';

  return (
    <>
      <Head>
        <title>{frontMatter.title} | Capitol Stack</title>
        <meta name="description" content={frontMatter.summary || ''} />
      </Head>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-2">{frontMatter.title}</h1>
        <div className="flex items-center mb-8 space-x-3">
          <Image
            src={avatarFileName}
            alt={frontMatter.author || 'Author'}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="text-sm text-gray-600">
            <p className="font-semibold">{frontMatter.author || 'Unknown'}</p>
            <p>{frontMatter.date}</p>
          </div>
        </div>

        <article className="prose prose-lg prose-gray max-w-none">
          <MDXRemote {...source} />
        </article>
      </div>
    </>
  );
}
