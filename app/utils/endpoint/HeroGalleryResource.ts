export interface HeroGalleryRoot {
  rows: HeroGalleryRow[]
}

export interface HeroGalleryRow {
  id: number
  imagesUrl: string
  alt: string
  title: string
  description: string
}