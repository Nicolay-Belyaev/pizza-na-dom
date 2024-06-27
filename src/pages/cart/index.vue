<script setup lang="ts">

import {useToppingsStore} from "~/app/stores/toppingsStore";

const cartStore = useCartStore();


const logCart = () => {

}

</script>

<template>
  <h1>Корзина</h1>
  <button @click="logCart">log Cart before incript</button>
  <button @click="logCart">log Cart after incript</button>
  <div class="container">
    <UiCardInCart
        v-for="pizzaInCart in cartStore.inCartPizzas"
        :pizza-in-cart="pizzaInCart"
        :key="pizzaInCart.pizzaHash"/>
  </div>
</template>

<style scoped>

</style>
