import { computed, defineComponent } from 'vue'
import NumberField from './fields/NumberField'
import StringField from './fields/StringField'
import ObjectField from './fields/ObjectField'
import { retrieveSchema } from './utils'
import ArrayField from './fields/ArrayField'
import { FiledPropsDefine, SchemaTypes } from './types'

export default defineComponent({
  props: FiledPropsDefine,
  name: 'SchemaItem',
  setup(props) {
    const retrievedSchemaRef = computed(() => {
      const { schema, rootSchema, value } = props
      return retrieveSchema(schema, rootSchema, value)
    })

    return () => {
      const { schema } = props

      const retrievedSchema = retrievedSchemaRef.value

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
        case SchemaTypes.OBJECT: {
          Component = ObjectField
          break
        }
        case SchemaTypes.ARRAY: {
          Component = ArrayField
          break
        }
        default: {
          console.warn(`${type} is not supported`)
        }
      }

      return <Component {...props} schema={retrievedSchema} />
    }
  },
})
