import { defineField, defineType } from 'sanity'

export const packagingSchema = defineType({
  name: 'packaging',
  title: 'Qablaşdırma Seçimləri',
  type: 'document',
  fields: [
    defineField({
      name: 'tier',
      title: 'Növ',
      type: 'string',
      options: {
        list: [
          { title: 'Standart', value: 'standart' },
          { title: 'Premium', value: 'premium' },
          { title: 'Luxury', value: 'luxury' },
        ],
      },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'price',
      title: 'Qiymət (₼) — 0 yazsan "Pulsuz" görünür',
      type: 'number',
      validation: (R) => R.required().min(0),
    }),
    defineField({
      name: 'items',
      title: 'Daxilindəkilər',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'popular',
      title: 'Populyar işarəsi göstərilsin?',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})