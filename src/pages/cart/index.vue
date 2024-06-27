<script setup lang="ts">

const cartStore = useCartStore();

</script>

<template>
  <h1>Корзина</h1>
  <div class="container">
    <UiCardInCart
        v-for="pizzaInCart in cartStore.inCartPizzas"
        :pizza-in-cart="pizzaInCart"
        :key="pizzaInCart.pizzaHash"/>
  </div>
</template>

<style scoped>

</style>
