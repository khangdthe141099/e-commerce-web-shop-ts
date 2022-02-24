export interface Products {
    _id: string
    title: string
    desc: string
    img: string
    categories: string[]
    size: string[]
    color: string[]
    quantity: string
    price: number
    inStock?: boolean
    sale: {
        isSale: boolean
        percent: number
    },
    view: number
    createdAt?: string
    updatedAt?: string
    v?: number
    rating: number
}

export type ProductsList = Products