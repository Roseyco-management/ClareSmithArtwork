'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getArtworkBySlug, getArtworksByCollection } from '@/data/artworks';

type SizeOption = 'A4' | 'A3';

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const artwork = getArtworkBySlug(slug);
  const [selectedSize, setSelectedSize] = useState<SizeOption>('A4');
  const [quantity, setQuantity] = useState(1);

  if (!artwork) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Artwork not found</h1>
          <Link href="/shop" className="btn btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const price = selectedSize === 'A4' ? artwork.priceA4 : artwork.priceA3;
  const relatedArtworks = getArtworksByCollection(artwork.collection)
    .filter((a) => a.slug !== artwork.slug)
    .slice(0, 4);

  const handleAddToCart = () => {
    // TODO: Implement cart functionality
    alert(`Added ${quantity}x ${artwork.name} (${selectedSize}) to cart`);
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-cream py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-navy">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/shop" className="hover:text-navy">
              Shop
            </Link>
            <span className="mx-2">/</span>
            <Link
              href={`/portfolio/${artwork.collection}`}
              className="hover:text-navy capitalize"
            >
              {artwork.collection === 'fine-art' ? 'Fine Art' : 'Dreamscapes'}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-navy">{artwork.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Details */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Image */}
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl">
              <Image
                src={artwork.image}
                alt={artwork.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Details */}
            <div>
              <span
                className={`inline-block px-3 py-1 text-sm font-medium rounded-full mb-4 ${
                  artwork.collection === 'fine-art'
                    ? 'bg-navy text-white'
                    : 'bg-gold text-navy'
                }`}
              >
                {artwork.collection === 'fine-art' ? 'Fine Art' : 'Dreamscapes'}
              </span>

              <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                {artwork.name}
              </h1>

              <p className="text-gray-700 mb-6">{artwork.description}</p>

              <div className="text-3xl font-bold text-navy mb-6">£{price}</div>

              {/* Size Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Size
                </label>
                <div className="flex gap-4">
                  <button
                    onClick={() => setSelectedSize('A4')}
                    className={`flex-1 py-3 px-4 rounded border-2 font-medium transition-all ${
                      selectedSize === 'A4'
                        ? 'border-navy bg-navy text-white'
                        : 'border-gray-300 hover:border-navy'
                    }`}
                  >
                    A4 - £{artwork.priceA4}
                  </button>
                  <button
                    onClick={() => setSelectedSize('A3')}
                    className={`flex-1 py-3 px-4 rounded border-2 font-medium transition-all ${
                      selectedSize === 'A3'
                        ? 'border-navy bg-navy text-white'
                        : 'border-gray-300 hover:border-navy'
                    }`}
                  >
                    A3 - £{artwork.priceA3}
                  </button>
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded border border-gray-300 flex items-center justify-center hover:bg-cream"
                  >
                    -
                  </button>
                  <span className="text-lg font-medium w-8 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded border border-gray-300 flex items-center justify-center hover:bg-cream"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className="w-full btn btn-primary py-4 text-lg mb-4"
              >
                Add to Cart - £{price * quantity}
              </button>

              {/* Enquire About Original */}
              <a
                href={`mailto:info@claresmithartwork.com?subject=Enquiry about Original: ${artwork.name}&body=Hi Clare,%0D%0A%0D%0AI'm interested in enquiring about the original artwork "${artwork.name}".%0D%0A%0D%0ACould you please let me know if this piece is available and provide more details?%0D%0A%0D%0AThank you!`}
                className="w-full block text-center py-3 border-2 border-navy text-navy hover:bg-navy hover:text-white font-medium rounded transition-all"
              >
                Enquire About Original
              </a>

              {/* Info */}
              <div className="border-t border-gray-200 pt-6 mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-gold flex-shrink-0 mt-0.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <p className="font-medium text-navy">High-Quality Print</p>
                    <p className="text-sm text-gray-600">
                      Giclée print on premium archival paper
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-gold flex-shrink-0 mt-0.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                    />
                  </svg>
                  <div>
                    <p className="font-medium text-navy">UK Delivery</p>
                    <p className="text-sm text-gray-600">
                      Fast, tracked shipping throughout the UK
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-gold flex-shrink-0 mt-0.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                  <div>
                    <p className="font-medium text-navy">Packaged with Care</p>
                    <p className="text-sm text-gray-600">
                      Each print is carefully packaged by Clare
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedArtworks.length > 0 && (
        <section className="section bg-cream">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              More from {artwork.collection === 'fine-art' ? 'Fine Art' : 'Dreamscapes'}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedArtworks.map((related) => (
                <Link
                  key={related.slug}
                  href={`/product/${related.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <div className="relative aspect-square">
                      <Image
                        src={related.image}
                        alt={related.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="text-sm font-semibold text-navy group-hover:text-gold transition-colors truncate">
                        {related.name}
                      </h3>
                      <p className="text-gray-600 text-sm">From £{related.priceA4}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
