export type ProjectT = { img: HTMLImageElement, name: string, link: string }
export type ProductT = {
  img: string,
  title: string,
  type: string,
}

export type BlogT = {
  title: string,
  uploadedFile: { id: string }[],
  id: number,
  link: "",
  createdAt: string
}

export type StoneT = {
  title: string,
  abrasion: string,
  uploadedFile: { id: number }[],
  categoryTitle: string,
  country: string,
  id: number,
  variants: { format: string, pricerub: string, priceusd: string, product: string }[],
  createdAt: string
}

export type ServiceT = {
  id: number,
  title: string,
  info: string,
  interorekster: string,
  serviceTitle: string,
  uploadedFile: {id: number}[]
}