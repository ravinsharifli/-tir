import type { Metadata } from 'next'
import HomeClient from '@/components/HomeClient'

export const metadata: Metadata = {
  title: 'Ravion — Lüks Ətir Brendi | Bakı',
  description: 'Bakıda lüks ətir brendi. Keyfiyyətə önəm verənlərin seçimi. ',
}

export default function HomePage() {
  return <HomeClient />
}