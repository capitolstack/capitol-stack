// pages/blog/[slug].js

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function PostPage({ source, frontMatter }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading…</div>;
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Head>
        <title>{frontMatter.title} | Capitol Stack</title>
        <meta name="description" content={frontMatter.description || frontMatter.summary} />
      </Head>

      <article className="prose prose-lg dark:prose-invert">
        <h1>{frontMatter.title}</h1>
        <p className="text-gray-500">{new Date(frontMatter.date).toLocaleDateString()}</p>

        {frontMatter.image && (
          <Image
            src={frontMatter.image}
            alt={frontMatter.title}
            width={800}
            height={400}
            className="rounded-lg"
          />
        )}

        <MDXRemote {...source} />
      </article>
    </div>
  );
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith('.mdx'));

  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(/\.mdx$/, '') },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'posts', `${params.slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return { notFound: true };
  }

  const source = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(source);
  const mdxSource = await serialize(content);

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
}
