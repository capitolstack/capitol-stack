// pages/blog/[slug].js - Enhanced blog post page

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import { useState } from 'react';

// Custom MDX components for better styling
const components = {
  img: (props) => (
    <div className="relative w-full my-8">
      <Image
        {...props}
        width={800}
        height={400}
        className="rounded-lg shadow-md w-full h-auto"
        alt={props.alt || ''}
      />
    </div>
  ),
  a: (props) => (
    <a
      {...props}
      className="text-[#007070] hover:text-[#005f5f] underline transition-colors"
      target={props.href?.startsWith('http') ? '_blank' : undefined}
      rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    />
  ),
  blockquote: (props) => (
    <blockquote className="border-l-4 border-[#007070] pl-6 my-6 italic text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 py-4 rounded-r-lg">
      {props.children}
    </blockquote>
  ),
  code: (props) => (
    <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono text-[#007070]">
      {props.children}
    </code>
  ),
  pre: (props) => (
    <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto my-6">
      {props.children}
    </pre>
  ),
};

export default function PostPage({ source, frontMatter }) {
  const [shareClicked, setShareClicked] = useState(false);

  // Estimate reading time (rough calculation)
  const readingTime = Math.ceil((source?.compiledSource?.length || 1000) / 1000);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: frontMatter.title,
          text: frontMatter.description || frontMatter.summary,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      setShareClicked(true);
      setTimeout(() => setShareClicked(false), 2000);
    }
  };

  return (
    <>
      <Head>
        <title>{frontMatter.title} | Capitol Stack</title>
        <meta name="description" content={frontMatter.description || frontMatter.summary} />
        <meta property="og:title" content={frontMatter.title} />
        <meta property="og:description" content={frontMatter.description || frontMatter.summary} />
        <meta property="og:image" content={frontMatter.image || '/images/og-default.jpg'} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={frontMatter.title} />
        <meta name="twitter:description" content={frontMatter.description || frontMatter.summary} />
        <meta name="twitter:image" content={frontMatter.image || '/images/og-default.jpg'} />
        
        {/* Article structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": frontMatter.title,
              "description": frontMatter.description || frontMatter.summary,
              "image": frontMatter.image,
              "datePublished": frontMatter.date,
              "author": {
                "@type": "Person",
                "name": frontMatter.author?.name || "Capitol Stack",
              },
              "publisher": {
                "@type": "Organization",
                "name": "Capitol Stack",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://capitolstack.vc/capitol-stack-logo.png"
                }
              }
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Header */}
        <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-4xl mx-auto px-6 py-6">
            <Link 
              href="/blog"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-[#007070] transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to articles
            </Link>
          </div>
        </header>

        {/* Article */}
        <article className="max-w-4xl mx-auto px-6 py-12">
          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white mb-6">
              {frontMatter.title}
            </h1>
            
            {/* Meta information */}
            <div className="flex flex-wrap items-center gap-6 text-sm leading-relaxed text-gray-500 dark:text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={frontMatter.date}>
                  {new Date(frontMatter.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{readingTime} min read</span>
              </div>
              
              <button
                onClick={handleShare}
                className="flex items-center gap-2 text-[#007070] hover:text-[#005f5f] transition-colors"
                title="Share article"
              >
                <Share2 className="w-4 h-4" />
                <span>{shareClicked ? 'Copied!' : 'Share'}</span>
              </button>
            </div>

            {/* Featured image */}
            {frontMatter.image && (
              <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-lg mb-8">
                <Image
                  src={frontMatter.image}
                  alt={frontMatter.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </header>

          {/* Article content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <MDXRemote {...source} components={components} />
          </div>

          {/* Author section */}
          {frontMatter.author && (
            <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-4">
                {frontMatter.author.avatar && (
                  <div className="flex-shrink-0">
                    <Image
                      src={frontMatter.author.avatar}
                      alt={frontMatter.author.name}
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold leading-tight text-gray-900 dark:text-white mb-2">{frontMatter.author.name}</h3>
                  {frontMatter.author.role && (
                    <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 mb-3">{frontMatter.author.role}</p>
                  )}
                  {frontMatter.author.bio && (
                    <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">{frontMatter.author.bio}</p>
                  )}
                </div>
              </div>
            </footer>
          )}
        </article>

        {/* Related articles or CTA section */}
        <section className="bg-gray-50 dark:bg-gray-800 py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold leading-tight text-gray-900 dark:text-white mb-6">Want to stay updated?</h2>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-8">
              Get the latest insights on climate tech and venture capital delivered to your inbox.
            </p>
            <Link href="/#contact" className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white rounded-full transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 bg-[#007070] hover:bg-[#005f5f] focus:ring-[#007070]">
              Get in touch
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames
    .filter(filename => filename.endsWith('.mdx'))
    .map((filename) => ({
      params: { slug: filename.replace(/\.mdx$/, '') },
    }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'posts', `${params.slug}.mdx`);
  
  try {
    const source = fs.readFileSync(filePath, 'utf8');
    const { content, data } = matter(source);

    const mdxSource = await serialize(content, { 
      scope: data,
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [],
      }
    });

    return {
      props: {
        source: mdxSource,
        frontMatter: {
          ...data,
          description: data.description || data.summary || '',
        },
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
