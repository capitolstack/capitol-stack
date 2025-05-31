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
                  <div className="overflow-hidden rounded-t-xl">
                    {/* Image Container */}
                    <div className="relative aspect-video w-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
                      <img
                        src={post.image || '/images/default-blog.jpg'}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading={index < 2 ? 'eager' : 'lazy'}
                      />
                      
                      {/* Overlay gradient for better text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
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
                    <h3 className="text-xl font-semibold text-[#1A1A1A] dark:text-white mb-3 group-hover:text-[#007070] transition-colors duration-200 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    {/* Summary */}
                    <p className="text-[#4B5563] dark:text-gray-300 text-base leading-relaxed line-clamp-3 mb-4">
                      {post.summary || post.description}
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
