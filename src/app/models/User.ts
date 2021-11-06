export interface ILocation {
    address: string,
    city: string,
    cap: string
}

export interface IOrder {
    id: string,
    date: Date,
    product: IProduct,
    quantity: number
}

export interface IProduct {
    name: string,
    price: number
}

export interface IUser {
    id: string;
    name: string;
    surname: string,
    mail: string,
    imageUrl: string,
    location: ILocation,
    orders: IOrder[]
}

export class User implements IUser {
    private constructor(
        public id = '',
        public name = '',
        public surname = '',
        public mail = '',
        public imageUrl = '',
        public location: ILocation = {
            address: '',
            city: '',
            cap: ''
        },
        public orders: IOrder[] = []
    ) { }
    public static builtinModules(user: IUser): User {
        return new this(
            user.id,
            user.name,
            user.surname,
            user.mail,
            user.imageUrl,
            user.location,
            user.orders
        );
    }
}
