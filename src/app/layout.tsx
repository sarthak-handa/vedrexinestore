import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { SmoothScroll } from '@/components/ui/SmoothScroll';

const SITE_URL = 'https://vedrexinestore.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Ved Rexine Store | Premium Foam, EVA & Mattress Supplier in Delhi Since 1967',
    template: '%s | Ved Rexine Store',
  },
  description:
    'Delhi\'s trusted supplier of premium PU foam sheets, EVA sheets, EPE foam rolls, spring mattresses, sofa cushions, rubber adhesives, insole sheets & shoe materials since 1967. Located in Karol Bagh.',
  keywords: [
    'foam sheets Delhi', 'EVA sheets supplier', 'EPE foam rolls', 'spring mattress manufacturer',
    'sofa cushion foam', 'rubber adhesive supplier', 'insole sheets', 'toe puff sheets',
    'shoe material supplier Delhi', 'PU foam sheets', 'foam supplier Karol Bagh',
    'mattress supplier Delhi', 'packaging foam', 'industrial foam',
    'Ved Rexine Store', 'foam wholesale Delhi',
  ],
  authors: [{ name: 'Ved Rexine Store' }],
  creator: 'Ved Rexine Store',
  publisher: 'Ved Rexine Store',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'Ved Rexine Store',
    title: 'Ved Rexine Store | Premium Foam & Mattress Supplier Delhi Since 1967',
    description:
      'Delhi\'s most trusted foam and mattress supplier since 1967. PU Foam, EVA Sheets, EPE Foam, Spring Mattresses, Adhesives & Shoe Materials in Karol Bagh.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ved Rexine Store - Premium Foam Supplier Delhi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ved Rexine Store | Premium Foam & Mattress Supplier Delhi',
    description:
      'Trusted foam, EVA & mattress supplier in Delhi since 1967. Quality materials for furniture, footwear & packaging industries.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#business`,
      name: 'Ved Rexine Store',
      description:
        'Premium supplier of foam sheets, EVA sheets, mattresses, footwear materials, and adhesives in Delhi since 1967.',
      url: SITE_URL,
      telephone: '+91-011-25720328',
      foundingDate: '1967',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '5888/4 Dev Nagar, Karol Bagh',
        addressLocality: 'New Delhi',
        addressRegion: 'Delhi',
        postalCode: '110005',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 28.6517,
        longitude: 77.1928,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '19:00',
        },
      ],
      sameAs: [],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Foam & Mattress Products',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'PU Foam Sheets' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'EVA Sheets' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'EPE Foam Sheets' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'EPE Foam Rolls' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Spring Mattress' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Sofa Cushions' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Rubber Adhesives' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Insole Sheets' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Toe Puff Sheets' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Ping Pong Sheets' } },
        ],
      },
      priceRange: '₹₹',
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Ved Rexine Store',
      description: 'Premium Foam & Mattress Supplier in Delhi Since 1967',
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/products?q={search_term_string}` },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#030305" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-dark-950 text-white font-body antialiased">
        <SmoothScroll>
          <CustomCursor />
          <div className="scan-line" />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
