<script setup lang="ts">
import {useRoute} from 'vue-router';
import {useToppingStore} from "~/app/stores/toppingsStore";

const route = useRoute();
const pizza = usePizzaStore().getPizzaById(`${route.params.id}`);
console.log(pizza)
const toppings = useToppingStore().toppings;

const selectedTopping = ref([])
const selectedSize = ref('25')

// const finalPrice = computed(() => pizza?.params[selectedSize.value].toppings.reduce((acc, topping) =>
//     selectedTopping.value.includes(topping.name) ? acc + topping.price : acc, pizza?.params[selectedSize.value].price))
</script>

<template>

  <div class="pizza">
    <img :src="`${pizza.image}`">
    <div class="pizza__constructor">
      <h2>{{ pizza.name }}</h2>
      <p></p>
      <div>
        <p>выберите размер пиццы</p>
        <UiWidgetsRadioButtons
            v-model="selectedSize"
            :checkboxes="pizza.sizes"/>
      </div>

      <div>
<!--        <UiCheckboxGroup-->
<!--            v-model:value="selectedTopping"-->
<!--            name="toppings"-->
<!--            :options="toppings">-->
<!--        </UiCheckboxGroup>-->
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
