<script setup lang="ts">/**
  Creates a two-way bound set of checkboxes of the following size.
  @property checkboxes - Array<Checkbox> - array of objects what represents checkboxes.
*/

defineProps({
    checkboxes: {
      type: Array<String>,
      default:[],
      required: true
    },
})

defineModel();
</script>

<template>
  <div class="radio-container" :class="{}">
    <UiBaseButton
        v-for="checkbox in checkboxes"
        :key="checkbox"
        :class="{ active: checkbox == modelValue}"
        @click="$emit('update:modelValue', checkbox)">
      {{ checkbox }}
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
