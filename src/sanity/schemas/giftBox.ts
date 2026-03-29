import { defineField, defineType } from 'sanity'

export const giftBoxSchema = defineType({
  name: 'giftBox',
  title: 'Hədiyyə Qutusu',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Ad',
      type: 'string',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'description',
      title: 'Təsvir',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'price',
      title: 'Qiymət (₼)',
      type: 'number',
      validation: (R) => R.required().min(0),
    }),
    defineField({
      name: 'includes',
      title: 'Daxilindəkilər',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'image',
      title: 'Şəkil',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})