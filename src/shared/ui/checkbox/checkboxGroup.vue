<script setup lang="ts">
const emit = defineEmits(['update:value'])
const props = defineProps({
  value: {
    type: Array,
    default: ''
  },
  options: {
    type:Array,
    required: true,
  },
})

const check = (params: Object) => {
  let updateValue = [...props.value]
  if (params.checked) {
      updateValue.push(params.optionValue)
  } else {
    updateValue.splice(updateValue.indexOf(params.optionValue), 1)
  }
  emit('update:value', updateValue)
  console.log(params)
}
</script>

<template>
  <div v-for="option in options" :key="option.id">
    <UiCheckbox
        :label="option.name"
        :id="option.name"
        :value="option.name"
        :checked="value.includes(option)"
        group
        @updateCheckboxGroup="check"/>
  </div>
</template>

<style scoped>

</style>