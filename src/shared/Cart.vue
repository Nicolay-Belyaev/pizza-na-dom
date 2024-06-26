<script setup lang="ts">
  import {base64StoreToFullStore} from "~/src/utils/storeStatePrepareToBase64";

  const cartStore = useCartStore();
  const route = useRoute();
  cartStore.inCartPizzas = reactive((base64StoreToFullStore(`${route.query.state}`)))

</script>

<template>
  <div class="container">
    <UiCardInCart
        v-for="pizzaInCart in cartStore.inCartPizzas"
        :pizza-in-cart="pizzaInCart"
        :key="pizzaInCart.pizzaHash"/>
  </div>
</template>

<style scoped>

</style>
