<script setup lang="ts">
import {usePizzaStore} from "~/app/stores/pizzaStore";
const pizzaCards = usePizzaStore().pizzaCards;
</script>

<template>
  <div>
    <UiCardsRenderer :pizza-cards="pizzaCards"/>
  </div>
</template>

<style scoped>
* {
  margin: 0 auto;
}
</style>
