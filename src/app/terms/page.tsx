import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and Conditions for Clare Smith Artwork',
};

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 bg-navy text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            Terms & Conditions
          </h1>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              These terms and conditions govern your use of the Clare Smith Artwork
              website and the purchase of products from our store. By using this
              website, you accept these terms in full.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">2. Products</h2>
            <p className="text-gray-700 mb-4">
              All products sold on this website are high-quality prints of original
              artwork by Clare Smith. Prints are available in A4 and A3 sizes on
              premium archival paper.
            </p>
            <p className="text-gray-700 mb-4">
              We make every effort to display colours accurately, but we cannot
              guarantee that your monitor&apos;s display will accurately reflect the
              actual colours of the prints.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">3. Pricing & Payment</h2>
            <p className="text-gray-700 mb-4">
              All prices are displayed in British Pounds (GBP) and include VAT where
              applicable. We reserve the right to change prices at any time without
              notice.
            </p>
            <p className="text-gray-700 mb-4">
              Payment is processed securely through Stripe. We accept major credit
              and debit cards.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">4. Shipping</h2>
            <p className="text-gray-700 mb-4">
              We currently ship to addresses within the United Kingdom only. Prints
              are carefully packaged in protective tubes or flat packaging to ensure
              they arrive in perfect condition.
            </p>
            <p className="text-gray-700 mb-4">
              Shipping costs are calculated at checkout. We aim to dispatch orders
              within 3-5 business days.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">5. Returns & Refunds</h2>
            <p className="text-gray-700 mb-4">
              If you are not completely satisfied with your purchase, please contact
              us within 14 days of receiving your order. Items must be returned in
              their original condition and packaging.
            </p>
            <p className="text-gray-700 mb-4">
              Refunds will be processed to the original payment method within 5-10
              business days of receiving the returned item.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">6. Copyright</h2>
            <p className="text-gray-700 mb-4">
              All artwork and images on this website are the copyright of Clare Smith.
              Prints are sold for personal use only. Commercial reproduction,
              distribution, or resale is prohibited without written permission.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              Clare Smith Artwork shall not be liable for any indirect, incidental,
              or consequential damages arising from the use of this website or the
              purchase of products.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">8. Contact</h2>
            <p className="text-gray-700 mb-4">
              For any questions regarding these terms and conditions, please contact us:
            </p>
            <p className="text-gray-700">
              Email:{' '}
              <a
                href="mailto:info@claresmithartwork.com"
                className="text-navy hover:text-gold"
              >
                info@claresmithartwork.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
