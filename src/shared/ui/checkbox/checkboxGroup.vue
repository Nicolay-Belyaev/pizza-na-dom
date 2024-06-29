<script setup lang="ts">

const emit = defineEmits(['update:value'])
const props = defineProps({
  index: {
    type: String,
    required: true,
  },
  value: { // выбранные значение
    type: Array,
    default: []
  },
  name: {
    type: String,
    required: true,
    default: ''
  },
  options: {
    type: Array,
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
  console.log(updateValue)
}
</script>

<template>
  <div class="row__checkbox" v-for="option in options" :key="option.name">
    <UiCheckbox
        :label="option.name"
        :id="option.name"
        :name="name"
        :value="option.name"
        :checked="value.includes(option.name)"
        group
        @updateCheckboxGroup="check"/>
    <span>{{ option.price[index] }}</span>
  </div>
</template>

<style scoped>
.row__checkbox {
  margin-bottom: 5px;
  display: flex;
  gap: 10px;
}
</style>