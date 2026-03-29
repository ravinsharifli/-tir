import type { Metadata } from 'next'
import HomeClient from '@/components/HomeClient'

export const metadata: Metadata = {
  title: 'Parfumer — Lüks Ətir Mağazası | Bakı',
  description: 'Bakıda ən lüks qramla ətir mağazası. Tom Ford, Creed, Xerjoff və daha çox premium brendlər. 15ml-dən başlayan sifarişlər.',
}

export default function HomePage() {
  return <HomeClient />
}