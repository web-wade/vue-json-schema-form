<template>
  <input type="text" :value="value" @input="handleChange" />
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

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

const handleChange = (e: any) => {
  console.log(e)
  props.onChange(e.target.value)
}
</script>
