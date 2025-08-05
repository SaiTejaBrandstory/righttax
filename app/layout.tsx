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
  metadataBase: new URL('https://purpletax.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "PurpleTax - Professional Tax Consultation Services",
    description: "Get expert tax consultation services from PurpleTax. We help with income tax planning, tax notices, refunds, NRI tax issues, and personal consultation. 24/7 support available.",
    url: 'https://purpletax.com',
    siteName: 'PurpleTax',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "PurpleTax - Professional Tax Consultation Services",
    description: "Get expert tax consultation services from PurpleTax. We help with income tax planning, tax notices, refunds, NRI tax issues, and personal consultation. 24/7 support available.",
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}


import './globals.css'