import React, { Component } from 'react'
import {
  Header,
  Flexbox
} from '../components'
import Filter from './Filter/Filter'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      isLoading: true
    }
  }

  render () {
    return (
      <Flexbox vertical>
        <Header>
          <Filter />
        </Header>
      </Flexbox>
    )
  }
}

export default Home
