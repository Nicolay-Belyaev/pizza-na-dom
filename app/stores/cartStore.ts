/**
 * Стор для корзины.
 * Основа работы стора корзины - наличие у каждой находящейся в корзине пиццы хеша.
 * Поэтому, каждая пицца, которая попадает в стор, должна реализовывать интерфейс IPizzaToCart.
 * Ответственность за расчет хеша лежит на самом сторе (см. подробнее utils/simpleHash.ts).
 * Ответственность за реализацию пиццами интерфеса IPizzaToCart лежит на компонентах, добавляющих пиццы в стор.
 */
import {simpleHash} from "~/src/utils/pizzaHash";

export const useCartStore = defineStore('cartStore', () => {
    const inCartPizzas: Array<IPizzaToCart> = reactive([]);

    const getPizzaByHash = (hash: number) => {
        return inCartPizzas.find((pizza) => pizza.pizzaHash === hash);
    }

    // TODO: Тут надо хорошо подумать о крайних и угловых случаях и обработке ошибок.
    // TODO: Написать тесты.

    /*
     * addToCart вычисляет хеш для "новой" пиццы,
     * проверяет, есть ли уже в сторе пицца таким же хешем и:
     * либо увеличивает количество в уже лежащей в сторе пицце (amountInCart),
     * либо добавляет в стор новую пиццу.
     */
    const addToCart = (incomingPizza: IPizzaToCart) => {
        incomingPizza.pizzaHash = simpleHash(incomingPizza); // store заботится о расчете хеша.
        const samePizzaInCart = getPizzaByHash(incomingPizza.pizzaHash) // ищем в сторе совпадение
        samePizzaInCart ? samePizzaInCart.amountInCart++ : inCartPizzas.push(incomingPizza);
    };

    const purgeFromCart = (incomingPizzaHash: number) => {
        const pizzaIndexInCart = inCartPizzas.findIndex((pizza) =>
            pizza.pizzaHash === incomingPizzaHash
        );
        if (pizzaIndexInCart === -1) {
            console.log("Не смог найти такую пиццу в корзине!");
            return;
        }
        inCartPizzas.splice(pizzaIndexInCart, 1)
    }

    const increaseAmountInCart = (incomingPizzaHash: number) => {
        const pizzaInCart = getPizzaByHash(incomingPizzaHash);
        pizzaInCart ? pizzaInCart.amountInCart++ : console.log("Не смог найти такую пиццу в корзине!");
    }

    const decreaseAmountInCart = (incomingPizzaHash: number) => {
        const pizzaInCart = getPizzaByHash(incomingPizzaHash);
        if (!pizzaInCart) {
            console.log("Не смог найти такую пиццу в корзине!");
            return;
        }
        pizzaInCart.amountInCart--;
        if (pizzaInCart.amountInCart === 0) {
            purgeFromCart(incomingPizzaHash)
        }
    }

    return { inCartPizzas, addToCart,  purgeFromCart, increaseAmountInCart, decreaseAmountInCart }
})
