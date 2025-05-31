// pages/blog/[slug].js

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import Image from 'next/image';

export default function PostPage({ source, frontMatter }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Head>
        <title>{frontMatter.title} | Capitol Stack</title>
        <meta name="description" content={frontMatter.description || frontMatter.summary || ''} />
      </Head>

      <article className="prose prose-lg dark:prose-invert">
        <h1>{frontMatter.title}</h1>
        {frontMatter.date && (
          <p className="text-gray-500">{new Date(frontMatter.date).toLocaleDateString()}</p>
        )}

        {frontMatter.image && (
          <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden">
            <Image
              src={frontMatter.image}
              alt={frontMatter.title}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
              priority
            />
          </div>
        )}

        <MDXRemote {...source} />

        {frontMatter.author?.name && (
          <div className="mt-8 flex items-center gap-4">
            {frontMatter.author.avatar && (
              <Image
                src={frontMatter.author.avatar}
                alt={frontMatter.author.name}
                width={48}
                height={48}
                className="rounded-full"
              />
            )}
            <div>
              <p className="font-semibold">{frontMatter.author.name}</p>
              {frontMatter.author.role && (
                <p className="text-sm text-gray-500">{frontMatter.author.role}</p>
              )}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames
    .filter((filename) => filename.endsWith('.mdx'))
    .map((filename) => ({
      params: { slug: filename.replace(/\.mdx$/, '') },
    }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postPath = path.join(process.cwd(), 'posts', `${params.slug}.mdx`);
  const source = fs.readFileSync(postPath, 'utf8');
  const { content, data } = matter(source);
  const mdxSource = await serialize(content);

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
}
