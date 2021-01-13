import { mount } from '@vue/test-utils'

import JsonSchemaForm, { NumberFiled } from '../../lib'

describe('JsonSchemaFrom', () => {
  it('should render correct number field', async () => {
    let value = ''
    const wrapper = mount(JsonSchemaForm, {
      props: {
        schema: {
          type: 'number',
        },
        value: value,
        onChange: (v: any) => {
          value = v
        },
      },
    })
    const numberFiled = wrapper.findComponent(NumberFiled)
    expect(numberFiled.exists()).toBeTruthy()
    const input = numberFiled.find('input')
    input.element.value = '123'
    input.trigger('input')
    expect(value).toBe(123)
  })
})
