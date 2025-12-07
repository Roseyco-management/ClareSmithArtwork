import Link from 'next/link';
import Image from 'next/image';
import NewsletterForm from '../forms/NewsletterForm';

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div className="md:col-span-1">
            <Image
              src="/images/Claire Smith Artwork New Logo.png"
              alt="Clare Smith Artwork"
              width={100}
              height={100}
              className="mb-4 bg-white rounded p-2"
            />
            <p className="text-gray-300 text-sm">
              Fine Art & Dreamscapes by Belfast artist Clare Smith. Find me every weekend at St George&apos;s Market.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-300 hover:text-gold transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-gold transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/portfolio/fine-art" className="text-gray-300 hover:text-gold transition-colors">
                  Fine Art
                </Link>
              </li>
              <li>
                <Link href="/portfolio/dreamscapes" className="text-gray-300 hover:text-gold transition-colors">
                  Dreamscapes
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-gold transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-300 hover:text-gold transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-gold transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <p>
                <a
                  href="mailto:info@claresmithartwork.com"
                  className="hover:text-gold transition-colors"
                >
                  info@claresmithartwork.com
                </a>
              </p>
              <div>
                <p>St George&apos;s Market 12</p>
                <p>East Bridge St, Belfast</p>
                <p>BT1 3NQ, UK</p>
              </div>
              <div className="pt-2">
                <p className="font-medium text-white mb-1">Market Hours</p>
                <p>Fri: 6am - 3pm</p>
                <p>Sat: 9am - 3pm</p>
                <p>Sun: 10am - 4pm</p>
              </div>
            </div>
            {/* VAA Badge */}
            <div className="mt-4">
              <Image
                src="/images/VAA Logo.jpg"
                alt="Visual Artists Association Member"
                width={80}
                height={80}
                className="rounded bg-white p-1"
              />
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Stay Connected</h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe for updates on new artwork and exhibitions.
            </p>
            <NewsletterForm variant="footer" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Clare Smith Artwork. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-gold transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
