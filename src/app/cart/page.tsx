'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Placeholder cart data - will be replaced with cart state management
interface CartItem {
  id: string;
  name: string;
  image: string;
  size: 'A4' | 'A3';
  price: number;
  quantity: number;
}

export default function CartPage() {
  // Placeholder empty cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = cartItems.length > 0 ? 4.99 : 0;
  const total = subtotal + shipping;

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      setCartItems(cartItems.filter((item) => item.id !== id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-12 bg-navy text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            Shopping Cart
          </h1>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container mx-auto px-4">
          {cartItems.length === 0 ? (
            /* Empty Cart */
            <div className="max-w-lg mx-auto text-center py-12">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-24 h-24 mx-auto text-gray-300 mb-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <h2 className="text-2xl font-bold text-navy mb-4">
                Your cart is empty
              </h2>
              <p className="text-gray-600 mb-8">
                Looks like you haven&apos;t added any artwork to your cart yet.
              </p>
              <Link href="/shop" className="btn btn-primary">
                Browse Artwork
              </Link>
            </div>
          ) : (
            /* Cart with Items */
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-6 p-4 bg-cream rounded-lg"
                    >
                      <div className="relative w-24 h-24 rounded overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-navy">{item.name}</h3>
                        <p className="text-sm text-gray-600">Size: {item.size}</p>
                        <p className="text-navy font-medium mt-1">
                          £{item.price}
                        </p>
                      </div>
                      <div className="flex flex-col items-end justify-between">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center hover:bg-white"
                          >
                            -
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center hover:bg-white"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-cream rounded-lg p-6 sticky top-24">
                  <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>£{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping (UK)</span>
                      <span>£{shipping.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-gray-300 pt-3 flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>£{total.toFixed(2)}</span>
                    </div>
                  </div>
                  <button className="w-full btn btn-primary py-3 mb-4">
                    Proceed to Checkout
                  </button>
                  <Link
                    href="/shop"
                    className="block text-center text-navy hover:text-gold transition-colors"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="section bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 mx-auto text-navy mb-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
              <h3 className="font-semibold mb-2">Secure Checkout</h3>
              <p className="text-sm text-gray-600">
                Your payment details are protected with SSL encryption
              </p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 mx-auto text-navy mb-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                />
              </svg>
              <h3 className="font-semibold mb-2">UK Delivery</h3>
              <p className="text-sm text-gray-600">
                Fast, tracked delivery throughout the United Kingdom
              </p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 mx-auto text-navy mb-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                />
              </svg>
              <h3 className="font-semibold mb-2">Need Help?</h3>
              <p className="text-sm text-gray-600">
                <Link href="/contact" className="text-navy hover:text-gold">
                  Contact us
                </Link>{' '}
                with any questions
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
