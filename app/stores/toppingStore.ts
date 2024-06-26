export const useToppingStore = defineStore('pizzaStore', () => {
    const toppings = ref<IToppings>({
        '1': {name: "моцарелла", price: ['10', '20', '30']},
        '2': {name: "пепперони", price: ['10', '20', '30']},
        '3': {name: "черри", price: ['10', '20', '30']},
        '4': {name: "бекон", price: ['10', '20', '30']},
        '5': {name: "ветчина", price: ['10', '20', '30']},
        '6': {name: "шампиньоны", price: ['10', '20', '30']},
    });

    return { toppings };
});