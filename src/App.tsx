import { defineComponent, reactive, ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
const img = require('./assets/logo.png') //eslint-disable-line

export default defineComponent({
  setup() {
    const state = reactive({
      name: 'wade',
    })
    const number = ref(1)
    setInterval(() => {
      number.value++
    }, 1000)

    return () => {
      return (
        <div>
          <img alt="Vue logo" src={img} />
          <div>{number.value}</div>
          <p>{state.name}</p>
          <input type="text" v-model={state.name} />
          <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" age={12} />
        </div>
      )
    }
  },
})
