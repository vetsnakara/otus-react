import styled from 'styled-components'
import { SVGIcon } from 'shared/SVGIcon'

/**
 * NoTasksBox
 */
export const NoTasksBox = styled.section`
  background-color: #fff;
  text-align: center;
  padding: 100px;
`

NoTasksBox.displayName = 'NoTasksBox'

/**
 * NoTasksIcon
 */
export const NoTasksIcon = styled(SVGIcon)`
  width: 40px;
  height: 40px;
  & > path {
    fill: #26c6da;
  }
`
NoTasksIcon.displayName = 'NoTasksIcon'
