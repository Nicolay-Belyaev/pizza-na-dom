// во многом работа этого стора полагается на то, что не существует одинаковых пицц с разными ID
import {simpleHash} from "~/src/utils/pizzaHash";

export const useCartStore = defineStore('appStore', () => {
    const inCartPizzas: Array<IPizzaToCart> = [];

    const getPizzaByHash = (hash: number) => {
        return inCartPizzas.find((pizza) => pizza.pizzaHash === hash);
    }

    // Тут надо хорошо подумать о крайних и угловых случаях и обработке ошибок.
    const addToCart = (incomingPizza: IPizzaToCart) => {
        incomingPizza.pizzaHash = simpleHash(incomingPizza); // store заботится о расчете хеша.
        const samePizzaInCart = getPizzaByHash(incomingPizza.pizzaHash)
        samePizzaInCart ? samePizzaInCart.amountInCart++ : inCartPizzas.push(incomingPizza);
    };

    const purgeFromCart = (incomingPizzaHash: number) => {
        const pizzaIndexInCart = inCartPizzas.findIndex((pizza) =>
            pizza.pizzaHash === incomingPizzaHash
        );
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

    return { inCartPizzas, addToCart,  purgeFromCart}
})
