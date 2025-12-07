import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Clare Smith, a Belfast-based artist creating stunning fine art and dreamscape paintings.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Clare</h1>
            <p className="text-xl text-gray-300">
              Belfast-based artist creating stunning fine art and dreamscape paintings
            </p>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/5] relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/ClareSmith Portrait.jpeg"
                alt="Clare Smith - Belfast Artist"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">My Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  I&apos;m Clare Smith, an artist based in Belfast with a deep love for
                  both the natural beauty of Ireland and the magic of imagination.
                  My work blends two distinct styles – one rooted in realism, the
                  other in dreamlike abstraction.
                </p>
                <p>
                  My Fine Art collection is inspired by the landscapes and seascapes
                  of Ireland. Painted with a sense of peace and nostalgia, I hope to
                  transport you to serene coastal shores, rolling green hills, and
                  moments of stillness in nature.
                </p>
                <p>
                  My Dreamscape collection is where I let my imagination take the
                  lead – using rich textures, vibrant colours, and touches of gold
                  leaf to create semi-abstract pieces that feel ethereal and open to
                  interpretation. I paint mainly with oils and acrylics, and I love
                  how each painting takes on a life of its own.
                </p>
                <p>
                  You&apos;ll find me every weekend at St George&apos;s Market in Belfast,
                  where I showcase and sell my original pieces in person. Art has
                  always been a part of my life, but over the last few years, I&apos;ve
                  stepped fully into this path – now that my three children are a
                  little older, I&apos;ve been able to dedicate myself to my work and
                  share it with the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            My Creative Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Inspiration</h3>
              <p className="text-gray-700">
                Every piece begins with a moment of inspiration – whether it&apos;s a
                walk along the Antrim coast, a photograph of wildlife, or simply a
                feeling I want to capture.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Creation</h3>
              <p className="text-gray-700">
                Using oils and acrylics, I build up layers of colour and texture.
                For my Dreamscapes, I incorporate gold leaf and mixed media to add
                that magical, ethereal quality.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-navy rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Connection</h3>
              <p className="text-gray-700">
                The final step is sharing my work with you. Whether at St George&apos;s
                Market or through this website, I love hearing how my art resonates
                with people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VAA Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Image
              src="/images/VAA Logo.jpg"
              alt="Visual Artists Association Member"
              width={120}
              height={120}
              className="mx-auto mb-6 rounded"
            />
            <h2 className="text-2xl font-bold mb-4">
              Proud Member of the Visual Artists Association
            </h2>
            <p className="text-gray-700">
              As a member of the Visual Artists Association, I&apos;m committed to
              upholding professional standards and supporting the arts community
              in Northern Ireland.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Visit Me at St George&apos;s Market
            </h2>
            <p className="text-gray-300 mb-6">
              Come say hello every weekend at Belfast&apos;s historic St George&apos;s
              Market. See my artwork in person, chat about commissions, or simply
              browse the collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/portfolio"
                className="px-8 py-3 bg-white text-navy hover:bg-cream font-medium rounded transition-all"
              >
                View Portfolio
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-navy font-medium rounded transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
