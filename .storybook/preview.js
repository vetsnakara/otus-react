import React from 'react'

import { addDecorator } from '@storybook/react'
import 'loki/configure-react';
import './styles.scss'

addDecorator(story => <div className="container">{story()}</div>)
