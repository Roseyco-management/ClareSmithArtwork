import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Explore Clare Smith\'s art collections - Fine Art landscapes of Northern Ireland and ethereal Dreamscapes.',
};

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Portfolio</h1>
            <p className="text-xl text-gray-300">
              Explore my two distinct collections - realistic Fine Art inspired by
              Northern Ireland&apos;s landscapes, and ethereal Dreamscapes where
              imagination takes flight.
            </p>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Fine Art Collection */}
            <Link href="/portfolio/fine-art" className="group">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/fine-art/giants-causeway.jpg"
                  alt="Fine Art Collection"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-2"
                    style={{
                      color: '#ffffff',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                    }}
                  >
                    Fine Art
                  </h2>
                  <p
                    className="text-lg"
                    style={{
                      color: '#ffffff',
                      textShadow: '1px 1px 3px rgba(0,0,0,0.8)',
                    }}
                  >
                    Realistic landscapes and seascapes of Northern Ireland, painted
                    with a sense of peace and nostalgia.
                  </p>
                  <span className="inline-block mt-4 text-gold font-medium group-hover:translate-x-2 transition-transform">
                    View Collection →
                  </span>
                </div>
              </div>
            </Link>

            {/* Dreamscapes Collection */}
            <Link href="/portfolio/dreamscapes" className="group">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/dreamscapes/peacock-of-seaforde.jpg"
                  alt="Dreamscapes Collection"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-2"
                    style={{
                      color: '#ffffff',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                    }}
                  >
                    Dreamscapes
                  </h2>
                  <p
                    className="text-lg"
                    style={{
                      color: '#ffffff',
                      textShadow: '1px 1px 3px rgba(0,0,0,0.8)',
                    }}
                  >
                    Semi-abstract pieces with rich textures, vibrant colours, and
                    touches of gold leaf.
                  </p>
                  <span className="inline-block mt-4 text-gold font-medium group-hover:translate-x-2 transition-transform">
                    View Collection →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About the Collections */}
      <section className="section bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              About My Work
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-navy">Fine Art</h3>
                <p className="text-gray-700">
                  My Fine Art collection is inspired by the landscapes and seascapes
                  of Ireland. Painted with a sense of peace and nostalgia, I hope to
                  transport you to serene coastal shores, rolling green hills, and
                  moments of stillness in nature. Each piece captures the raw beauty
                  of Northern Ireland&apos;s most iconic locations.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-navy">Dreamscapes</h3>
                <p className="text-gray-700">
                  My Dreamscape collection is where I let my imagination take the
                  lead – using rich textures, vibrant colours, and touches of gold
                  leaf to create semi-abstract pieces that feel ethereal and open to
                  interpretation. These works invite you to find your own meaning
                  and emotion within each piece.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
