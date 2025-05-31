// pages/blog/[slug].js

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/Layout';

export default function BlogPost({ frontMatter, mdxSource }) {
  const { title, date, image, description } = frontMatter;

  return (
    <Layout>
      <Head>
        <title>{title} | Capitol Stack Blog</title>
        <meta name="description" content={description} />
        {image && <meta property="og:image" content={`/images/${image}`} />}
      </Head>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-sm text-gray-500 mb-6">{date}</p>

        {image && (
          <div className="w-full mb-6 rounded-lg overflow-hidden">
            <Image
              src={`/images/${image}`}
              alt={title}
              width={1200}
              height={630}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none">
          <MDXRemote {...mdxSource} />
        </div>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files
    .filter((filename) => filename.endsWith('.mdx')) // Only MDX posts
    .map((filename) => ({
      params: { slug: filename.replace('.mdx', '') },
    }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.mdx'),
    'utf-8'
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      mdxSource,
    },
  };
}
