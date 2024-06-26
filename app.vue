<template>
  <div id="app">
    <NuxtLayout>
      <header>
        <ul class="links">
          <li class="link">
            <NuxtLink to="/">Домой</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="{ name: 'cart', query: {state: chstate} }">Корзина</NuxtLink>
          </li>
        </ul>
      </header>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import {storeStateToBase64} from "~/src/utils/storeStatePrepareToBase64";

const chstate = (computed(() => {
  return storeStateToBase64(useCartStore().inCartPizzas)
}))


</script>
<style lang="scss" scoped>
.links {
  margin-bottom: 30px;
  padding-top: 20px;
  padding-right: 50px;
  display: flex;
  justify-content: end;
  column-gap: 15px;
}
</style>
