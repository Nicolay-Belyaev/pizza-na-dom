export function simpleHash(pizza: IPizzaToCart) {
    let hash = 0;
    const stringToHash = pizza.id + pizza.selectedToppings.join(',') + pizza.finalPrice + pizza.selectedSize;
    for (let i = 0; i < stringToHash.length; i++) {
        const char = stringToHash.codePointAt(i);
        char ? hash = (hash << 5) - hash + char : (hash << 5) - hash;
        hash |= 0; // Преобразование в 32-битное целое число
    }
    return hash;
}
