<script setup lang="ts">
import {useRoute} from 'vue-router';
import {usePizzaStore} from "~/app/stores/pizzaStore";
import {useToppingStore} from "~/app/stores/toppingStore";


const route = useRoute();
const pizzaStore = usePizzaStore();
const toppingStore = useToppingStore();

const pizza = pizzaStore.getPizzaById(`${route.params.id}`);
const toppings = toppingStore.getToppings();
const selectedTopping = ref<string[]>([]);
const indexSelectedSize = ref<string>('0');

const finalPrice = computed((): number | undefined => {
  if (!pizza) return undefined;

  return toppings.reduce((acc: number, topping) => selectedTopping.value.includes(topping.name)
          ? +acc + +topping.price[parseInt(indexSelectedSize.value)]
          : +acc
      , +pizza.prices[parseInt(indexSelectedSize.value)]);
});
</script>

<template>

  <div class="pizza">
    <img :src="`${pizza.image}`">
    <div class="pizza__constructor">
      <h2>{{ pizza.name }}</h2>
      <p>{{ finalPrice }}р</p>
      <div>
        <p>выбирите размер пиццы</p>
        <UiWidgetsRadioButtons
            v-model="indexSelectedSize"
            :checkboxes="pizza.sizes"/>
      </div>

      <div>
        <UiCheckboxGroup
            v-model:value="selectedTopping"
            name="toppings"
            :options="toppings"
            :index="indexSelectedSize">
        </UiCheckboxGroup>
      </div>

      <select>

      </select>
      <UiBaseButton form="sizepicker-form"
                    color="sizepicker-color">
        добавить в корзину
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

.group-checkbox {
  @include flexd();
}
</style>