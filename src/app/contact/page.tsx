'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // TODO: Implement form submission
    setTimeout(() => {
      setStatus('success');
    }, 1000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact</h1>
            <p className="text-xl text-gray-300">
              Get in touch for commissions, enquiries, or just to say hello
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12 text-green-500 mx-auto mb-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="text-xl font-semibold text-green-700 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-green-600">
                    Thank you for your message. Clare will get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded border border-gray-300 focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded border border-gray-300 focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded border border-gray-300 focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="commission">Commission Enquiry</option>
                      <option value="purchase">Purchase Enquiry</option>
                      <option value="general">General Question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded border border-gray-300 focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full btn btn-primary py-3 disabled:opacity-50"
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-navy"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">Email</h3>
                    <a
                      href="mailto:info@claresmithartwork.com"
                      className="text-gray-700 hover:text-gold transition-colors"
                    >
                      info@claresmithartwork.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-navy"
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
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">Find Me</h3>
                    <p className="text-gray-700">
                      St George&apos;s Market 12<br />
                      East Bridge St<br />
                      Belfast BT1 3NQ
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-navy"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy">Market Hours</h3>
                    <p className="text-gray-700">
                      Friday: 6am - 3pm<br />
                      Saturday: 9am - 3pm<br />
                      Sunday: 10am - 4pm
                    </p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 aspect-video bg-cream rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2310.8887099658843!2d-5.930288684097384!3d54.59417798025876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486108f137a3ab45%3A0x37e17e2ab1e37e7!2sSt%20George&#39;s%20Market!5e0!3m2!1sen!2suk!4v1701234567890!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="St George's Market Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commission Info */}
      <section className="section bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Interested in a Commission?</h2>
            <p className="text-gray-700 mb-8">
              I love creating custom pieces that hold special meaning for my
              clients. Whether it&apos;s a favourite landscape, a beloved pet, or a
              dreamscape that speaks to your soul – let&apos;s create something
              beautiful together.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-navy mb-2">Fine Art</h3>
                <p className="text-sm text-gray-600">
                  Custom landscapes and seascapes of your favourite Northern Ireland
                  locations
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-navy mb-2">Dreamscapes</h3>
                <p className="text-sm text-gray-600">
                  Personalised ethereal pieces with your choice of colours and themes
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-navy mb-2">Pet Portraits</h3>
                <p className="text-sm text-gray-600">
                  Beautiful portraits of your beloved pets in my signature style
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
