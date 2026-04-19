import type { Metadata } from 'next'
import { Inter, Source_Code_Pro } from 'next/font/google'
import './globals.css'
import { SkipNav } from '@/components/layout/SkipNav'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-source-code-pro',
  display: 'swap',
  weight: ['400', '600'],
})

export const metadata: Metadata = {
  title: 'Concordia Campus Tactile Maps — CART 484',
  description:
    'A tactile wayfinding system for blind and low-vision students at Concordia University\u2019s SGW Campus. Capstone project, CART 484, Winter 2026.',
  openGraph: {
    title: 'Concordia Campus Tactile Maps',
    description:
      'A tactile wayfinding system for blind and low-vision students at Concordia University\u2019s SGW Campus.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceCodePro.variable}`}>
      <body className="bg-bg text-text-primary font-sans antialiased">
        <SkipNav />
        {children}
      </body>
    </html>
  )
}
