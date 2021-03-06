interface BlogPostMeta {
  id: number
  title: string
  description: string
  image: string
  readMinutes: number
  category: string
  series?: string
  tags: string[]
  slug: string
  published: boolean
  datePublished: string
  dateModified: string
  images: string[]
}

interface TocEntry {
  depth: number
  value: string
}
