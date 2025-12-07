'use client';

import { useState } from 'react';

interface NewsletterFormProps {
  variant?: 'default' | 'footer' | 'homepage';
}

export default function NewsletterForm({
  variant = 'default',
}: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  );
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // TODO: Implement Klaviyo integration
    // For now, simulate success
    setTimeout(() => {
      setStatus('success');
      setMessage('Thank you for subscribing!');
      setEmail('');
    }, 1000);
  };

  const isFooter = variant === 'footer';

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className={`flex ${isFooter ? 'flex-col space-y-3' : 'flex-col sm:flex-row gap-3'}`}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
          required
          className={`
            flex-1 px-4 py-3 rounded
            ${isFooter
              ? 'bg-navy-light border border-navy-light text-white placeholder-gray-400 focus:border-gold'
              : 'bg-white border border-gray-300 text-navy placeholder-gray-500 focus:border-navy'
            }
            focus:outline-none focus:ring-2 focus:ring-gold/20 transition-colors
          `}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className={`
            px-6 py-3 font-medium rounded transition-all
            ${isFooter
              ? 'bg-navy-light border-2 border-white text-white hover:bg-white hover:text-navy'
              : 'bg-navy text-white hover:bg-navy-dark'
            }
            disabled:opacity-50 disabled:cursor-not-allowed
          `}
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </div>

      {/* Checkbox for marketing consent */}
      <label className={`flex items-start mt-3 cursor-pointer ${isFooter ? 'text-gray-300' : 'text-gray-600'}`}>
        <input
          type="checkbox"
          defaultChecked
          className="mt-1 mr-2 rounded border-gray-300 text-gold focus:ring-gold"
        />
        <span className="text-sm">
          Yes, Subscribe me to newsletter
        </span>
      </label>

      {/* Status message */}
      {status === 'success' && (
        <p className={`mt-3 text-sm ${isFooter ? 'text-gold' : 'text-green-600'}`}>
          {message}
        </p>
      )}
      {status === 'error' && (
        <p className="mt-3 text-sm text-red-500">{message}</p>
      )}
    </form>
  );
}
