import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BytePlay - Your Coding Playground',
  description: 'Discover, learn, and master coding with BytePlay. The ultimate platform for developers to practice, share knowledge, and grow their skills.',
  openGraph: {
    title: 'BytePlay - Your Coding Playground',
    description: 'Discover, learn, and master coding with BytePlay. The ultimate platform for developers to practice, share knowledge, and grow their skills.',
    url: 'https://www.thebyteplay.com',
    siteName: 'BytePlay',
    images: [
      {
        url: 'https://www.thebyteplay.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BytePlay - Your Coding Playground',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BytePlay - Your Coding Playground',
    description: 'Discover, learn, and master coding with BytePlay. The ultimate platform for developers to practice, share knowledge, and grow their skills.',
    images: ['https://www.thebyteplay.com/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
