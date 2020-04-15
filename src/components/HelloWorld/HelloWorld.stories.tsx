import React from 'react'
import { text, withKnobs } from '@storybook/addon-knobs'

import HelloWorld from './HelloWorld'

export default {
  title: 'Hello World',
  component: HelloWorld,
  decorators: [withKnobs]
}

export const Default: React.FC<{}> = () => (
  <HelloWorld>{text('Text', 'Hello World!!!')}</HelloWorld>
)
