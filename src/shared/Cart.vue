<script setup lang="ts">

  const cartStore = useCartStore();
  const inStore = cartStore.inCartPizzas
</script>

<template>
  <div class="container">
    <UiCardInCart
        v-for="pizzaInCart in inStore"
        :pizza-in-cart="pizzaInCart"
        :key="pizzaInCart.pizzaHash"/>
  </div>
</template>

<style scoped>

</style>
