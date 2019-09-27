import React from 'react'
import { shallow } from 'enzyme'
import Text from './Text'

describe('Text > ', () => {
  it('renders without crashing', () => {
    shallow(<Text />)
  })
})
