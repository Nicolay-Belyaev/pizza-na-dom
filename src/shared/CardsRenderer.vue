<template>
  <ul class="pizzas">
    <li v-for="pizza in pizzaCards">
      <UiCard :pizza="pizza"/>
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps({
  pizzaCards: {
    type: Array<IPizza>,
    default: {} // тут бы неплохо сделать заглушку
  }
})
</script>


<style scoped>
.pizzas {
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-template-rows: auto;
  column-gap: 25px;
  row-gap: 30px;
  justify-items: center;
}
</style>