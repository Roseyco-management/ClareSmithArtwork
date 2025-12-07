import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News',
  description: 'Latest updates from Clare Smith Artwork - press features, exhibitions, and events.',
};

export default function NewsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-cream py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Featured Press Image */}
            <div className="relative">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl transform -rotate-2">
                <Image
                  src="/images/Clare Smith News1.JPG"
                  alt="Team Magazine Cover Feature"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative second image */}
              <div className="absolute -bottom-8 -right-8 w-2/3 aspect-[4/3] rounded-lg overflow-hidden shadow-xl transform rotate-3 border-4 border-white">
                <Image
                  src="/images/ClareSmithNews2.JPG"
                  alt="Magazine Article Feature"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Welcome Text */}
            <div className="md:pt-8">
              <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">News</h1>
              <div className="space-y-4 text-gray-700">
                <p>
                  Welcome to the latest updates from Clare Smith Artwork. Here you&apos;ll
                  find a glimpse into Clare&apos;s creative journey — from market days
                  and new collections to the inspiration behind each piece.
                </p>
                <p>
                  Stay connected to see where Clare&apos;s art is heading next. Whether
                  it&apos;s a fresh Dreamscape, a feature in a magazine, or a special
                  event at St George&apos;s Market — this is the place for stories and
                  sneak peeks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Items */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          {/* News Item 1 - Daisies Café */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                Clare&apos;s Artwork at Daisies Café
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Nestled in the heart of Belfast, Daisies is more than just a cosy
                  hot chocolate spot — it&apos;s now home to a selection of Clare&apos;s
                  original artworks. The warm, whimsical vibe of the café pairs
                  beautifully with Clare&apos;s landscapes, creating a space where
                  locals can enjoy both rich cocoa and rich creativity.
                </p>
                <p>
                  Drop in for a drink and a browse — you might just leave with a
                  new favourite print.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/ClaireSmith Daisies.JPG"
                alt="Clare's Artwork at Daisies Café"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* News Item 2 - St George's Market */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1 relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/St Georges Market.jpg"
                alt="St George's Market"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                Every Weekend at St George&apos;s Market
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Find Clare at Stall 12 in Belfast&apos;s beloved St George&apos;s Market
                  every Friday, Saturday, and Sunday. It&apos;s the perfect opportunity
                  to see the artwork in person, chat with Clare about her process,
                  and discover pieces that speak to you.
                </p>
                <p>
                  The market atmosphere adds something special to the experience —
                  come for the art, stay for the craic!
                </p>
              </div>
            </div>
          </div>

          {/* News Item 3 - New Collection */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                New Dreamscapes Collection
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Clare has been busy in the studio creating new pieces for the
                  Dreamscapes collection. Featuring ethereal wildlife scenes with
                  rich textures and touches of gold leaf, these new works capture
                  the magic of Northern Ireland&apos;s natural world.
                </p>
                <p>
                  Keep an eye on the shop for new additions, or visit the market
                  to see them first!
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/dreamscapes/full-moon-wolf.jpg"
                alt="New Dreamscapes Collection"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
