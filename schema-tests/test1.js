const Ajv = require('ajv').default
const addFormats = require('ajv-formats').default
const localize = require('ajv-i18n')

// const schema = {
//   type: 'string',
//   minLength: 10,
// }

const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      minLength: 10,
      errorMessage: '这是不对的',
    },
    age: {
      type: 'number',
    },
    pets: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    isWorker: {
      type: 'boolean',
    },
    email: {
      type: 'string',
      format: 'email',
    },
    test: {
      type: 'string',
      format: 'test',
    },
    evenNumber: {
      type: 'number',
      constant: 2,
    },
  },
  required: ['name', 'age'],
}

const ajv = new Ajv({ allErrors: true }) // options can be passed, e.g. {allErrors: true}
require('ajv-errors')(ajv /*, {singleError: true} */)
addFormats(ajv)
ajv.addFormat('test', (data) => {
  console.log(data)
  return data === 'hello'
})

ajv.addKeyword({
  keyword: 'constant',
  validate: (schema, data) =>
    typeof schema == 'object' && schema !== null
      ? deepEqual(schema, data)
      : schema === data,
  errors: false,
})

const validate = ajv.compile(schema)

const valid = validate({
  name: 'wade',
  isWorker: true,
  pets: ['xiaolan'],
  age: 22,
  email: '123@qq.com',
  test: 'hello',
  evenNumber: 2,
})

if (!valid) {
  // ru for Russian
  localize.zh(validate.errors)
  // string with all errors and data paths
  console.log(validate.errors)
}
