import { defineField, defineType } from 'sanity'

export const discountSchema = defineType({
  name: 'discount',
  title: 'Endirim Qaydaları',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Ad (məs: 2+ məhsul endirimi)',
      type: 'string',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'minItems',
      title: 'Minimum məhsul sayı (məs: 2)',
      type: 'number',
      validation: (R) => R.required().min(1),
    }),
    defineField({
      name: 'percent',
      title: 'Endirim faizi (məs: 10)',
      type: 'number',
      validation: (R) => R.required().min(1).max(100),
    }),
    defineField({
      name: 'active',
      title: 'Aktiv?',
      type: 'boolean',
      initialValue: true,
    }),
  ],
})