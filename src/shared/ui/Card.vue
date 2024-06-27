<script setup lang="ts">
  import type {PropType} from "vue";

  const props = defineProps({
    pizza: {
      type: Object as PropType<IPizza>,
      default: {} // накидать заглушку на случай отсутствия данных
    }
  })

  const addPizzaToCart_TEMPORAL = () => {
    useCartStore().addToCart({
      id: props.pizza.id,
      name: props.pizza.name,
      description: props.pizza.description,
      image: props.pizza.image,
      sizes: props.pizza.sizes,
      prices: props.pizza.prices,
      toppings: props.pizza.toppings,
      sauces: props.pizza.sauces,

      selectedSauce: "sauce 2",
      selectedSize: "size 25",
      selectedToppings: ["topping 1", "topping 5"],
      finalPrice: 750,
      amountInCart: 1,
      pizzaHash: 0
    })
  }

</script>

<template>
  <div class="card">
    <img class="image" :src="pizza.image" alt="pizza-image">
    <div class="description">
      <div class="description__name">{{ pizza.name }}</div>
      <div class="description__text">{{ pizza.description }}</div>
      </div>
    <div class="price">
      <span v-if="pizza.prices.length > 1">от </span>
      <span>{{ pizza.prices[0] }} ₽</span>
    </div>
    <NuxtLink
        :to="{ name: 'id', params: {id: 'id-' + pizza.id} }">
      <UiBaseButton
          form="sizepicker-form"
          color="sizepicker-color">
        Выбрать размер
      </UiBaseButton>
    </NuxtLink>
    <button @click="addPizzaToCart_TEMPORAL">Добавить в корзину</button>
  </div>
</template>

<style lang="scss" scoped>
  .card {
    background: white;
    border-radius: 5px;
    height: 500px;
    width: 260px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .image {
    height: 260px;
    width: 260px;
    border-radius: 5px;
  }
  .name {
    font-size: 1.5rem;
  }
  .description {
    margin-top: 12px;
    height: 200px;
    padding: 0 40px 0 40px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    &__name {
      font-size: 1.4rem;
      height: 80px;
    }
    &__text {
      line-height: 1.4;
      font-size: 0.8rem;
    }

  }
  .price {
    height: 25px;
    font-size: 1.2rem;
  }
</style>

