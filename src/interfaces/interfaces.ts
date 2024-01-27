export interface IProducts {
    limit: number;
    skip: number;
    total: number;
    products: IProduct[]
}

export interface IProduct {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: Array<string>;
}

export type ICategories = {
    categories: Array<string>
}