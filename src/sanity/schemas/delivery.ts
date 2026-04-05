import { defineField, defineType } from 'sanity'

export const deliverySchema = defineType({
  name: 'delivery',
  title: 'Çatdırılma Seçimləri',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Ad (məs: Standart, Təcili)',
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
      title: 'Müddət (məs: 2 iş günü)',
      type: 'string',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'price',
      title: 'Əlavə ödəniş (₼) — 0 yazsan "Pulsuz"',
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
      title: 'Sıra nömrəsi (1, 2...)',
      type: 'number',
      initialValue: 1,
    }),
  ],
})