import { client } from '@/lib/sanity'
import { PERFUMES_BY_GENDER_QUERY } from '@/lib/queries'
import { Perfume } from '@/lib/types'
import type { Metadata } from 'next'
import PerfumeGrid from '@/components/PerfumeGrid'

export const metadata: Metadata = {
  title: 'Xanım Ətrirləri',
  description: 'Bakıda ən lüks xanım ətrirləri. Zərif, çiçəkli, füsunkar. 15ml-dən başlayan sifarişlər.',
}

export default async function XanimPage() {
  const perfumes: Perfume[] = await client.fetch(PERFUMES_BY_GENDER_QUERY, { gender: 'xanim' })
  return (
    <PerfumeGrid
      perfumes={perfumes}
      title="Xanım Ətrirləri"
      subtitle="Zərif, çiçəkli, füsunkar"
      tag="45+ ətir"
    />
  )
}