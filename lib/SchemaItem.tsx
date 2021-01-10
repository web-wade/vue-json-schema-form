import { defineComponent } from 'vue'
import NumberField from './fields/NumberField.vue'
import StringField from './fields/StringField.vue'

import { FiledPropsDefine, SchemaTypes } from './types'

export default defineComponent({
  props: FiledPropsDefine,
  name: 'SchemaItem',
  setup(props) {
    return () => {
      const { schema } = props

      const type = schema.type || SchemaTypes.STRING

      let Component: any

      switch (type) {
        case SchemaTypes.STRING: {
          Component = StringField
          break
        }
        case SchemaTypes.NUMBER: {
          Component = NumberField
          break
        }

        default: {
          console.warn(`${type} is not supported`)
        }
      }

      return <Component {...props} />
    }
  },
})
