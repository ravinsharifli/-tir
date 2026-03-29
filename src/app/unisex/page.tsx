import { client } from '@/lib/sanity'
import { PERFUMES_BY_GENDER_QUERY } from '@/lib/queries'
import { Perfume } from '@/lib/types'
import type { Metadata } from 'next'
import PerfumeGrid from '@/components/PerfumeGrid'

export const metadata: Metadata = {
  title: 'Unisex Ətirlər',
  description: 'Bakıda ən lüks unisex ətirlər. Cinsiyyətsiz, azad, müasir. 15ml-dən başlayan sifarişlər.',
}

export default async function UnisexPage() {
  const perfumes: Perfume[] = await client.fetch(PERFUMES_BY_GENDER_QUERY, { gender: 'unisex' })

  return (
    <PerfumeGrid
      perfumes={perfumes}
      title="Unisex Ətirlər"
      subtitle="Cinsiyyətsiz, azad, müasir"
      tag="30+ ətir"
    />
  )
}