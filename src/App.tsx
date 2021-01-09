import { defineComponent, ref } from 'vue'
const img = require('./assets/logo.png') //eslint-disable-line

export default defineComponent({
  setup() {
    const number = ref(1)
    setInterval(() => {
      number.value++
    }, 1000)

    return () => {
      return (
        <div>
          <img alt="Vue logo" src={img} />
          <div>{number.value}</div>
        </div>
      )
    }
  },
})
