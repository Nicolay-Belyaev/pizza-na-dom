import {pizzasToCartEquality} from "~/src/utils/pizzasToCartEquality";

export const useCartStore = defineStore('appStore', () => {
    const inCartPizzas: Array<IPizzaToCart> = [];

    const toppingsEquality = (firstPizzaToppings: string[], secondPizzaToppings: string[]) => {
        if (firstPizzaToppings.length !== secondPizzaToppings.length) {
            return false;
        }
        return firstPizzaToppings.every((topping) => {
            return secondPizzaToppings.includes(topping)
        })
    }

    const pizzasToCartEquality = (pizza1: IPizzaToCart, pizza2: IPizzaToCart) => {
        return !(
            pizza1.id !== pizza2.id ||
            pizza1.selectedSize !== pizza2.selectedSize ||
            pizza1.finalPrice !== pizza2.finalPrice ||
            !toppingsEquality(pizza1.selectedToppings, pizza2.selectedToppings)
        );
    }
    const addToCart = (incomingPizza: IPizzaToCart) => {
        const samePizzaInCart = inCartPizzas.find((pizzaInCart) => {
            pizzasToCartEquality(incomingPizza, pizzaInCart)
            })
        samePizzaInCart ? samePizzaInCart.amountInCart++ : inCartPizzas.push(incomingPizza)
    }
    const removeFromCart = ()

    return { inCartPizzas, toppingsEquality, pizzasToCartEquality, addToCart }
})
