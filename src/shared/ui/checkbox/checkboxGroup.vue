<script setup lang="ts">
const emit = defineEmits(['update:value'])
const props = defineProps({
  value: {
    type: Array,
    default: ''
  },
  name: {
    type: String,
    required: true,
  },
  options: {
    type:Array<IPizza>,
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
        :id="option.id"
        :name="name"
        :value="option.name"
        :checked="value.includes(option.id)"
        group
        @updateCheckboxGroup="check"/>
  </div>
</template>

<style scoped>

</style>