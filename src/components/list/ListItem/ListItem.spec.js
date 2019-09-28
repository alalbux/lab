import React from 'react'
import { shallow } from 'enzyme'
import List from './List'

describe('ListItem > ', () => {
  it('renders without crashing', () => {
    shallow(<ListItem />)
  })
})
