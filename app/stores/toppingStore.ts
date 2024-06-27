export const useToppingStore
    = defineStore('toppingStore', () => {
    const toppings = ref<IToppings[]>([
        {name: "моцарелла", price: ['10', '20', '30']},
        {name: "пепперони", price: ['10', '20', '30']},
        {name: "черри", price: ['10', '20', '30']},
        {name: "бекон", price: ['10', '20', '30']},
        {name: "ветчина", price: ['10', '20', '30']},
        {name: "шампиньоны", price: ['10', '20', '30']},
    ]);

    const getToppings = () => {
        return toppings.value;
    }
    return {toppings, getToppings};
});