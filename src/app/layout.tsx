import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Cart } from '@/components/Cart'
import { Cursor } from '@/components/Cursor'
import { Analytics } from '@/components/Analytics'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ravion.az'),
  title: {
    default: 'Ravion — Lüks Ətir Mağazası | Bakı',
    template: '%s | Ravion',
  },
  description: 'Bakıda lüks ətir mağazası. Tom Ford, Creed, Xerjoff və daha çox premium brendlər. Kuryer ilə çatdırılma.',
  keywords: [
    'ətir', 'parfüm', 'lüks ətir', 'Bakı ətir', 'ətir Bakı',
    'Tom Ford', 'Creed', 'Xerjoff', 'Amouage', 'Parfums de Marly',
    'kişi ətri', 'qadın ətri', 'unisex ətir', 'hədiyyə ətir',
    'Ravion', 'ravion.az', 'online ətir mağazası'
  ],
  openGraph: {
    title: 'Ravion — Lüks Ətir Mağazası | Bakı',
    description: 'Bakıda lüks ətir mağazası. Tom Ford, Creed, Xerjoff. Kuryer ilə çatdırılma.',
    locale: 'az_AZ',
    type: 'website',
    url: 'https://ravion.az',
    siteName: 'Ravion',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ravion — Lüks Ətir Mağazası | Bakı',
    description: 'Bakıda lüks ətir mağazası. Tom Ford, Creed, Xerjoff.',
  },
  alternates: {
    canonical: 'https://ravion.az',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="az" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body>
        <Analytics />
        <Cursor />
        <Navbar />
        <main>{children}</main>
        <Cart />
      </body>
    </html>
  )
}