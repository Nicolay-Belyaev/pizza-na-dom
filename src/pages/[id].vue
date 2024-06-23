<script setup lang="ts">
import {useRoute} from 'vue-router';
import {usePizzaStore} from "~/app/stores/pizzaStore";

const nuxtApp = useNuxtApp();
const route = useRoute();
const pizza = usePizzaStore().getPizzaById(`${route.params.id}`);
</script>

<template>
  <div class="pizza">
    <img :src="`${pizza.image}`">
    <div class="pizza__constructor">
      <h2>{{ pizza.name }}</h2>
      <p>{{ pizza.prices[0] }}р</p>
      <div>
        <div>выбирите размер</div>
        <UiWidgetsRadioButtons :checkboxes="pizza.sizes"/>
      </div>

      <div>
        <UiCheckboxWrapper :toppings="pizza.toppings"/>
      </div>

      <select>

      </select>
      <UiBaseButton form="sizepicker-form"
                    color="sizepicker-color">добавить в корзину
      </UiBaseButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.pizza {
  padding-left: 30px;
  display: flex;
  gap: 30px;

  &__constructor {
    @include flexd();
    gap: 20px;
  }
}

img {
  width: 440px;
}
</style>
