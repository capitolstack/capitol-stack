import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';

export default function BlogPost({ source, frontMatter }) {
  return (
    <article className="prose mx-auto px-4 py-12">
      <h1>{frontMatter.title}</h1>
      <p className="text-gray-500">{frontMatter.description}</p>
      {frontMatter.image && (
        <div className="relative w-full h-64 mb-8">
          <Image
            src={frontMatter.image}
            alt={frontMatter.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}
      <MDXRemote {...source} />
    </article>
  );
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory).filter(name => name.endsWith('.mdx'));

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
