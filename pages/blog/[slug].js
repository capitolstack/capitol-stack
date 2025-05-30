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
      frontMatter: data,
    },
  };
}

export default function BlogPost({ source, frontMatter }) {
  const { title, summary, date, image, author } = frontMatter;

  return (
    <>
      <Head>
        <title>{title} | Capitol Stack</title>
        <meta name="description" content={summary || ''} />
      </Head>

      <div className="max-w-3xl mx-auto px-4 py-12">
        {image && (
          <Image
            src={image}
            alt={title}
            width={1200}
            height={600}
            className="mb-8 rounded-lg object-cover w-full h-auto"
            priority
          />
        )}

        <h1 className="text-4xl font-bold mb-4 text-gray-900">{title}</h1>

        <div className="flex items-center gap-4 mb-10 text-sm text-gray-600">
          {author?.avatar && (
            <Image
              src={author.avatar}
              alt={author.name}
              width={40}
              height={40}
              className="rounded-full"
            />
          )}
          <div>
            <div className="font-semibold">{author?.name}</div>
            <div className="text-xs">{author?.role} • {format(new Date(date), 'MMMM d, yyyy')}</div>
          </div>
        </div>

        <article className="prose prose-lg prose-slate max-w-none">
          <MDXRemote {...source} />
        </article>
      </div>
    </>
  );
}
