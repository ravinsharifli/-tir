import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { perfumeSchema } from '@/sanity/schemas/perfume'
import { giftBoxSchema } from '@/sanity/schemas/giftBox'

export default defineConfig({
  name: 'parfumer',
  title: 'Parfumer Admin',
  projectId: 'qarg43e4',
  dataset: 'production',
  plugins: [structureTool()],
  schema: {
    types: [perfumeSchema, giftBoxSchema],
  },
})