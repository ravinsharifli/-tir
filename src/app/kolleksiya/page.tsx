import { client } from '@/lib/sanity'
import { ALL_PERFUMES_QUERY } from '@/lib/queries'
import { Perfume } from '@/lib/types'
import type { Metadata } from 'next'
import PerfumeGrid from '@/components/PerfumeGrid'

export const metadata: Metadata = {
  title: 'Bütün Ətirlər',
  description: 'Ravion.az — Bakıda lüks ətir mağazası. Tom Ford, Creed, Xerjoff və daha çox premium brendlər.',
}

export const revalidate = 0

export default async function KolleksiyaPage() {
  const perfumes: Perfume[] = await client.fetch(
    ALL_PERFUMES_QUERY,
    {},
    { cache: 'no-store' }
  )
  return (
    <PerfumeGrid
      perfumes={perfumes}
      title="Bütün Ətirlər"
      subtitle="Lüks dünyasına xoş gəldiniz"
      tag="Kolleksiya"
    />
  )
}