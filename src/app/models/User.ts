import { ILocation } from "./Location";
import { IOrder } from "./Order";

export interface IUser {
    id: string;
    name: string;
    surname: string,
    mail: string,
    imageUrl: string,
    location: ILocation,
    orders: IOrder
}