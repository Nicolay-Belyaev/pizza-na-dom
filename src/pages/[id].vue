<script setup lang="ts">
import {useRoute} from 'vue-router';
import {usePizzaStore} from "~/app/stores/pizzaStore";

const route = useRoute();
const pizza = usePizzaStore().getPizzaById(`${route.params.id}`);
const selectedTopping = ref([])
const selectedSize = ref(25)
const finalPrice = ref(pizza?.params.small.price)

const topings = computed((selectedSize) => {
  let resultArr = [];
  pizza?.params.small.toppings.forEach((item: object) => {
    resultArr.push({nameitem.name})
  })
  return resultArr;
})
const sizes = computed(() => {
  let resultArr = [];
  Object.keys(pizza?.params).forEach((item: string) => {
    resultArr.push(pizza?.params[item].sizeInSm)
  })
  return resultArr;
})
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
            v-model="selectedSize"
            :checkboxes="sizes"/>
      </div>

      <div>
        <UiCheckboxGroup
            v-model:value="selectedTopping"
            name="toppings"
            :options="topings">
        </UiCheckboxGroup>
        <span></span>
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
