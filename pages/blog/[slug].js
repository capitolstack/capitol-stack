import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/Layout';

export default function BlogPost({ frontMatter, mdxSource, slug }) {
  const { title, date, image, description, cover } = frontMatter;

  const siteUrl = 'https://www.capitolstack.vc';
  const canonicalUrl = `${siteUrl}/blog/${slug}`;
  const imagePath = image?.startsWith('/')
    ? image
    : `/images/${image || cover}`;

  return (
    <Layout>
      <Head>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": "${title}",
              "description": "${description}",
              "image": "${siteUrl}${imagePath}",
              "url": "${canonicalUrl}",
              "datePublished": "${date}",
              "author": {
                "@type": "Person",
                "name": "${frontMatter.author?.name || 'Capitol Stack'}"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Capitol Stack",
                "logo": {
                  "@type": "ImageObject",
                  "url": "${siteUrl}/capitol-stack-logo.png"
                }
              }
            }
          `}
        </script>

        <title>{title} | Capitol Stack Blog</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${siteUrl}${imagePath}`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}${imagePath}`} />
      </Head>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-sm text-gray-500 mb-6">
          {date && new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>

        {imagePath && (
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

        <div className="prose prose-lg prose-gray dark:prose-invert dark:text-gray-200 dark:prose-headings:text-gray-100 mx-auto max-w-3xl px-4">
          <MDXRemote {...mdxSource} />
        </div>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const postsDir = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDir);

  const paths = filenames
    .filter((name) => name.endsWith('.mdx'))
    .map((name) => ({
      params: { slug: name.replace(/^\d{2}-/, '').replace(/\.mdx$/, '') },
    }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const postsDir = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDir);

  const matchedFile = filenames.find((name) =>
    name.replace(/^\d{2}-/, '').replace(/\.mdx$/, '') === params.slug
  );

  if (!matchedFile) {
    return { notFound: true };
  }

  const filePath = path.join(postsDir, matchedFile);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  const mdxSource = await serialize(content, {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
  },
});


  return {
    props: {
      frontMatter: data,
      mdxSource,
      slug: params.slug,
    },
  };
}
