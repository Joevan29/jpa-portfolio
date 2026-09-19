import type { Metadata } from 'next';
import './globals.css';

const SITE_URL = 'https://joevan.site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Joevan Pramana Achmad — Full Stack & Backend Engineer',
    template: '%s | Joevan Pramana Achmad',
  },
  description:
    'Portfolio of Joevan Pramana Achmad. Specializing in high-throughput distributed systems, scalable APIs, Go, Node.js, PostgreSQL, Google BigQuery, and resilient cloud architectures.',
  keywords: [
    'Joevan Pramana Achmad',
    'Joevan',
    'Backend Engineer',
    'Full Stack Engineer',
    'Go Developer',
    'Node.js Developer',
    'PostgreSQL',
    'Google BigQuery',
    'Distributed Systems',
    'Cloud Architecture',
    'Docker',
    'Kubernetes',
    'Kafka',
    'Software Engineer Indonesia',
    'Software Engineer Jakarta',
    'Next.js Portfolio',
  ],
  authors: [{ name: 'Joevan Pramana Achmad', url: SITE_URL }],
  creator: 'Joevan Pramana Achmad',
  publisher: 'Joevan Pramana Achmad',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/logo.svg' },
    ],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Joevan Pramana Achmad Portfolio',
    title: 'Joevan Pramana Achmad — Full Stack & Backend Engineer',
    description:
      'High-throughput distributed systems, scalable cloud APIs, and resilient full-stack architecture.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Joevan Pramana Achmad — Full Stack & Backend Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joevan Pramana Achmad — Full Stack & Backend Engineer',
    description:
      'High-throughput distributed systems, scalable APIs, and clean digital experiences.',
    creator: '@aequorreditusjoi',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google88f846596ae4c37d',
  },
};

// Schema.org Structured Data (JSON-LD) for rich Google search snippets & Knowledge Panel
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Joevan Pramana Achmad',
      alternateName: 'Joevan',
      url: SITE_URL,
      image: `${SITE_URL}/avatar.png`,
      jobTitle: 'Full Stack & Backend Engineer',
      worksFor: {
        '@type': 'Organization',
        name: 'PT Kirana Megatara',
      },
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Universitas Nasional',
      },
      sameAs: [
        'https://github.com/Joevan29',
        'https://www.linkedin.com/in/jvnprmnachmd/',
        'https://www.instagram.com/aequorreditusjoi',
      ],
      knowsAbout: [
        'Go',
        'Node.js',
        'PostgreSQL',
        'Redis',
        'Docker',
        'Kubernetes',
        'Apache Kafka',
        'Google BigQuery',
        'Python',
        'Next.js',
        'Distributed Systems',
        'Microservices Architecture',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Joevan Pramana Achmad Portfolio',
      description: 'Official portfolio of Full Stack & Backend Engineer Joevan Pramana Achmad.',
      publisher: {
        '@id': `${SITE_URL}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#070412] text-white antialiased selection:bg-[#A855F7] selection:text-white">
        {children}
      </body>
    </html>
  );
}
