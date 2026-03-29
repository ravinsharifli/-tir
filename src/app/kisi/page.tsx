import { client } from '@/lib/sanity'
import { PERFUMES_BY_GENDER_QUERY } from '@/lib/queries'
import { Perfume } from '@/lib/types'
import type { Metadata } from 'next'
import PerfumeGrid from '@/components/PerfumeGrid'

export const metadata: Metadata = {
  title: 'Kişi Ətrirləri',
  description: 'Bakıda ən lüks kişi ətrirləri. Tom Ford, Creed, Xerjoff və daha çox. 15ml-dən başlayan sifarişlər.',
}

export default async function KisiPage() {
  const perfumes: Perfume[] = await client.fetch(PERFUMES_BY_GENDER_QUERY, { gender: 'kisi' })
  return (
    <PerfumeGrid
      perfumes={perfumes}
      title="Kişi Ətrirləri"
      subtitle="Güclü, dərin, yaddaqalan"
      tag="40+ ətir"
    />
  )
}