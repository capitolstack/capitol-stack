import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';

export default function PostPage({ frontMatter, content }) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 prose prose-lg dark:prose-invert">
      <h1>{frontMatter.title}</h1>
      {frontMatter.author?.name && (
        <div className="mt-4 flex items-center gap-3">
          {frontMatter.author.avatar && (
            <Image
              src={frontMatter.author.avatar}
              alt={frontMatter.author.name}
              width={40}
              height={40}
              className="rounded-full"
            />
          )}
          <div className="text-sm text-gray-600">
            <p className="font-medium">{frontMatter.author.name}</p>
            {frontMatter.author.role && <p>{frontMatter.author.role}</p>}
          </div>
        </div>
      )}
      {frontMatter.image && (
        <Image
          src={frontMatter.image}
          alt={frontMatter.title}
          width={800}
          height={400}
          className="rounded-xl mt-8 mb-4"
        />
      )}
      <MDXRemote {...content} />
    </article>
  );
}

export async function getStaticPaths() {
  const postsDir = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDir);
  const paths = filenames.map((filename) => {
    const filePath = path.join(postsDir, filename);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(raw);
    return {
      params: {
        slug: data.slug || filename.replace(/\.mdx?$/, ''),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postPath = path.join(process.cwd(), 'posts', `${params.slug}.mdx`);
  const raw = fs.readFileSync(postPath, 'utf-8');
  const { data, content } = matter(raw);

  const serializedContent = await serialize(content);

  return {
    props: {
      frontMatter: {
        title: data.title || '',
        slug: data.slug || params.slug,
        description: data.description || data.summary || '',
        image: data.image || null,
        date: data.date || null,
        author: typeof data.author === 'string' ? { name: data.author } : data.author || null,
      },
      content: serializedContent,
    },
  };
}