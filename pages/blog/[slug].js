// Trigger rebuild - 2025-06-03

import Head from 'next/head';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { allPosts } from 'contentlayer/generated';
import { useRouter } from 'next/router';
import MDXComponents from '@/components/MDXComponents';

export async function getStaticPaths() {
  return {
    paths: allPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = allPosts.find((p) => p.slug === params.slug);
  return { props: { post } };
}

export default function BlogPost({ post }) {
  const Component = useMDXComponent(post.body.code);
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    timeZone: 'UTC',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      <Head>
        <title>{post.title} – Capitol Stack</title>
        <meta name="description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={`https://www.capitolstack.vc/blog/${post.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": post.title,
              "datePublished": post.date,
              "description": post.description,
              "author": { "@type": "Person", "name": "Capitol Stack" },
              "publisher": {
                "@type": "Organization",
                "name": "Capitol Stack",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.capitolstack.vc/images/og-preview.png"
                }
              }
            })
          }}
        />
      </Head>

      <article className="max-w-3xl mx-auto px-4 py-12 bg-white dark:bg-gray-900">
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {post.title}
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">{formattedDate}</p>
        <div className="prose prose-gray dark:prose-invert dark:text-gray-200">
          <Component components={MDXComponents} />
        </div>
      </article>
    </>
  );
}
