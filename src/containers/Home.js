import React, { Component } from 'react'
import {
  Header,
  Flexbox,
  Page
} from '../components'

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
      <Page>
        <Flexbox vertical>
          <Header height='100px' />
        </Flexbox>
      </Page >
    )
  }
}

export default Home
