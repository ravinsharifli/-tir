import { defineField, defineType } from 'sanity'

export const perfumeSchema = defineType({
  name: 'perfume',
  title: 'Ətir',
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
      name: 'brand',
      title: 'Brend',
      type: 'string',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'gender',
      title: 'Kateqoriya',
      type: 'string',
      options: {
        list: [
          { title: 'Kişi', value: 'kisi' },
          { title: 'Xanım', value: 'xanim' },
          { title: 'Unisex', value: 'unisex' },
        ],
      },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'description',
      title: 'Qısa təsvir',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'longDescription',
      title: 'Ətraflı təsvir',
      type: 'text',
      rows: 6,
    }),
    defineField({
      name: 'notes',
      title: 'Notlar',
      type: 'object',
      fields: [
        { name: 'top', title: 'Üst notlar', type: 'array', of: [{ type: 'string' }] },
        { name: 'middle', title: 'Orta notlar', type: 'array', of: [{ type: 'string' }] },
        { name: 'base', title: 'Baza notları', type: 'array', of: [{ type: 'string' }] },
      ],
    }),
    defineField({
      name: 'mainImage',
      title: 'Əsas şəkil (kateqoriya səhifəsində görünür)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'sizes',
      title: 'Ölçülər və Qiymətlər',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Ölçü',
          fields: [
            {
              name: 'ml',
              title: 'Həcm (ml)',
              type: 'number',
              validation: (R) => R.required(),
            },
            {
              name: 'price',
              title: 'Qiymət (₼)',
              type: 'number',
              validation: (R) => R.required().min(0),
            },
            {
              name: 'image',
              title: 'Bu ölçünün şəkli',
              type: 'image',
              options: { hotspot: true },
            },
            {
              name: 'inStock',
              title: 'Stokda var?',
              type: 'boolean',
              initialValue: true,
            },
          ],
          preview: {
            select: {
              ml: 'ml',
              price: 'price',
            },
            prepare(selection) {
  const ml = selection.ml
  const price = selection.price
  return {
    title: `${ml}ml — ${price} ₼`,
  }
},
          },
        },
      ],
    }),
    defineField({
      name: 'inStock',
      title: 'Ümumi stok (aktiv?)',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'featured',
      title: 'Öne çıxarılsın?',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})