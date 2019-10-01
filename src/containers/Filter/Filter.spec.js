import React from 'react'
import { shallow } from 'enzyme'
import Filter from './Filter'

describe('Filter > ', () => {
  it('renders without crashing', () => {
    shallow(<Filter />)
  })
})
