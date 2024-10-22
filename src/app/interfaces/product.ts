export interface Product {
    id?: string;
    title: string;
    description: string;
    category: string;
    image: string;
    price: number;
    stock: number;
    rating?: {
        rate: number,
        count: number
    };
    created?: Date;
}
