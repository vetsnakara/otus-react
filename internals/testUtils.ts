import { ShallowWrapper, ReactWrapper } from 'enzyme'

type Wrapper = ShallowWrapper | ReactWrapper

export const findByDataAttr = (wrapper: Wrapper, val: string) =>
  wrapper.find(`[data-test="${val}"]`)

export const veryLongTitle = Array.from(Array(20).keys())
  .map(() => 'Very long title.')
  .join(' ')
