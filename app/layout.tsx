import type { Metadata, Viewport } from "next"
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import CustomCursor from "@/components/layout/CustomCursor"
import TabHijack from "@/components/layout/TabHijack"
import ChaosMode from "@/components/layout/ChaosMode"
import Terminal from "@/components/layout/Terminal"
import XRayMode from "@/components/layout/XRayMode"
import ConsoleMessage from "@/components/layout/ConsoleMessage"

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const viewport: Viewport = {
  themeColor: "#A2FF00",
  width: "device-width",
  initialScale: 1,
}

const SITE_URL = "https://joevan.site"
const SITE_NAME = "JOEVAN.SITE"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  // Menggunakan template agar SEO tiap halaman unik
  title: {
    default: "Joevan Pramana Achmad | Full Stack Engineer",
    template: "%s | Joevan Pramana Achmad",
  },

  description: "Backend Engineer specialized in IoT, Big Data, and Cloud Architecture. Portfolio showcasing brutalist design and technical excellence.",

  authors: [{ name: "Joevan Pramana Achmad", url: SITE_URL }],
  creator: "Joevan Pramana Achmad",
  alternates: { canonical: SITE_URL },

  openGraph: {
    title: "Joevan Pramana Achmad | Full Stack Engineer",
    description: "Backend & Cloud Engineer specializing in Go, Node.js, IoT, and AI/ML.",
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${SITE_NAME} Portfolio` }],
  },

  robots: {
    index: true,
    follow: true,
  },

  verification: {
    google: "YZz1Lx7zCAjO5no7zV-2E-CQlQnbNb61fkreUWE0aUg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Joevan Pramana Achmad',
    url: SITE_URL,
    jobTitle: 'Full Stack Engineer',
    description: 'Backend & Cloud Engineer specialized in IoT, Big Data, and Cloud Architecture.',
    sameAs: [
      'https://github.com/Joevan29',
      'https://linkedin.com/in/jvnprmnachmd',
      'https://www.credly.com/users/jvnprmnachmd',
    ],
    knowsAbout: ['Go', 'Node.js', 'Next.js', 'React', 'PostgreSQL', 'IoT', 'Machine Learning', 'Docker', 'Kubernetes'],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Universitas Nasional',
      department: 'Information Systems',
    },
  }

  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ConsoleMessage />
        <XRayMode />
        <ChaosMode />
        <TabHijack />
        <Terminal />
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
