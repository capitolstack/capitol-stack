import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

export default function Blog({ featured, posts }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter posts based on search
  const filteredPosts = posts.filter(post =>
    searchTerm === '' ||
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Blog | Capitol Stack - Climate Tech Insights</title>
        <meta
          name="description"
          content="Insights on climate tech, venture capital, and building the future from Capitol Stack."
        />
      </Head>

      <div className="bg-white dark:bg-gray-900">
        {/* Header */}
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Inside Capitol Stack
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-200">
              Insights on climate tech, venture capital, and building the future.
              Learn from our team's experience in the intersection of policy, technology, and impact.
            </p>

            {/* Search */}
            <div className="mt-10 flex justify-center">
              <div className="relative w-full max-w-lg">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full rounded-full border-0 bg-gray-50 dark:bg-gray-800 py-3 pl-10 pr-4 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#007070] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Featured article */}
        {featured && searchTerm === '' && (
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl border-t border-gray-200 dark:border-gray-800 pt-16 sm:pt-20">
              <div className="text-center">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Featured article
                </h2>
              </div>
            </div>

            <article className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
              <Link href={`/blog/${featured.slug}`} className="group">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="relative">
                    <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
                      {featured.image ? (
                        <Image
                          src={featured.image}
                          alt={featured.title}
                          fill
                          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                          priority
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <div className="text-center">
                            <svg
                              className="mx-auto h-12 w-12 text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1}
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            <p className="mt-2 text-sm text-gray-500">Featured image</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-10 lg:mt-0">
                    <time className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {new Date(featured.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <h3 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-[#007070] transition-colors">
                      {featured.title}
                    </h3>
                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-200">
                      {featured.description}
                    </p>

                    {featured.author && (
                      <div className="mt-8 flex items-center space-x-4">
                        {featured.author.avatar ? (
                          <Image
                            className="h-12 w-12 rounded-full"
                            src={featured.author.avatar}
                            alt={featured.author.name}
                            width={48}
                            height={48}
                          />
                        ) : (
                          <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-200">
                              {featured.author.name.charAt(0)}
                            </span>
                          </div>
                        )}
                        <div>
                          <p className="text-base font-semibold text-gray-900 dark:text-white">
                            {featured.author.name}
                          </p>
                          {featured.author.role && (
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {featured.author.role}
                            </p>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="mt-8">
                      <span className="inline-flex items-center text-sm font-medium text-[#007070] group-hover:text-[#005f5f] transition-colors">
                        Read full article
                        <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          </div>
        )}

        {/* Articles grid */}
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          {filteredPosts.length > 0 ? (
            <>
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                  {searchTerm ? 'Search results' : 'All articles'}
                </h2>
                {searchTerm && (
                  <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-200">
                    {filteredPosts.length} {filteredPosts.length === 1 ? 'result' : 'results'} for "{searchTerm}"
                  </p>
                )}
              </div>

              <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {filteredPosts.map((post) => (
                  <article key={post.slug} className="group cursor-pointer">
                    <Link href={`/blog/${post.slug}`} className="block">
                      <div className="relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
                        <div className="aspect-[16/10]">
                          {post.image ? (
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                            />
                          ) : (
                            <div className="flex h-full items-center justify-center">
                              <div className="text-center">
                                <svg
                                  className="mx-
