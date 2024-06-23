<script setup lang="ts">
const checkboxActive = ref(true)
const checkboxDisabled = ref(true)
const checkboxDisabledChecked = ref(true)
const props = defineProps({
  toppings: {
    type: Array,
    required: true,
    validator: (value: Array) => {
      const hasNameKey = value.every((option: object) => Object.keys(option).includes('name'));
      const hasIdKey = value.every((option: object) => Object.keys(option).includes('id'));
      return hasNameKey && hasIdKey;
    }
  }
})
const toppings = [
  {name: "Bell Peppers", id: 't1'},
  {name: "Mushrooms", id: 't2'},
  {name: "Onions", id: 't3'}
]
const selectedTopping = ref(['t1', 't2'])
</script>

<template>
  <p>Selected Topping: {{ selectedTopping }}</p>
  <UiCheckboxGroup
      v-model:value="selectedTopping"
      name="toppings"
      :options="toppings">
  </UiCheckboxGroup>
</template>

<style lang="scss" scoped>
.group-checkbox {
  @include flexd();
}
</style>