export interface IProducts {
  id: number
  title: string
  price: number
  description: string
  image: string
  configurations: TypeConfigurations
}

export interface TypeConfigurations {
  carcase: string,
  drive: string,
  engine: string
}

