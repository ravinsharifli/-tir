import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { perfumeSchema } from '@/sanity/schemas/perfume'
import { giftBoxSchema } from '@/sanity/schemas/giftBox'
import { packagingSchema } from '@/sanity/schemas/packaging'

export default defineConfig({
  name: 'default',
  title: 'Parfumer Admin',
  projectId: 'qarg43e4',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: [perfumeSchema, giftBoxSchema, packagingSchema],
  },
})