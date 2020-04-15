import React from 'react'
import { shallow } from 'enzyme'

import HelloWorld from './HelloWorld'

describe('HelloWorld', () => {
  test('Renders text correctly', () => {
    const text = 'Hello World'
    const wrapper = shallow(<HelloWorld>{text}</HelloWorld>)
    expect(wrapper.text()).toBe(text)
  })
})
