import Image from 'next/image';
import Link from 'next/link';
import NewsletterForm from '@/components/forms/NewsletterForm';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Image Collage - No gaps */}
        <div className="absolute inset-0 grid grid-cols-3">
          <div className="relative">
            <Image
              src="/images/dreamscapes/peacock-of-seaforde.jpg"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative">
            <Image
              src="/images/fine-art/giants-causeway.jpg"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative">
            <Image
              src="/images/dreamscapes/full-moon-wolf.jpg"
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        {/* Subtle dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="text-5xl md:text-7xl lg:text-8xl mb-6 font-[family-name:var(--font-playfair)] leading-tight italic"
              style={{
                color: '#ffffff',
                textShadow: '3px 3px 6px rgba(0,0,0,0.8), -1px -1px 4px rgba(0,0,0,0.5), 1px 1px 4px rgba(0,0,0,0.5)'
              }}
            >
              Where Reality Meets<br />
              <span className="font-semibold">The Mystical</span>
            </h1>
            <p
              className="text-xl md:text-2xl text-white mb-12 max-w-2xl mx-auto font-light tracking-wide"
              style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}
            >
              Fine Art & Dreamscapes by Clare Smith
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/portfolio/fine-art"
                className="px-8 py-4 font-medium rounded transition-all hover:scale-105 shadow-lg"
                style={{
                  backgroundColor: '#1e3a5f',
                  color: '#ffffff',
                }}
              >
                Explore Fine Art
              </Link>
              <Link
                href="/portfolio/dreamscapes"
                className="px-8 py-4 font-medium rounded transition-all hover:scale-105 shadow-lg"
                style={{
                  backgroundColor: '#c9a227',
                  color: '#1e3a5f',
                }}
              >
                Explore Dreamscapes
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-6 h-6"
            style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                My name is Clare Smith
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  I&apos;m Clare Smith, an artist based in Belfast with a deep love for
                  both the natural beauty of Ireland and the magic of
                  imagination. My work blends two distinct styles – one rooted
                  in realism, the other in dreamlike abstraction.
                </p>
                <p>
                  My Fine Art collection is inspired by the landscapes and
                  seascapes of Ireland. Painted with a sense of peace and
                  nostalgia, hoping to transport you to serene coastal shores,
                  rolling green hills, and moments of stillness in nature.
                </p>
                <p>
                  My Dreamscape collection is where I let my imagination take
                  the lead – using rich textures, vibrant colours, and touches
                  of gold leaf to create semi-abstract pieces that feel ethereal
                  and open to interpretation. I paint mainly with oils and
                  acrylics, and I love how each painting takes on a life of its
                  own.
                </p>
                <p>
                  You&apos;ll find me every weekend at St George&apos;s Market in Belfast,
                  where I showcase and sell my original pieces in person. Art
                  has always been a part of my life, but over the last few
                  years, I&apos;ve stepped fully into this path – now that my three
                  children are a little older, I&apos;ve been able to dedicate myself
                  to my work and share it with the world.
                </p>
              </div>
              <Link
                href="/about"
                className="btn btn-primary mt-6"
              >
                Read More About Clare
              </Link>
            </div>
            <div className="aspect-[4/5] relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/ClareSmith Portrait.jpeg"
                alt="Clare Smith - Belfast Artist"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Explore Collections
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Dreamscapes Card */}
            <Link href="/portfolio/dreamscapes" className="group">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/dreamscapes/peacock-of-seaforde.jpg"
                  alt="Dreamscapes Collection"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3
                    className="text-2xl md:text-3xl font-bold"
                    style={{
                      color: '#ffffff',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.5)'
                    }}
                  >
                    Dreamscapes
                  </h3>
                  <p
                    className="mt-2"
                    style={{
                      color: '#ffffff',
                      textShadow: '1px 1px 3px rgba(0,0,0,0.8)'
                    }}
                  >
                    Ethereal worlds of magic and imagination
                  </p>
                </div>
              </div>
            </Link>

            {/* Fine Art Card */}
            <Link href="/portfolio/fine-art" className="group">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/fine-art/giants-causeway.jpg"
                  alt="Fine Art Collection"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3
                    className="text-2xl md:text-3xl font-bold"
                    style={{
                      color: '#ffffff',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.5)'
                    }}
                  >
                    Fine Art
                  </h3>
                  <p
                    className="mt-2"
                    style={{
                      color: '#ffffff',
                      textShadow: '1px 1px 3px rgba(0,0,0,0.8)'
                    }}
                  >
                    The beauty of Northern Ireland&apos;s landscapes
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Watch Clare Create
            </h2>
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
              <video
                className="w-full h-full object-cover"
                controls
                poster="/images/dreamscapes/peacock-of-seaforde.jpg"
              >
                <source src="/images/Claire Smith Painting Video.MOV" type="video/quicktime" />
                <source src="/images/Claire Smith Painting Video.MOV" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <svg
              className="w-12 h-12 mx-auto mb-6 text-gold"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6">
              &ldquo;I have bought a few pieces of Clare&apos;s artwork for my home and
              business. Clare&apos;s artwork is outstanding. Each time you look and
              study her artwork, you see something different. Clare is very easy
              to talk to and her passion for what she does is incredible to
              watch and listen.&rdquo;
            </blockquote>
            <cite className="text-navy font-semibold not-italic">
              — Lesley Kernan
            </cite>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Stay Connected
            </h2>
            <p className="text-gray-300 mb-8">
              Subscribe to receive updates on new artwork, exhibitions, and
              exclusive offers.
            </p>
            <NewsletterForm variant="footer" />
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Find Me at St George&apos;s Market
              </h2>
              <p className="text-gray-700 mb-6">
                Visit me every weekend at Belfast&apos;s historic St George&apos;s Market,
                where you can see my artwork in person, chat about commissions,
                or simply browse the collection.
              </p>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-gold flex-shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <span>
                    St George&apos;s Market 12, East Bridge St, Belfast BT1 3NQ
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-gold flex-shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <a
                    href="mailto:info@claresmithartwork.com"
                    className="hover:text-gold transition-colors"
                  >
                    info@claresmithartwork.com
                  </a>
                </p>
              </div>
              <Link href="/contact" className="btn btn-primary mt-6">
                Get in Touch
              </Link>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/St Georges Market.jpg"
                alt="St George's Market Belfast"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
