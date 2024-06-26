export const useToppingStore = defineStore('pizzaStore', () => {
    const toppings = ref<IToppings>({
        1: {name: "моцарелла", price: [10, 20, 30]},
        2: {name: "моцарелла", price: [10, 20, 30]},
    });

    return { toppings };
});