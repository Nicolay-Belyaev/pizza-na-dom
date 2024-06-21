<script setup lang="ts">

defineProps({
  form: {
    type: String,
    default: 'rectangle'
  },
  color: {
    type: String,
    default: "light"
  }
})
</script>

<template>
  <button class="btn"
      :class="`btn__${form} btn__${color}`">
    <slot/>
  </button>
</template>

<style scoped lang="scss">
.btn {
  height: 35px;
  border: none;
  font-size: 13px;
  cursor: pointer;
}
.btn__sizepicker_form {
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 20px;
}
.btn__sizepicker_color {
  background-color: $brand;
  color: $textColor2;
}
</style>
