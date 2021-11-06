import { IProduct } from "./Product";

export interface IOrder {
    id: string,
    date: Date,
    product: IProduct,
    quantity: number
}