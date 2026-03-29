import { groq } from 'next-sanity'

export const ALL_PERFUMES_QUERY = groq`
  *[_type == "perfume"] | order(_createdAt desc) {
    _id, name, slug, brand, gender,
    description, notes, pricePerMl,
    inStock, featured, image
  }
`

export const PERFUMES_BY_GENDER_QUERY = groq`
  *[_type == "perfume" && gender == $gender] | order(_createdAt desc) {
    _id, name, slug, brand, gender,
    description, notes, pricePerMl,
    inStock, featured, image
  }
`

export const PERFUME_BY_SLUG_QUERY = groq`
  *[_type == "perfume" && slug.current == $slug][0] {
    _id, name, slug, brand, gender,
    description, longDescription, notes,
    pricePerMl, inStock, featured, image, gallery
  }
`

export const FEATURED_PERFUMES_QUERY = groq`
  *[_type == "perfume" && featured == true][0...6] {
    _id, name, slug, brand, gender,
    description, notes, pricePerMl,
    inStock, image
  }
`

export const GIFT_BOXES_QUERY = groq`
  *[_type == "giftBox"] | order(_createdAt desc) {
    _id, name, slug, description,
    price, includes, image
  }
`