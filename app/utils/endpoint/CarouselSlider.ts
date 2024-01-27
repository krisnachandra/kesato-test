
export interface CarouselSliderRoot {
  data: CarouselSliderChild[]
  length: number
}

export interface CarouselSliderChild {
  id: number
  image: string
  price: string
  alt: string
}