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
  metadataBase: new URL('https://parfumer.az'),
  title: {
    default: 'Parfumer — Lüks Ətir Mağazası | Bakı',
    template: '%s | Parfumer',
  },
  description: 'Bakıda ən lüks qramla ətir mağazası. Tom Ford, Creed, Xerjoff və daha çox premium brendlər. 15ml-dən başlayan sifarişlər.',
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