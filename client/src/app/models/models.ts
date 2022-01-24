export interface IImage {
  source: string
  name: string
}

export interface ISoundDetailsModal {
  show: boolean
  image: IImage
  onShow: (show: boolean) => void
}

export interface IItemaCpontainerModel {
  images: IImage[]
}

export interface ISound {
  id: string
  icon: string
  name: string
}
