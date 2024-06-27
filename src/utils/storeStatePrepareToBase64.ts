export const storeStateToBase64 = (store: Array<IPizzaToCart>) => {
    const cipheredStore= store.map((pizzaInStore) => {
         return [
            pizzaInStore.id,
            pizzaInStore.selectedSize,
            pizzaInStore.selectedToppings,
            pizzaInStore.finalPrice,
            pizzaInStore.amountInCart,
            pizzaInStore.pizzaHash
        ]})
    return btoa(JSON.stringify(cipheredStore));
}

export const base64StoreToFullStore = (base64: string) => {
    const pizzaStore = usePizzaStore();
    const cipheredStore = JSON.parse(atob(base64));
    const restoredStore: Array<IPizzaToCart> = cipheredStore.map((cipheredPizza: any) => {
       const pizzaByID = pizzaStore.getPizzaById(cipheredPizza[0]);
       if (pizzaByID) {
           return {
               id: cipheredPizza[0],
               name: pizzaByID.name,
               description: pizzaByID.description,
               image: pizzaByID.image,
               sizes: pizzaByID.sizes,

               prices: pizzaByID.prices,
               toppings: pizzaByID.toppings,
               selectedSize: cipheredPizza[1],
               selectedToppings: cipheredPizza[2],
               finalPrice: cipheredPizza[3],
               amountInCart: cipheredPizza[4],
               pizzaHash: cipheredPizza[5]
           }
       }
        console.log("Не смог найти такую пиццу в существующих пиццах.")
    })
    return restoredStore;
}
