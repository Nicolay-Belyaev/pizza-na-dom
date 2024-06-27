export const storeStateToBase64 = () => {
    const store = useCartStore().inCartPizzas
    const cipheredStore= store.map((pizzaInStore) => {
         return [
            pizzaInStore.id,
            pizzaInStore.selectedSize,
            pizzaInStore.selectedToppings,
            pizzaInStore.selectedSauce,
            pizzaInStore.finalPrice,
            pizzaInStore.amountInCart,
            pizzaInStore.pizzaHash
        ]})
    console.log(cipheredStore)
    return btoa(JSON.stringify(cipheredStore));
}

export const base64StoreToFullStore = (base64: string) => {
    const pizzaStore = usePizzaStore();
    const cipheredStore = JSON.parse(atob(base64));
    const restoredStore: Array<IPizzaToCart> = cipheredStore.map((cipheredPizza: any) => {
       const pizzaByID = pizzaStore.getPizzaById(cipheredPizza[0]);
        console.log(pizzaByID)
       if (pizzaByID) {
           return {
               id: cipheredPizza[0],
               name: pizzaByID.name,
               description: pizzaByID.description,
               image: pizzaByID.image,
               sizes: pizzaByID.sizes,
               prices: pizzaByID.prices,
               toppings: pizzaByID.toppings,
               sauces: pizzaByID.sauces,

               selectedSauce: cipheredPizza[33],
               selectedSize: cipheredPizza[1],
               selectedToppings: cipheredPizza[2],
               finalPrice: cipheredPizza[4],
               amountInCart: cipheredPizza[5],
               pizzaHash: cipheredPizza[6]
           }
       }
        console.log("Не смог найти такую пиццу в существующих пиццах.")
    })
    return restoredStore;
}
