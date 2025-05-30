import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import Image from 'next/image';
import { format } from 'date-fns';

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
        slug: params.slug,
      },
    },
  };
}

export default function BlogPost({ source, frontMatter }) {
  const formattedDate = format(new Date(frontMatter.date), 'MMMM d, yyyy');

  return (
    <>
      <Head>
        <title>{frontMatter.title} | Capitol Stack</title>
        <meta name="description" content={frontMatter.summary || ''} />
      </Head>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-4">{frontMatter.title}</h1>

        <div className="flex items-center mb-8 space-x-4">
          <Image
            src={`/images/authors/${frontMatter.author?.toLowerCase().replace(/\s+/g, '-')}.jpg`}
            alt={frontMatter.author}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="text-sm font-medium text-gray-700">{frontMatter.author}</p>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>

        <article className="prose prose-lg prose-gray max-w-none">
          <MDXRemote {...source} />
        </article>
      </div>
    </>
  );
}
