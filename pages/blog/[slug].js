// pages/blog/[slug].js

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

export default function BlogPost({ source, frontMatter }) {
  return (
    <div className="prose mx-auto px-4 py-12 max-w-3xl">
      <h1>{frontMatter.title}</h1>
      <MDXRemote {...source} />
    </div>
  );
}

export async function getStaticPaths() {
  const postsDir = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDir).filter((file) => file.endsWith('.mdx'));

  const paths = filenames.map((filename) => ({
    params: {
      slug: filename.replace(/\.mdx$/, ''),
    },
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
