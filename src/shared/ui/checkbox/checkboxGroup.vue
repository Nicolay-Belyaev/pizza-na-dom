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
    type: Array,
    required: true,
    validator: (value: Array) => {
      const hasNameKey = value.every((option: object) => Object.keys(option).includes('name'));
      const hasIdKey = value.every((option: object) => Object.keys(option).includes('id'));
      return hasNameKey && hasIdKey;
    },
    default: ''
  },
})

const check = (params: Object) => {
  let updateValue = [...props.value]
  if (params.checked) {
      updateValue.push(params.optionId)
  } else {
    updateValue.splice(updateValue.indexOf(params.optionId), 1)
  }
  emit('update:value', updateValue)
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