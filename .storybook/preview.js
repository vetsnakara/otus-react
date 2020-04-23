import React from 'react'
import 'loki/configure-react'
import { addDecorator } from '@storybook/react'
import { withPropsTable } from 'storybook-addon-react-docgen'

import { GlobalStyles } from '../src/styles'

addDecorator(withPropsTable)
addDecorator((story) => (
  <GlobalStyles>
    <div className="container">{story()}</div>
  </GlobalStyles>
))
