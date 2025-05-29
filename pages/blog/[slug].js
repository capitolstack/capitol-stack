import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';

// Load all post slugs
export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(/\.mdx?$/, '') },
  }));

  return { paths, fallback: false };
}

// Load post content by slug
export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'posts', `${params.slug}.mdx`);
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

// Render post page
export default function BlogPost({ source, frontMatter }) {
  return (
    <>
      <Head>
        <title>{frontMatter.title} | Capitol Stack</title>
        <meta name="description" content={frontMatter.summary || ''} />
      </Head>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">{frontMatter.title}</h1>
        <p className="text-gray-500 text-sm mb-8">{frontMatter.date}</p>

        {/* Apply Tailwind Typography styles */}
        <article className="prose prose-lg prose-gray max-w-none">
          <MDXRemote {...source} />
        </article>
      </div>
    </>
  );
}
