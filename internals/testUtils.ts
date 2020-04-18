import { ShallowWrapper, ReactWrapper } from 'enzyme'

type Wrapper = ShallowWrapper | ReactWrapper

export const findByDataAttr = (wrapper: Wrapper, val: string) =>
  wrapper.find(`[data-test="${val}"]`)
