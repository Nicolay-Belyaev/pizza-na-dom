<script setup lang="ts">
const pizzaCards = usePizzaStore().pizzaCards;

</script>

<template>
  <div>
    Это главная страница
    <UiCardsRenderer :pizza-cards="pizzaCards"/>
  </div>
</template>


<style scoped>
* {
  margin: 0 auto;
}
</style>
