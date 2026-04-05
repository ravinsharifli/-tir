export type Gender = 'kisi' | 'xanim' | 'unisex'

export interface SanityImage {
  _type: 'image'
  asset: { _ref: string; _type: 'reference' }
}

export interface PerfumeSize {
  ml: number
  price: number
  image?: SanityImage
  inStock: boolean
}

export interface Perfume {
  _id: string
  name: string
  slug: { current: string }
  brand: string
  gender: Gender
  description: string
  longDescription?: string
  notes: { top: string[]; middle: string[]; base: string[] }
  mainImage: SanityImage
  sizes: PerfumeSize[]
  inStock: boolean
  featured: boolean
}

export interface GiftBox {
  _id: string
  name: string
  slug: { current: string }
  description: string
  price: number
  includes: string[]
  image: SanityImage
}

export type PackagingTier = 'standard' | 'premium' | 'luxury'

export interface PackagingOption {
  id: PackagingTier
  name: string
  description: string
  includes: string[]
  price: number
}

export const PACKAGING_OPTIONS: PackagingOption[] = [
  {
    id: 'standard',
    name: 'Standart',
    description: 'Şəffaf şüşə flakon',
    includes: ['Şəffaf şüşə qab', 'Sadə qutu', 'Kraft paket'],
    price: 0,
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Zərli hədiyyəlik qutu',
    includes: ['Zərli şüşə flakon', 'Hədiyyəlik qutu', 'Gözəl karton paket'],
    price: 9.99,
  },
  {
    id: 'luxury',
    name: 'Luxury',
    description: 'Tam hədiyyəlik set',
    includes: [
      'Zərli şüşə flakon',
      'Hədiyyəlik qutu',
      'Qutudaxili lazer yazı',
      'Bantik',
      'Hədiyyə kartı (seçimə görə)',
      'Kiçik hədiyyə ətir 5ml',
      'Gözəl karton paket',
    ],
    price: 19.99,
  },
]

export type DeliveryTier = 'standard' | 'express' | 'nextday'

export interface DeliveryOption {
  id: DeliveryTier
  name: string
  description: string
  days: string
  price: number
}

export const DELIVERY_OPTIONS: DeliveryOption[] = [
  { id: 'standard', name: 'Standart Çatdırılma', description: 'Bütün Azərbaycana', days: '3 iş günü', price: 0 },
  { id: 'express', name: 'Sürətli Çatdırılma', description: 'Bütün Azərbaycana', days: '2 iş günü', price: 5.49 },
  { id: 'nextday', name: 'Növbəti Gün', description: 'Bütün Azərbaycana', days: '1 iş günü', price: 9.99 },
]

export interface CartItem {
  perfumeId: string
  perfumeName: string
  brand: string
  ml: number
  pricePerMl: number
  packaging: PackagingTier
  packagingPrice: number
  quantity: number
}
export interface SanityPackaging {
  _id: string
  name: string
  price: number
  items: string[]
  popular: boolean
}

export interface SanityDelivery {
  _id: string
  name: string
  description: string
  days: string
  price: number
}