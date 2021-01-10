<template>
  <input type="number" :value="value" @input="handleChange" />
</template>

<script setup lang="ts">
import { defineEmit, defineProps } from 'vue'

const props = defineProps({
  schema: {
    type: Object,
    required: true,
  },
  value: {
    required: true,
  },
  onChange: {
    type: Function,
    required: true,
  },
})
defineEmit(['onChange'])

const handleChange = (e: any) => {
  const value = e.target.value

  const num = Number(value)

  if (Number.isNaN(num)) {
    props.onChange(undefined)
  } else {
    props.onChange(num)
  }
}
</script>
