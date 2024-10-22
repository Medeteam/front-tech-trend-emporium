export interface Product {
    id: string;
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

//     "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//   "title": "string",
//   "price": 0,
//   "description": "string",
//   "category": "string",
//   "image": "string",
//   "rating": {
//     "rate": 0,
//     "count": 0
//   },
//   "stock": 0,
//   "created": "2024-10-21T23:36:38.798Z"
}
