import { defineField, defineType } from 'sanity'

export const deliverySchema = defineType({
  name: 'delivery',
  title: 'Çatdırılma Seçimləri',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Ad (məs: Standart, Sürətli)',
      type: 'string',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'description',
      title: 'Açıqlama (məs: Bütün Azərbaycana)',
      type: 'string',
    }),
    defineField({
      name: 'days',
      title: 'Müddət (məs: 1-3 iş günü)',
      type: 'string',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'price',
      title: 'Qiymət (₼) — 0 yazsan "Pulsuz"',
      type: 'number',
      validation: (R) => R.required().min(0),
    }),
    defineField({
      name: 'active',
      title: 'Aktiv?',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'order',
      title: 'Sıra nömrəsi',
      type: 'number',
      initialValue: 1,
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'price' },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle === 0 ? 'Pulsuz' : `${subtitle} ₼`,
      }
    },
  },
})