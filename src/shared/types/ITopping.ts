interface ITopping {
    name: string;
    price: number[];
}
interface IToppings {
    [key: number]: ITopping;
}

