<script setup lang="ts">

import {base64StoreToFullStore, storeStateToBase64} from "~/src/utils/storeStatePrepareToBase64";

const cartStore = useCartStore();

const logCart = () => {
  console.log(cartStore.inCartPizzas);
  const base64Store = storeStateToBase64()
  base64StoreToFullStore(base64Store).forEach((pizza: IPizzaToCart) => {
    cartStore.addToCart(pizza)
  })
}

</script>

<template>
  <h1>Корзина</h1>
  <button @click="logCart">log Cart before incript</button>
  <div class="container">
    <UiCardInCart
        v-for="pizzaInCart in cartStore.inCartPizzas"
        :pizza-in-cart="pizzaInCart"
        :key="pizzaInCart.pizzaHash"/>
  </div>
</template>

<style scoped>

</style>
