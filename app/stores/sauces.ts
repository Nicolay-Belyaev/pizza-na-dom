export const useSaucesStore = defineStore('pizzaStore', () => {
    const sauces = ref<ISaucesObject>({
        '1': {name: "моцарелла", price: '10'},
        '2': {name: "пепперони", price: '10'},
        '3': {name: "черри", price: '10'},
        '4': {name: "бекон", price: '10'},
        '5': {name: "ветчина", price: '10'},
        '6': {name: "шампиньоны", price: '10'},
    });

    return { sauces };
});