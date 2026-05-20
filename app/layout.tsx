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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://joevan.site"
const SITE_NAME = "JOEVAN.SITE"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${SITE_NAME} — Joevan Pramana Achmad | Full Stack Engineer`,
  description:
    "Brutalist portfolio of Joevan Pramana Achmad, a Full Stack Backend & Cloud Engineer specializing in Go, Node.js, Next.js, IoT, and Cloud architectures.",

  authors: [{ name: "Joevan Pramana Achmad", url: SITE_URL }],
  creator: "Joevan Pramana Achmad",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: `${SITE_NAME} — Joevan Pramana Achmad | Full Stack Engineer`,
    description: "Backend & Cloud Engineer specializing in Go, Node.js, IoT, and AI/ML. BNSP Certified. Google Cloud certified.",
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `${SITE_NAME} Portfolio` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Joevan Pramana Achmad`,
    description: "Backend & Cloud Engineer specializing in Go, Node.js, IoT, and AI/ML.",
    images: ["/og-image.png"],
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
    description: 'Backend & Cloud Engineer specializing in Go, Node.js, Next.js, IoT, and AI/ML.',
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
