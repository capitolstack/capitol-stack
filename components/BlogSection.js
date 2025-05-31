import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function BlogSection({ posts }) {
  // Take only first 4 posts for homepage
  const displayPosts = posts?.slice(0, 4) || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  if (!displayPosts.length) {
    return null;
  }

  return (
    <section className="py-28 px-6 bg-[#F9FAFB] dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-semibold text-[#1A1A1A] dark:text-white mb-4 border-l-4 border-[#007070] pl-4">
              Latest Insights
            </h2>
            <p className="text-lg text-[#4B5563] dark:text-gray-300 pl-4">
              Thoughts on climate tech, venture capital, and building the future
            </p>
          </div>
          
          <Link 
            href="/blog"
            className="hidden md:flex items-center text-[#007070] hover:text-[#005f5f] font-semibold group transition-all duration-200"
          >
            View all articles
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {displayPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-lg dark:shadow-gray-900/20 transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-800 group"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="cursor-pointer">
                  {/* FIXED: Image Container - No more truncation */}
                  <div className="relative w-full h-48 sm:h-56 bg-gray-100 dark:bg-gray-800 overflow-hidden">
                    {post.image ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        style={{
                          objectFit: 'cover',
                          objectPosition: 'center',
                          width: '100%',
                          height: '100%'
                        }}
                        loading={index < 2 ? 'eager' : 'lazy'}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    
                    {/* Fallback placeholder */}
                    <div 
                      className={`w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 ${post.image ? 'hidden' : 'flex'}`}
                    >
                      <div className="text-center text-gray-500 dark:text-gray-400">
                        <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                        <p className="text-sm font-medium">Article</p>
                      </div>
                    </div>
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    {/* Date */}
                    <time className="text-sm text-[#007070] font-medium block mb-3">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    
                    {/* Title */}
                    <h3 className="text-xl font-semibold text-[#1A1A1A] dark:text-white mb-3 group-hover:text-[#007070] transition-colors duration-200">
                      <span className="line-clamp-2">{post.title}</span>
                    </h3>
                    
                    {/* Summary */}
                    <p className="text-[#4B5563] dark:text-gray-300 text-base leading-relaxed mb-4">
                      <span className="line-clamp-3">{post.summary || post.description}</span>
                    </p>
                    
                    {/* Read More */}
                    <div className="flex items-center text-[#007070] font-semibold text-sm group-hover:translate-x-1 transition-transform duration-200">
                      Read article
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {/* Mobile View All Link */}
        <div className="mt-12 text-center md:hidden">
          <Link 
            href="/blog"
            className="inline-flex items-center px-6 py-3 text-base font-semibold text-[#1A1A1A] dark:text-white bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
          >
            View all articles
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
