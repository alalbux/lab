import React from 'react'
import { shallow } from 'enzyme'
import Page from './Page'

describe('Page > ', () => {
  it('renders without crashing', () => {
    shallow(<Page />)
  })
})
