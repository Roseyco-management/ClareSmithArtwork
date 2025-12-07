'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getAllArtworks } from '@/data/artworks';

type FilterType = 'all' | 'fine-art' | 'dreamscapes';

export default function ShopPage() {
  const [filter, setFilter] = useState<FilterType>('all');
  const allArtworks = getAllArtworks();

  const filteredArtworks =
    filter === 'all'
      ? allArtworks
      : allArtworks.filter((artwork) => artwork.collection === filter);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Shop</h1>
            <p className="text-xl text-gray-300">
              Browse and purchase high-quality prints of Clare Smith&apos;s artwork.
              All prints are available in A4 (£25) and A3 (£40) sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Products */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === 'all'
                  ? 'bg-navy text-white'
                  : 'bg-cream text-navy hover:bg-cream-dark'
              }`}
            >
              All Artwork
            </button>
            <button
              onClick={() => setFilter('fine-art')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === 'fine-art'
                  ? 'bg-navy text-white'
                  : 'bg-cream text-navy hover:bg-cream-dark'
              }`}
            >
              Fine Art
            </button>
            <button
              onClick={() => setFilter('dreamscapes')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === 'dreamscapes'
                  ? 'bg-navy text-white'
                  : 'bg-cream text-navy hover:bg-cream-dark'
              }`}
            >
              Dreamscapes
            </button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredArtworks.map((artwork) => (
              <Link
                key={artwork.slug}
                href={`/product/${artwork.slug}`}
                className="group"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative aspect-square">
                    <Image
                      src={artwork.image}
                      alt={artwork.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span
                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                          artwork.collection === 'fine-art'
                            ? 'bg-navy text-white'
                            : 'bg-gold text-navy'
                        }`}
                      >
                        {artwork.collection === 'fine-art' ? 'Fine Art' : 'Dreamscapes'}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-navy group-hover:text-gold transition-colors">
                      {artwork.name}
                    </h3>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-gray-600">From £{artwork.priceA4}</p>
                      <span className="text-sm text-gold font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        View →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Showing count */}
          <p className="text-center text-gray-600 mt-8">
            Showing {filteredArtworks.length} of {allArtworks.length} artworks
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="section bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Quality Prints</h3>
                <p className="text-gray-600 text-sm">
                  High-quality giclée prints on premium archival paper
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">UK Shipping</h3>
                <p className="text-gray-600 text-sm">
                  Fast, tracked delivery throughout the United Kingdom
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Made with Love</h3>
                <p className="text-gray-600 text-sm">
                  Each piece is carefully packaged by Clare herself
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
