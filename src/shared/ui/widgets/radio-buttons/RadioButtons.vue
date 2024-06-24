<script setup lang="ts">/**
  Creates a two-way bound set of checkboxes of the following size.
  @property checkboxes - Array<checkbox> - array of objects what represents checkboxes.
*/

defineProps({
    checkboxes: {
      type:Array<ICheckbox>,
      default:[],
      required: true
    },
    inCollomn: {
      type: Boolean,
      default: false
    }
})

defineModel();
</script>

<template>
  <div class="radio-container" :class="{inCollomn: inCollomn}">
    <UiBaseButton
        v-for="checkbox in checkboxes"
        :key="checkbox.value"
        :class="{ active: checkbox.value == modelValue}"
        @click="$emit('update:modelValue', checkbox.value)">
      {{ checkbox.value }}
    </UiBaseButton>
  </div>
</template>


<style lang="scss" scoped>
  .radio-container {
    display: flex;
    gap: 10px
  }

  .inCollomn {
    flex-direction: column;
  }
  .active {
    background-color: $dark-brand;
  }
</style>
