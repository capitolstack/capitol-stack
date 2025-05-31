// pages/blog/[slug].js
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { getPostBySlug, getAllPosts } from '../../lib/posts';
import MDXComponents from '../../components/MDXComponents';

export async function getStaticPaths() {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
    },
    scope: post,
  });

  return {
    props: {
      frontMatter: post,
      mdxSource,
    },
  };
}

export default function PostPage({ frontMatter, mdxSource }) {
  return (
    <>
      <Head>
        <title>{frontMatter.title} | Capitol Stack</title>
        <meta name="description" content={frontMatter.excerpt || frontMatter.description || ''} />
      </Head>
      <article className="prose dark:prose-invert max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1>{frontMatter.title}</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          {new Date(frontMatter.date).toLocaleDateString()}
        </p>
        <MDXRemote {...mdxSource} components={MDXComponents} />
      </article>
    </>
  );
}
