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
export const PACKAGING_QUERY = groq`
  *[_type == "packaging"] | order(price asc) {
    _id, tier, price, items, popular
  }
`
export const ACTIVE_CAMPAIGNS_QUERY = groq`
  *[_type == "campaign" && active == true] | order(_createdAt desc) {
    _id, title, subtitle, description,
    type, buttonText, buttonLink,
    discountCode, discountPercent,
    color, startDate, endDate
  }
`

export const DELIVERY_QUERY = groq`
  *[_type == "delivery" && active == true] | order(order asc) {
    _id, name, description, days, price
  }
`
export const PACKAGING_QUERY_ACTIVE = groq`
  *[_type == "packaging" && active == true] | order(order asc) {
    _id, name, price, items, popular
  }
`