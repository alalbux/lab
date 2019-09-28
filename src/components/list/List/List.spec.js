import React from 'react'
import { shallow } from 'enzyme'
import List from './List'

describe('List > ', () => {
  it('renders without crashing', () => {
    shallow(<List />)
  })
})
