import React, { FC } from 'react'
import { createGlobalStyle } from 'styled-components'

import RobotoRegularWoff from 'assets/fonts/roboto-regular-webfont.woff'
import RobotoRegularWoff2 from 'assets/fonts/roboto-regular-webfont.woff2'

const Global = createGlobalStyle`
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  src:
    url('${RobotoRegularWoff2}') format('woff2'),
    url('${RobotoRegularWoff}') format('woff');
}

html {
  font-family: Roboto, sans-serif;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
}

body {
  margin: 0;
  padding: 0;
  background-color: #26c6da;
}

.container {
  max-width: 800px;
  padding: 20px;
  margin: 0 auto;
}
`

export const GlobalStyles: FC = ({ children }) => (
  <>
    <Global />
    {children}
  </>
)
