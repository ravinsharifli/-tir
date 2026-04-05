import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { perfumeSchema } from '@/sanity/schemas/perfume'
import { giftBoxSchema } from '@/sanity/schemas/giftBox'
import { packagingSchema } from '@/sanity/schemas/packaging'
import { campaignSchema } from '@/sanity/schemas/campaign'
import { deliverySchema } from '@/sanity/schemas/delivery'
import { discountSchema } from '@/sanity/schemas/discount'

export default defineConfig({
  name: 'default',
  title: 'Ravion Admin',
  projectId: 'qarg43e4',
  dataset: 'production',
  plugins: [
    structureTool({
      name: 'studio',
      title: 'Content',
    }),
  ],
  schema: {
    types: [perfumeSchema, giftBoxSchema, packagingSchema, campaignSchema, deliverySchema, discountSchema],
  },
})