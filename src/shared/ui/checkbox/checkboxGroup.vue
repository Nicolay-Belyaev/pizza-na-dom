<script setup lang="ts">
import {SymbolKind} from "vscode-languageserver-types";
import Array = SymbolKind.Array;

const emit = defineEmits(['update:value'])
const props = defineProps({
  value: {
    type: Array,
    default: []
  },
  name: {
    type: String,
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
}
</script>

<template>
  <div v-for="option in options" :key="option.name">
    <UiCheckbox
        :label="option.name"
        :id="option.name"
        :name="name"
        :value="option"
        :checked="value.includes(option)"
        group
        @updateCheckboxGroup="check"/>
  </div>
</template>

<style scoped>

</style>