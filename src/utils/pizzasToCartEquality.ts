export const toppingsEquality = (firstPizzaToppings: string[], secondPizzaToppings: string[]) => {
    if (firstPizzaToppings.length !== secondPizzaToppings.length) {
        return false;
    }
    return firstPizzaToppings.every((topping) => {
        return secondPizzaToppings.includes(topping)
    })
}

export const pizzasToCartEquality = (pizza1: IPizzaToCart, pizza2: IPizzaToCart) => {
    return !(
        pizza1.id !== pizza2.id ||
        pizza1.selectedSize !== pizza2.selectedSize ||
        pizza1.finalPrice !== pizza2.finalPrice ||
        !toppingsEquality(pizza1.selectedToppings, pizza2.selectedToppings)
    );
}

