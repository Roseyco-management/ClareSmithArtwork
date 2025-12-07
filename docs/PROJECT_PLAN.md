# Clare Smith Artwork - Website Rebuild Plan

## Project Overview

**Migrating from:** Wix
**Migrating to:** Custom Next.js build
**Artist:** Clare Smith, Belfast-based artist
**Categories:** Fine Art | Dreamscapes
**Location:** St George's Market, Belfast
**Contact:** info@claresmithartwork.com

---

## 1. Site Structure & Pages

### Public Pages

```
/                       # Homepage
├── /portfolio          # Portfolio landing (category selection)
│   ├── /portfolio/fine-art       # Fine Art gallery
│   └── /portfolio/dreamscapes    # Dreamscapes gallery
├── /shop               # Shop landing (all products)
│   ├── /shop/[slug]    # Individual product page
│   └── /shop/category/[category]  # Filtered by category
├── /news               # Press coverage, exhibitions, features
├── /blog               # Artist blog posts
│   └── /blog/[slug]    # Individual blog post
├── /about              # About Clare (bio, video, testimonials)
├── /contact            # Contact form + location info
├── /cart               # Shopping cart
└── /checkout           # Checkout flow
```

### Customer Account Pages

```
/account                # Customer dashboard
├── /account/orders     # Order history
├── /account/wishlist   # Saved artworks
└── /account/settings   # Profile settings
```

### Admin Pages (Protected)

```
/admin                  # Admin dashboard
├── /admin/products     # Manage artworks/products
├── /admin/orders       # Order management
├── /admin/blog         # Blog post management
└── /admin/settings     # Site settings
```

---

## 2. Data Models

### Artwork / Product

```typescript
interface Artwork {
  id: string
  name: string
  slug: string
  description: string
  short_description: string
  category: 'fine-art' | 'dreamscapes'

  // Pricing
  base_price: number
  sale_price?: number

  // Variants (sizes, prints vs originals)
  variants: ArtworkVariant[]

  // Media
  images: string[]          // Array of image URLs
  video_url?: string        // Optional video

  // Display
  dimensions?: string       // e.g., "40cm x 50cm"
  medium?: string           // e.g., "Oil on canvas"
  year_created?: number

  // Status
  is_original_available: boolean
  is_print_available: boolean
  is_featured: boolean
  is_active: boolean

  // SEO
  seo_title?: string
  seo_description?: string

  // Timestamps
  created_at: string
  updated_at: string
}

interface ArtworkVariant {
  id: string
  artwork_id: string
  name: string              // e.g., "Original", "A3 Print", "A4 Print"
  type: 'original' | 'print'
  sku: string
  price: number
  stock_quantity: number    // 1 for originals, more for prints
  dimensions?: string
  is_active: boolean
}
```

### Order

```typescript
interface Order {
  id: string
  order_number: string      // e.g., "CSA-1234"
  customer_id?: string
  email: string

  // Status
  status: 'pending' | 'paid' | 'processing' | 'dispatched' | 'delivered' | 'cancelled'

  // Financials
  subtotal: number
  shipping_cost: number
  discount_amount: number
  total: number
  currency: 'GBP'

  // Shipping
  shipping_method: string
  tracking_number?: string
  shipping_address: Address
  billing_address: Address

  // Payment
  payment_intent_id: string

  // Timestamps
  created_at: string
  updated_at: string
}

interface OrderItem {
  id: string
  order_id: string
  artwork_id: string
  variant_id: string
  quantity: number
  unit_price: number

  // Snapshot (preserved at time of order)
  artwork_name: string
  variant_name: string
  image_url: string
}
```

### Blog Post

```typescript
interface BlogPost {
  id: string
  title: string
  slug: string
  content: string           // Markdown or HTML
  excerpt: string
  featured_image: string

  // Status
  status: 'draft' | 'published'
  published_at?: string

  // SEO
  seo_title?: string
  seo_description?: string

  // Timestamps
  created_at: string
  updated_at: string
}
```

### News Item

```typescript
interface NewsItem {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  featured_image: string

  // External link (for press features)
  external_url?: string
  publication_name?: string  // e.g., "Deluxe Team Magazine"

  // Status
  status: 'draft' | 'published'
  published_at?: string

  // Timestamps
  created_at: string
  updated_at: string
}
```

### Customer

```typescript
interface Customer {
  id: string
  email: string
  first_name: string
  last_name: string
  phone?: string

  // Addresses
  default_shipping_address?: Address
  default_billing_address?: Address

  // Preferences
  marketing_consent: boolean

  // Timestamps
  created_at: string
  updated_at: string
}

interface Address {
  first_name: string
  last_name: string
  address_line_1: string
  address_line_2?: string
  city: string
  county?: string
  postcode: string
  country: string           // Default: "United Kingdom"
  phone?: string
}
```

### Newsletter Subscriber

```typescript
interface Subscriber {
  id: string
  email: string
  first_name?: string
  source: 'homepage' | 'footer' | 'checkout' | 'popup'
  is_verified: boolean
  subscribed_at: string
  unsubscribed_at?: string
}
```

---

## 3. Features by Priority

### MVP (Phase 1) - Core Website

| Feature | Description |
|---------|-------------|
| Homepage | Hero, about preview, featured works, testimonial, newsletter signup |
| Portfolio | Two-category gallery (Fine Art, Dreamscapes) with filtering |
| Individual Artwork View | Full details, images, pricing |
| About Page | Bio, video, full story |
| Contact Page | Contact form, location (St George's Market), VAA badge |
| News Page | Press features, exhibitions |
| Blog | Article listing and individual posts |
| Responsive Design | Mobile-first, works on all devices |
| SEO | Meta tags, Open Graph, structured data |
| Newsletter Signup | Email collection with Klaviyo integration |

### Phase 2 - E-Commerce

| Feature | Description |
|---------|-------------|
| Shop Page | Product grid with category filters |
| Product Pages | Variants (original/prints), add to cart |
| Shopping Cart | Persistent cart, quantity management |
| Checkout | Address collection, shipping selection |
| Stripe Payments | Card, Apple Pay, Google Pay |
| Order Confirmation | Email + confirmation page |
| Royal Mail Integration | Shipping label generation |
| Customer Accounts | Order history, saved addresses |

### Phase 3 - Admin & Enhancements

| Feature | Description |
|---------|-------------|
| Admin Dashboard | Overview stats, recent orders |
| Product Management | Add/edit artworks, manage variants |
| Order Management | View orders, update status, print labels |
| Blog Management | Create/edit posts |
| Analytics | Google Analytics 4, Meta Pixel |
| Discount Codes | Percentage/fixed discounts |
| Gift Cards | Digital gift card purchase & redemption |

### Future Considerations

| Feature | Description |
|---------|-------------|
| Commission Requests | Custom artwork inquiry form |
| Print-on-Demand | Integration with print service |
| International Shipping | Multi-carrier support |
| Multi-language | Irish/English toggle |
| Events Calendar | Market dates, exhibitions |

---

## 4. Technical Implementation

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| UI Components | Custom + adapted from TailAdmin Pro |
| Database | Supabase (PostgreSQL) |
| Auth | Supabase Auth |
| Payments | Stripe |
| Email | Klaviyo (newsletter) + Resend (transactional) |
| Shipping | Royal Mail Click & Drop |
| Hosting | Vercel |
| Analytics | GA4 + Meta Pixel |
| Image CDN | Vercel Image Optimization or Cloudinary |

### Project Structure

```
/ClareSmithArtwork
├── /public
│   ├── /images              # Artwork images (organized by category)
│   │   ├── /fine-art
│   │   └── /dreamscapes
│   └── /ref-images          # Reference screenshots (dev only)
├── /src
│   ├── /app                 # Next.js App Router pages
│   │   ├── /(public)        # Public pages group
│   │   │   ├── /page.tsx    # Homepage
│   │   │   ├── /portfolio
│   │   │   ├── /shop
│   │   │   ├── /blog
│   │   │   ├── /news
│   │   │   ├── /about
│   │   │   └── /contact
│   │   ├── /(checkout)      # Checkout flow
│   │   ├── /(account)       # Customer account
│   │   └── /(admin)         # Admin dashboard
│   ├── /components          # React components
│   │   ├── /ui              # Base UI components
│   │   ├── /layout          # Header, Footer, Navigation
│   │   ├── /portfolio       # Gallery, ArtworkCard, etc.
│   │   ├── /shop            # ProductCard, Cart, etc.
│   │   └── /forms           # ContactForm, NewsletterForm
│   ├── /lib                 # Utilities & integrations
│   │   ├── /supabase.ts     # Supabase client
│   │   ├── /stripe.ts       # Stripe utilities
│   │   ├── /klaviyo.ts      # Email integration
│   │   └── /royalmail.ts    # Shipping integration
│   ├── /contexts            # React contexts
│   │   ├── /CartContext.tsx
│   │   ├── /AuthContext.tsx
│   │   └── /ThemeContext.tsx
│   ├── /hooks               # Custom React hooks
│   ├── /types               # TypeScript types
│   └── /data                # Static data / fallbacks
├── /supabase                # Supabase migrations & config
├── .env.local               # Environment variables
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind configuration
└── package.json
```

### Design System (Based on Current Site)

```css
/* Color Palette */
--color-navy: #1e3a5f;        /* Primary - headers, nav, footer */
--color-navy-dark: #152a45;   /* Darker navy for hover states */
--color-gold: #c9a227;        /* Accent - buttons, highlights */
--color-cream: #f5f0e8;       /* Background */
--color-white: #ffffff;       /* Cards, content areas */
--color-text: #333333;        /* Body text */

/* Typography */
--font-heading: 'Cormorant Garamond', serif;  /* Elegant headings */
--font-body: 'Open Sans', sans-serif;          /* Clean body text */
--font-script: 'Great Vibes', cursive;         /* Tagline accent */

/* Spacing */
--spacing-section: 80px;      /* Between sections */
--spacing-card: 24px;         /* Card padding */
--container-max: 1200px;      /* Max content width */
```

### Implementation Steps

#### Phase 1: Foundation (MVP)

1. **Project Setup**
   - Initialize Next.js 15 with TypeScript
   - Configure Tailwind CSS with custom theme
   - Set up project structure
   - Configure ESLint & Prettier

2. **Layout & Navigation**
   - Create Header component (logo, nav, cart icon)
   - Create Footer component (contact, VAA badge, newsletter)
   - Implement responsive navigation
   - Set up theme (colors, typography)

3. **Homepage**
   - Hero section with tagline
   - About preview section
   - Featured artworks grid
   - Testimonial section
   - Newsletter signup
   - Contact preview

4. **Portfolio Pages**
   - Portfolio landing (category cards)
   - Fine Art gallery page
   - Dreamscapes gallery page
   - Artwork detail modal/page
   - Image lightbox

5. **Content Pages**
   - About page (bio, video, full story)
   - News page (press features grid)
   - Blog listing page
   - Blog post page
   - Contact page (form, map, info)

6. **Database Setup**
   - Create Supabase project
   - Design database schema
   - Create tables & relationships
   - Seed initial data

7. **SEO & Performance**
   - Meta tags & Open Graph
   - Image optimization
   - Performance audit
   - Sitemap & robots.txt

#### Phase 2: E-Commerce

8. **Shop Foundation**
   - Shop page with product grid
   - Category filtering
   - Product detail page
   - Variant selection

9. **Cart System**
   - Cart context & state
   - Add to cart functionality
   - Cart drawer/page
   - Quantity management

10. **Checkout Flow**
    - Shipping address form
    - Shipping method selection
    - Payment integration (Stripe)
    - Order confirmation

11. **Order Management**
    - Order creation & storage
    - Confirmation emails
    - Order status tracking

12. **Customer Accounts**
    - Auth setup (Supabase)
    - Account dashboard
    - Order history
    - Saved addresses

#### Phase 3: Admin & Polish

13. **Admin Dashboard**
    - Protected routes
    - Dashboard overview
    - Product management
    - Order management
    - Blog management

14. **Analytics & Marketing**
    - GA4 integration
    - Meta Pixel
    - Klaviyo newsletter
    - Transactional emails

15. **Final Polish**
    - Accessibility audit
    - Cross-browser testing
    - Performance optimization
    - Security review

---

## 5. Environment Variables

```bash
# App
NEXT_PUBLIC_SITE_URL=https://claresmithartwork.com

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxx
SUPABASE_SERVICE_ROLE_KEY=xxx

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxx
STRIPE_SECRET_KEY=sk_live_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx

# Email
KLAVIYO_PRIVATE_API_KEY=pk_xxx
RESEND_API_KEY=re_xxx

# Shipping
ROYAL_MAIL_API_KEY=xxx

# Analytics
NEXT_PUBLIC_GA4_ID=G-xxx
NEXT_PUBLIC_META_PIXEL_ID=xxx
```

---

## 6. Timeline Estimate

| Phase | Scope |
|-------|-------|
| Phase 1 | Foundation + all public pages (portfolio, blog, news, about, contact) |
| Phase 2 | Full e-commerce (shop, cart, checkout, payments, orders) |
| Phase 3 | Admin dashboard + analytics + polish |

---

## 7. Notes & Decisions

### Content to Migrate
- [ ] All artwork images (need to download from Wix)
- [ ] Blog posts content
- [ ] News/press content
- [ ] Testimonials
- [ ] About page copy
- [ ] Product descriptions & pricing

### Questions to Clarify
- ~~Shipping: UK only or international?~~ **UK only**
- ~~Prints: Does Clare offer prints, or originals only?~~ **Prints (A4 £25, A3 £40) - most originals sold**
- Commissions: Should there be a commission request form?
- Blog: How often will she post? Need a simple CMS?
- ~~Products: How many artworks approximately?~~ **37 artworks (14 Dreamscapes, 22 Fine Art, 1 both)**

### Assets Received
- [x] New logo (PNG)
- [x] Painting video (MOV)
- [x] Portrait photo
- [x] Sample artworks
- [x] Customer review
- [x] News/press images
- [x] Website screenshots for reference
