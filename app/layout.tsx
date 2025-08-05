import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PurpleTax - Professional Tax Consultation Services",
  description: "Get expert tax consultation services from PurpleTax. We help with income tax planning, tax notices, refunds, NRI tax issues, and personal consultation. 24/7 support available.",
  keywords: "tax consultation, income tax planning, tax notices, tax refunds, NRI tax, tax professionals, tax advice, tax services",
  authors: [{ name: "PurpleTax" }],
  creator: "PurpleTax",
  publisher: "PurpleTax",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://purpletax.in'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/logo.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: "PurpleTax - Professional Tax Consultation Services",
    description: "Get expert tax consultation services from PurpleTax. We help with income tax planning, tax notices, refunds, NRI tax issues, and personal consultation. 24/7 support available.",
    siteName: 'PurpleTax',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'PurpleTax - Professional Tax Consultation Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "PurpleTax - Professional Tax Consultation Services",
    description: "Get expert tax consultation services from PurpleTax. We help with income tax planning, tax notices, refunds, NRI tax issues, and personal consultation. 24/7 support available.",
    images: ['/logo.png'],
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
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#682bd7" />
        <meta name="msapplication-TileColor" content="#682bd7" />
        <meta name="msapplication-TileImage" content="/logo.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}


import './globals.css'