import { defineComponent, Ref, ref } from 'vue'
import MonacoEditor from './components/MonacoEditor'
import { createUseStyles } from 'vue-jss'

function toJson(data: any): string {
  return JSON.stringify(data, null, 2)
}

const schema = {
  type: 'string',
}

const useStyles = createUseStyles({
  editor: {
    minHeight: 400,
  },
})

export default defineComponent({
  setup() {
    const schemaRef: Ref<any> = ref(schema)

    const handleCodeChange = (code: string) => {
      let schema: any
      try {
        schema = JSON.parse(code)
      } catch (error) {
        console.log(error)
      }
      schemaRef.value = schema
    }

    const classesRef = useStyles()

    return () => {
      const code = toJson(schemaRef.value)
      const classes = classesRef.value

      return (
        <div>
          <MonacoEditor
            code={code}
            onChange={handleCodeChange}
            title="schema"
            class={classes.editor}
          />
        </div>
      )
    }
  },
})
