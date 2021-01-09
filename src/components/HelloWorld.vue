<template>
  <div class="hello">111</div>
  <dvi v-for="colum in list" :key="colum.title">{{ colum.title }}</dvi>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

interface ColumnProps {
  id: number
  title: string
}

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
    age: {
      type: Number,
      required: true,
    },
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true,
    },
  },
  setup(props) {
    return {
      length: props.list.length,
    }
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
