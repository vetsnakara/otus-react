import styled from 'styled-components'

import { SVGIcon } from '../SVGIcon'

interface TaskProps {
  completed?: boolean
}

/**
 * TaskContainer
 */
export const TaskContainer = styled.div`
  display: flex;
  align-items: center;

  padding: 5px 15px;
  background-color: #fff;
`

TaskContainer.displayName = 'TaskContainer'

/**
 * Button
 */
const Button = styled.button<TaskProps>`
  flex-shrink: 0;
  position: relative;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.05);
  cursor: pointer;
  outline: none;

  & > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  & path {
    fill: rgba(0, 0, 0, 0.5);
  }
`
/**
 * ToggleButton
 */
export const ToggleButton = styled(Button)`
  margin-right: 10px;
  transition: all 0.2s ease;

  svg {
    opacity: 0;
    transition: all 0.2s ease;
  }

  &:hover > svg {
    opacity: 1;
  }

  ${({ completed }) =>
    completed &&
    `background-color: #4dd599;

    & svg {
      opacity: 1;

      path {
        fill: #fff;
      }
    }`}
`

ToggleButton.displayName = 'ToggleButton'

/**
 * RemoveButton
 */
export const RemoveButton = styled(Button)`
  visibility: hidden;
  margin-left: auto;
  transition: all 0.2s ease;
  transform: scale(0);
  opacity: 0;

  ${TaskContainer}:hover & {
    visibility: visible;
    opacity: 1;
    transform: scale(1);
  }
`

RemoveButton.displayName = 'RemoveButton'

/**
 * Title
 */
export const Title = styled.p<TaskProps>`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-right: 10px;
  transition: all 0.2s ease;

  ${({ completed }) =>
    completed &&
    `
      text-decoration: line-through;
      color: rgba(0, 0, 0, 0.4);
    `}
`

Title.displayName = 'Title'

/**
 * Icon
 */
export const Icon = styled(SVGIcon)`
  width: 15px;
  height: 15px;
`
