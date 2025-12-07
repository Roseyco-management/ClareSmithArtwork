'use client';

import Link from 'next/link';
import Image from 'next/image';
import NewsletterForm from '../forms/NewsletterForm';

export default function Footer() {
  return (
    <footer className="bg-navy">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left - Contact & VAA */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-6">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
              <div className="space-y-1 text-gray-300 text-sm">
                <a
                  href="mailto:info@claresmithartwork.com"
                  className="block hover:text-gold transition-colors"
                >
                  info@claresmithartwork.com
                </a>
                <p>St George&apos;s Market 12</p>
                <p>East Bridge St, Belfast</p>
                <p>BT1 3NQ, UK</p>
              </div>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/images/VAA Logo.jpg"
                alt="Visual Artists Association Member"
                width={90}
                height={90}
                className="rounded"
              />
            </div>
          </div>

          {/* Center - Navigation Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Explore</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-white hover:text-gold transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="text-white hover:text-gold transition-colors">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="text-white hover:text-gold transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white hover:text-gold transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white hover:text-gold transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">Collections</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/portfolio/fine-art" className="text-white hover:text-gold transition-colors">
                    Fine Art
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio/dreamscapes" className="text-white hover:text-gold transition-colors">
                    Dreamscapes
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="text-white hover:text-gold transition-colors">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-white hover:text-gold transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right - Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Connect With Us</h3>
            <NewsletterForm variant="footer" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Clare Smith Artwork. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-gold transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-gold transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
