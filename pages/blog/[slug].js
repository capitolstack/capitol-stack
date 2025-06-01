// --- pages/blog/[slug].js ---
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
  const imagePath = image?.startsWith('/') ? image : `/blog/${image}`;

  return (
    <Layout>
      <Head>
        <title>{title} | Capitol Stack Blog</title>
        <meta name="description" content={description} />
        {image && <meta property="og:image" content={imagePath} />}
      </Head>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-sm text-gray-500 mb-6">{date}</p>

        {image && (
          <div className="w-full mb-6 rounded-lg overflow-hidden">
            <Image
              src={imagePath}
              alt={title}
              width={800}
              height={450}
              className="object-cover rounded"
            />
          </div>
        )}

        <div className="prose dark:prose-invert">
          <MDXRemote {...mdxSource} />
        </div>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const postsDir = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDir);

  const paths = filenames.map((name) => ({
    params: { slug: name.replace(/\\.mdx?$/, '') },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'posts', `${params.slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter: data,
      mdxSource,
    },
  };
}
