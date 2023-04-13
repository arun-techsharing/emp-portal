export interface product {
    prodId?: number,
    prodName: string,
    price: number,
    quantiyAvl: number,
    size: string,
    discount: number,
    specifications?: string,
    returnPolicy?: string,
    relatedProd?: string
}