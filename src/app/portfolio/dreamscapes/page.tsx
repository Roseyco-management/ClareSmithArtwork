import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getArtworksByCollection } from '@/data/artworks';

export const metadata: Metadata = {
  title: 'Dreamscapes Collection',
  description: 'Explore Clare Smith\'s Dreamscapes collection - ethereal semi-abstract pieces with rich textures and vibrant colours.',
};

export default function DreamscapesPage() {
  const artworks = getArtworksByCollection('dreamscapes');

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Link
              href="/portfolio"
              className="inline-block mb-4 text-gold hover:text-gold/80 transition-colors"
            >
              ← Back to Portfolio
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Dreamscapes Collection</h1>
            <p className="text-xl text-gray-300">
              Semi-abstract pieces where imagination takes flight. Rich textures,
              vibrant colours, and touches of gold leaf create ethereal worlds
              open to your interpretation.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {artworks.map((artwork) => (
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
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-navy group-hover:text-gold transition-colors">
                      {artwork.name}
                    </h3>
                    <p className="text-gray-600 mt-1">
                      From £{artwork.priceA4}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Interested in a Commission?</h2>
            <p className="text-gray-700 mb-6">
              I also accept commissions for custom Dreamscape pieces. Share your
              vision with me and let&apos;s create something magical together.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
