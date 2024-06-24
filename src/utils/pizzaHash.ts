/*
 * Реализует расчет хеша пиццы на основе полей id, selectedSize, selectedToppings и finalPrice.
 * Не учитывает никаких полей интерфейса IPizza, кроме id. Предполагается, что не существует разных пицц с одним id.
 * Кроме того, не учитывает поле amountInCart интерфейса IPizzaToCart, поэтому два объекта, реализующих интерфейс
 * IPizzaToCart с полностью одинаковыми полями (кроме поля amountInCart) будут иметь одинаковый хеш.
 *
 * Это простейшая детерминированная хэш-функция. Начинает выдавать коллизии в ~50% случаев на >=50.000 элементах.
 */
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
