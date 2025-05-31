// pages/blog.js - Enhanced blog listing page

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { useState } from 'react';
import { Search, Calendar, ArrowRight, User } from 'lucide-react';

export default function Blog({ featured, posts, allTags }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  // Filter posts based on search and tags
  const filteredPosts = posts.filter(post => {
    const matchesSearch = !searchTerm || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTag = !selectedTag || 
      (post.tags && post.tags.includes(selectedTag));

    return matchesSearch && matchesTag;
  });

  return (
    <>
      <Head>
        <title>Blog | Capitol Stack - Climate Tech Insights</title>
        <meta 
          name="description" 
          content="Insights on climate tech, venture capital, and building the future from Capitol Stack. Deep dives on code, capital, customers, and community." 
        />
        <meta property="og:title" content="Blog | Capitol Stack" />
        <meta property="og:description" content="Climate tech insights and venture capital perspectives from Capitol Stack." />
        <meta property="og:image" content="/images/blog-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white mb-6">
                Inside Capitol Stack
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                Thoughts on climate tech, venture capital, and building the future. 
                Deep dives on code, capital, customers, and community.
              </p>
              
              {/* Search and Filter */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#007070] focus:border-transparent transition-all"
                  />
                </div>
                
                {allTags.length > 0 && (
                  <select
                    value={selectedTag}
                    onChange={(e) => setSelectedTag(e.target.value)}
                    className="px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#007070] focus:border-transparent transition-all"
                  >
                    <option value="">All topics</option>
                    {allTags.map(tag => (
                      <option key={tag} value={tag}>
                        {tag.charAt(0).toUpperCase() + tag.slice(1)}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featured && !searchTerm && !selectedTag && (
          <section className="py-16 border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-2xl md:text-3xl font-semibold leading-tight text-gray-900 dark:text-white mb-8 text-center">Featured Article</h2>
              
              <Link href={`/blog/${featured.slug}`} className="group block">
                <article className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                  <div className="order-2 md:order-1">
                    <div className="flex items-center gap-4 text-sm leading-relaxed text-gray-500 dark:text-gray-400 mb-4">
                      <time className="flex items-center gap-2 text-[#007070]">
                        <Calendar className="w-4 h-4" />
                        {new Date(featured.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                      {featured.tags && (
                        <div className="flex gap-2">
                          {featured.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="px-2 py-1 bg-[#007070]/10 text-[#007070] text-xs rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-semibold leading-tight text-gray-900 dark:text-white mb-4 group-hover:text-[#007070] transition-colors">
                      {featured.title}
                    </h3>
                    
                    <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                      {featured.description}
                    </p>
                    
                    {featured.author && (
                      <div className="flex items-center gap-3 mb-6">
                        {featured.author.avatar ? (
                          <Image
                            src={featured.author.avatar}
                            alt={featured.author.name}
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                        ) : (
                          <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                            <User className="w-5 h-5 text-gray-500" />
                          </div>
                        )}
                        <div>
                          <p className="font-semibold text-sm">{featured.author.name}</p>
                          {featured.author.role && (
                            <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">{featured.author.role}</p>
                          )}
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center text-[#007070] font-semibold group-hover:translate-x-2 transition-transform">
                      Read full article
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </div>
                  </div>
                  
                  <div className="order-1 md:order-2">
                    <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src={featured.image || '/images/default-blog.jpg'}
                        alt={featured.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        priority
                      />
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          </section>
        )}

        {/* Articles Grid */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-lg leading-relaxed text-gray-500 dark:text-gray-400">
                  {searchTerm || selectedTag ? 'No articles match your search.' : 'No articles found.'}
                </p>
                {(searchTerm || selectedTag) && (
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedTag('');
                    }}
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-full transition-all duration-200 shadow-sm hover:shadow-md border focus:outline-none focus:ring-2 focus:ring-offset-2 text-gray-900 dark:text-white bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 mt-4"
                  >
                    Clear filters
                  </button>
                )}
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl md:text-3xl font-semibold leading-tight text-gray-900 dark:text-white">
                    {searchTerm || selectedTag ? 'Search Results' : 'Latest Articles'}
                  </h2>
                  <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`}>
                      <article className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-1 cursor-pointer group h-full flex flex-col">
                        <div className="relative aspect-video overflow-hidden rounded-t-xl">
                          <Image
                            src={post.image || '/images/default-blog.jpg'}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        
                        <div className="p-6 flex-1 flex flex-col">
                          <div className="flex items-center gap-4 text-sm leading-relaxed text-gray-500 dark:text-gray-400 mb-3">
                            <time className="text-[#007070]">
                              {new Date(post.date).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                              })}
                            </time>
                            {post.tags && post.tags.length > 0 && (
                              <span className="px-2 py-1 bg-[#007070]/10 text-[#007070] text-xs rounded-full">
                                {post.tags[0]}
                              </span>
                            )}
                          </div>
                          
                          <h3 className="text-xl md:text-2xl font-semibold leading-tight text-gray-900 dark:text-white mb-3 group-hover:text-[#007070] transition-colors line-clamp-2 flex-shrink-0">
                            {post.title}
                          </h3>
                          
                          <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300 line-clamp-3 mb-4 flex-1">
                            {post.description}
                          </p>
                          
                          {post.author && (
                            <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                              {post.author.avatar ? (
                                <Image
                                  src={post.author.avatar}
                                  alt={post.author.name}
                                  width={32}
                                  height={32}
                                  className="rounded-full"
                                />
                              ) : (
                                <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                                  <User className="w-4 h-4 text-gray-500" />
                                </div>
                              )}
                              <div>
                                <p className="font-medium text-sm">{post.author.name}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-[#007070]/5 py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold leading-tight text-gray-900 dark:text-white mb-4">Stay in the Loop</h2>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-8">
              Get the latest insights on climate tech and venture capital delivered directly to your inbox.
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

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const allPosts = filenames
    .filter(filename => filename.endsWith('.mdx'))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      // Skip unpublished posts
      if (data.published === false) return null;

      return {
        slug: data.slug || filename.replace(/\.mdx$/, ''),
        title: data.title || '',
        description: data.description || data.summary || '',
        image: data.image || null,
        date: data.date || null,
        author: typeof data.author === 'string' ? { name: data.author } : data.author || null,
        tags: data.tags || [],
      };
    })
    .filter(Boolean)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  // Get featured post (the intro post)
  const featuredSlug = 'inside-capitol-stack';
  const featured = allPosts.find((post) => post.slug === featuredSlug) || null;
  
  // Get remaining posts (excluding featured)
  const posts = allPosts.filter((post) => post.slug !== featuredSlug);

  // Get all unique tags
  const allTags = [...new Set(allPosts.flatMap(post => post.tags || []))].sort();

  return {
    props: {
      featured,
      posts,
      allTags,
    },
  };
}
