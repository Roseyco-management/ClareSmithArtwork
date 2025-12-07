import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Clare Smith Artwork',
};

export default function PrivacyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 bg-navy text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            Privacy Policy
          </h1>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Introduction</h2>
            <p className="text-gray-700 mb-4">
              Clare Smith Artwork (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy and is
              committed to protecting your personal data. This privacy policy explains
              how we collect, use, and safeguard your information when you visit our
              website or make a purchase.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>
                <strong>Personal Information:</strong> Name, email address, shipping
                address, and phone number when you make a purchase or sign up for our
                newsletter.
              </li>
              <li>
                <strong>Payment Information:</strong> Payment details are processed
                securely through our payment provider (Stripe) and are not stored on
                our servers.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you use our website,
                including pages visited and time spent on site.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use your information to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Process and fulfil your orders</li>
              <li>Send order confirmations and shipping updates</li>
              <li>Send newsletters (if you&apos;ve subscribed)</li>
              <li>Improve our website and services</li>
              <li>Respond to your enquiries</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate security measures to protect your personal
              information. All payment transactions are encrypted using SSL technology.
            </p>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Your Rights</h2>
            <p className="text-gray-700 mb-4">
              Under GDPR, you have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Unsubscribe from marketing communications</li>
            </ul>

            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this privacy policy, please contact us at:
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
