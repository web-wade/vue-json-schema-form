import { defineComponent, DefineComponent } from 'vue'

import { FiledPropsDefine } from '../types'
import { isObject } from '../utils'

export default defineComponent({
  name: 'ObjectField',
  props: FiledPropsDefine,
  setup(props) {
    const handleObjectFieldChange = (key: string, v: any) => {
      const value: any = isObject(props.value) ? props.value : {}

      if (v === undefined) {
        delete value[key]
      } else {
        value[key] = v
      }

      props.onChange(value)
    }

    return () => {
      const { schema, rootSchema, value } = props

      const properties = schema.properties || {}

      const currentValue: any = isObject(value) ? value : {}

      return <div>Object</div>
    }
  },
})
