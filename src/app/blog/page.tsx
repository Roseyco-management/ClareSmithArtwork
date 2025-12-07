import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read Clare Smith\'s blog - insights into her creative process, art tips, and stories behind the paintings.',
};

// Placeholder blog data - will be replaced with CMS data
const blogPosts = [
  {
    id: 1,
    title: 'The Magic of Gold Leaf in Dreamscapes',
    excerpt: 'Discover how I incorporate gold leaf into my dreamscape paintings to create that ethereal, magical quality that makes each piece shimmer.',
    date: '2024-11-28',
    image: '/images/dreamscapes/elegance.jpg',
    slug: 'magic-of-gold-leaf',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Behind the Canvas: Giants Causeway',
    excerpt: 'The story behind one of my most popular Fine Art pieces - what inspired me to paint this iconic Northern Irish landmark.',
    date: '2024-11-10',
    image: '/images/fine-art/giants-causeway.jpg',
    slug: 'behind-giants-causeway',
    readTime: '4 min read',
  },
  {
    id: 3,
    title: 'A Day at St George\'s Market',
    excerpt: 'What it\'s like to set up my stall every weekend at Belfast\'s beloved St George\'s Market - the people, the atmosphere, and the joy of sharing art.',
    date: '2024-10-25',
    image: '/images/ClareSmith Portrait.jpeg',
    slug: 'day-at-st-georges-market',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'Finding Inspiration in Northern Ireland',
    excerpt: 'How the landscapes, wildlife, and spirit of Northern Ireland influence my work and keep me inspired to create.',
    date: '2024-10-05',
    image: '/images/fine-art/the-mourne-mountains-from-silent-valley.jpg',
    slug: 'finding-inspiration',
    readTime: '5 min read',
  },
  {
    id: 5,
    title: 'Oils vs Acrylics: My Experience',
    excerpt: 'A deep dive into why I use both oils and acrylics in my work, and how each medium brings something unique to my paintings.',
    date: '2024-09-15',
    image: '/images/dreamscapes/tranquil-tolleymore.jpg',
    slug: 'oils-vs-acrylics',
    readTime: '7 min read',
  },
  {
    id: 6,
    title: 'Creating Calm Through Art',
    excerpt: 'How I approach each painting with the intention of creating a sense of peace and tranquility for the viewer.',
    date: '2024-08-30',
    image: '/images/dreamscapes/calm-of-cloughy.jpg',
    slug: 'creating-calm',
    readTime: '4 min read',
  },
];

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-xl text-gray-300">
              Stories, insights, and tips from my creative journey
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <article className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div>
              <span className="inline-block px-3 py-1 bg-gold text-navy text-sm font-medium rounded-full mb-4">
                Featured
              </span>
              <time className="block text-gray-500 text-sm mb-2">
                {new Date(featuredPost.date).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })} · {featuredPost.readTime}
              </time>
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                {featuredPost.title}
              </h2>
              <p className="text-gray-700 mb-6">{featuredPost.excerpt}</p>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="btn btn-primary"
              >
                Read Article
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section bg-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">More Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <time className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })} · {post.readTime}
                  </time>
                  <h3 className="text-xl font-bold text-navy mt-2 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 mb-4 line-clamp-2">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-navy font-medium hover:text-gold transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Enjoy My Writing?
            </h2>
            <p className="text-gray-300 mb-6">
              Subscribe to receive new blog posts and updates directly to your inbox.
            </p>
            <Link
              href="/#newsletter"
              className="px-8 py-3 bg-white text-navy hover:bg-cream font-medium rounded transition-all inline-block"
            >
              Subscribe to Newsletter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
