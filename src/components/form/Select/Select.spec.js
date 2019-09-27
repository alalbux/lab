import React from 'react'
import { shallow } from 'enzyme'
import Select from './Select'

describe('Select > ', () => {
  it('renders without crashing', () => {
    shallow(<Select>test</Select>)
  })
})
