import React from 'react'
import { shallow } from 'enzyme'
import Flexbox from './Flexbox'

describe('Flexbox > ', () => {
  it('renders without crashing', () => {
    shallow(<Flexbox />)
  })
})
