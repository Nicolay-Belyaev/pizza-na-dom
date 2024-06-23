/*
 * Описывает конкретную пиццу, для которой выбраны изменяемые параметры.
 */
interface IPizzaToCart extends IPizza {
    selectedSize: number | string,
    selectedToppings: string[],
    finalPrice: number,
    amountInCart: number,
    pizzaHash: number
}
