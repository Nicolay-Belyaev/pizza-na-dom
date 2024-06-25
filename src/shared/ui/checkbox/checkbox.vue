<script setup lang="ts">
const emits = defineEmits(['update:checked', 'updateCheckboxGroup'])
const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    default: ''
  },
  value: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  checked: {
    type: Boolean,
    default: false
  },
  group: {
    type: Boolean,
    default: false
  },
})
const handleClick = ({target}: Object) => {
  if (props.group === true) {
    emits('updateCheckboxGroup', {optionValue: props.value, checked: target.checked})
  } else {
    emits('update:checked', target.checked)
  }
}
</script>

<template>
  <input
      class="custom-checkbox"
      type="checkbox"
      :name="props.name"
      :id="props.id"
      :value="props.value"
      :checked="props.checked"
      @input="handleClick($event)">
  <label :for="props.id">
    {{ value }}
  </label>

</template>

<style lang="scss" scoped>
.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.custom-checkbox + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
}

.custom-checkbox + label::before {
  content: '';
  display: inline-block;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid $border;
  border-radius: 0.25em;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}

.custom-checkbox:checked + label::before {
  border-color: $btnColor;
  background-color: $btnColor;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}

/* стили при наведении курсора на checkbox */
.custom-checkbox:not(:disabled):not(:checked) + label:hover::before {
  border-color: $brand;
}

/* стили для чекбокса, находящегося в фокусе */
.custom-checkbox:focus + label::before {
  box-shadow: 0 0 0 0.2rem rgba(242, 93, 80, 0.25);
}

/* стили для чекбокса, находящегося в состоянии disabled */
.custom-checkbox:disabled + label::before {
  background-color: #e9ecef;
}
</style>