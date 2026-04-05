import { defineField, defineType } from 'sanity'

export const campaignSchema = defineType({
  name: 'campaign',
  title: 'Kampaniya & Banerlər',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Başlıq (məs: 20% Endirim!)',
      type: 'string',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Alt başlıq (məs: Bütün Creed ətirlərə)',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Ətraflı mətn (istəyə görə)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'type',
      title: 'Baner növü',
      type: 'string',
      options: {
        list: [
          { title: '🔴 Endirim baneri (yuxarıda çıxır)', value: 'topbar' },
          { title: '🟡 Ana səhifə baneri (böyük)', value: 'hero' },
          { title: '🟢 Popup (səhifə açılanda çıxır)', value: 'popup' },
        ],
      },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'buttonText',
      title: 'Düymə mətni (məs: İndi Al, Bax)',
      type: 'string',
    }),
    defineField({
      name: 'buttonLink',
      title: 'Düymə linki (məs: /kisi)',
      type: 'string',
    }),
    defineField({
      name: 'discountCode',
      title: 'Endirim kodu (məs: RAVION20)',
      type: 'string',
    }),
    defineField({
      name: 'discountPercent',
      title: 'Endirim faizi (məs: 20)',
      type: 'number',
    }),
    defineField({
      name: 'active',
      title: 'Aktiv? (söndürmək üçün false et)',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'startDate',
      title: 'Başlama tarixi',
      type: 'datetime',
    }),
    defineField({
      name: 'endDate',
      title: 'Bitmə tarixi',
      type: 'datetime',
    }),
    defineField({
      name: 'color',
      title: 'Baner rəngi',
      type: 'string',
      options: {
        list: [
          { title: 'Qızıl (standart)', value: 'gold' },
          { title: 'Qırmızı (təcili)', value: 'red' },
          { title: 'Tünd (lüks)', value: 'dark' },
        ],
      },
      initialValue: 'gold',
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'type', active: 'active' },
    prepare({ title, subtitle, active }) {
      const typeLabel = subtitle === 'topbar' ? 'Yuxarı baner' : subtitle === 'hero' ? 'Ana səhifə' : 'Popup'
      return {
        title: `${active ? '🟢' : '🔴'} ${title}`,
        subtitle: typeLabel,
      }
    },
  },
})