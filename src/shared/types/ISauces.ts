interface ITopping {
    name: string;
    price: string;
}
interface ISaucesObject {
    [key: string]: ITopping;
}

