<script setup lang="ts">
  import type {PropType} from "vue";
  import Plus from "~/src/shared/ui/icons/Plus.vue";
  import Minus from "~/src/shared/ui/icons/Minus.vue";
  import Cross from "~/src/shared/ui/icons/Cross.vue";
  const cartStore = useCartStore()

  defineProps({
    pizzaInCart: {
      type: Object as PropType<IPizzaToCart>,
      default: {} // TODO: сделать заглушку
    }
  })
</script>

<template>
  <div class="container">
    <img class="image" :src="pizzaInCart.image" alt="pizzaImg">
    <div class="description">
      <span class="name">{{ pizzaInCart.name }}</span>
      <span v-for="topping in pizzaInCart.selectedToppings">{{ topping }}</span>
      <span class="price">{{ pizzaInCart.finalPrice }}</span>
    </div>
    <div class="controls">
      <div class="button_switch">
        <UiBaseButton @click="cartStore.increaseAmountInCart(pizzaInCart.pizzaHash)">
          <Plus color="black"/>
        </UiBaseButton>
        {{ pizzaInCart.amountInCart }}
        <UiBaseButton @click="cartStore.decreaseAmountInCart(pizzaInCart.pizzaHash)">
          <Minus color="black"/>
        </UiBaseButton>
      </div>
      <UiBaseButton @click="cartStore.purgeFromCart(pizzaInCart.pizzaHash)">
        <Cross color="black"/>
      </UiBaseButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .container {
    background: white;
    border-radius: 5px;
    height: 220px;
    width: 600px;
    display: flex;
    align-items: center;
    padding: 0 5px 0 5px ;
  }
  .image {
    border-radius: 5px;
    height: 200px;
    width: 200px;
  }
  .description {
    height: 200px;
    width: 350pc;
    display: flex;
    flex-direction: column;
  }
  .controls {
    height: 200px;
    width: 150px;
    display: flex;
    flex-direction: column;
  }
  .button_switch {
    height: 50px;
    width: 100px;
    background: lightgrey;
    border-radius: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
</style>
