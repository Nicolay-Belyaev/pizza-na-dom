interface ITopping {
    name: string;
    price: string[];
}
interface IToppings {
    [key: string]: ITopping;
}

