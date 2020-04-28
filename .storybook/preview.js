import React from 'react'
import 'loki/configure-react';
import { addDecorator } from '@storybook/react'
import { withPropsTable } from 'storybook-addon-react-docgen';

addDecorator(withPropsTable);
addDecorator(story => <div className="container">{story()}</div>)

import './styles.scss'

