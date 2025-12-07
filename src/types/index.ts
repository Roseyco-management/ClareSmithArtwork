// Artwork / Product Types
export interface Artwork {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  category: 'fine-art' | 'dreamscapes';

  // Pricing
  basePrice: number;
  salePrice?: number;

  // Variants
  variants: ArtworkVariant[];

  // Media
  images: string[];
  videoUrl?: string;

  // Display info
  dimensions?: string;
  medium?: string;
  yearCreated?: number;

  // Status
  isOriginalAvailable: boolean;
  isPrintAvailable: boolean;
  isFeatured: boolean;
  isActive: boolean;

  // SEO
  seoTitle?: string;
  seoDescription?: string;

  // Timestamps
  createdAt: string;
  updatedAt: string;
}

export interface ArtworkVariant {
  id: string;
  artworkId: string;
  name: string;
  type: 'original' | 'print';
  sku: string;
  price: number;
  stockQuantity: number;
  dimensions?: string;
  isActive: boolean;
}

// Order Types
export interface Order {
  id: string;
  orderNumber: string;
  customerId?: string;
  email: string;

  status: OrderStatus;

  subtotal: number;
  shippingCost: number;
  discountAmount: number;
  total: number;
  currency: 'GBP';

  shippingMethod: string;
  trackingNumber?: string;
  shippingAddress: Address;
  billingAddress: Address;

  paymentIntentId: string;

  createdAt: string;
  updatedAt: string;
}

export type OrderStatus =
  | 'pending'
  | 'paid'
  | 'processing'
  | 'dispatched'
  | 'delivered'
  | 'cancelled';

export interface OrderItem {
  id: string;
  orderId: string;
  artworkId: string;
  variantId: string;
  quantity: number;
  unitPrice: number;

  // Snapshot
  artworkName: string;
  variantName: string;
  imageUrl: string;
}

// Customer Types
export interface Customer {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;

  defaultShippingAddress?: Address;
  defaultBillingAddress?: Address;

  marketingConsent: boolean;

  createdAt: string;
  updatedAt: string;
}

export interface Address {
  firstName: string;
  lastName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  county?: string;
  postcode: string;
  country: string;
  phone?: string;
}

// Blog Types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage: string;

  status: 'draft' | 'published';
  publishedAt?: string;

  seoTitle?: string;
  seoDescription?: string;

  createdAt: string;
  updatedAt: string;
}

// News Types
export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage: string;

  externalUrl?: string;
  publicationName?: string;

  status: 'draft' | 'published';
  publishedAt?: string;

  createdAt: string;
  updatedAt: string;
}

// Newsletter Types
export interface Subscriber {
  id: string;
  email: string;
  firstName?: string;
  source: 'homepage' | 'footer' | 'checkout' | 'popup';
  isVerified: boolean;
  subscribedAt: string;
  unsubscribedAt?: string;
}

// Cart Types
export interface CartItem {
  artwork: Artwork;
  variant: ArtworkVariant;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  itemCount: number;
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
