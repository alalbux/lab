import React, { Component } from 'react'
import {
  Header,
  Flexbox,
  Page
} from '../components'
import Filter from './Filter/Filter'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    // this.fetchData()
  }

  render() {
    return (
      <Flexbox vertical>
        <Header>
          <Filter />
        </Header>

        <Page>
          Test
        </Page >
      </Flexbox>
    )
  }
}

export default Home
