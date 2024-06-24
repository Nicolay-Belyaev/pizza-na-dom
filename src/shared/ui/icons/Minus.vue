<template>
  <svg :fill="props.color"
       id="Layer_1" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"
       data-name="Layer 1">
    <path d="M15 12.75C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25H9C8.58579 11.25 8.25 11.5858 8.25 12C8.25 12.4142 8.58579 12.75 9 12.75H15Z"/>
  </svg>
</template>

<script setup lang="ts">
  const props = defineProps({
  color: {
  type: String,
  default: '#000'
}
})
</script>

<style scoped>

</style>
