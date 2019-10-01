import React, { Component } from 'react'
import {
  Header,
  Flexbox,
  Page,
  Text,
  Title,
  List,
  ListItem
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

  componentDidMount () {
    this.fetchListData()
  }

  fetchListData () {
    fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/5940/anos/2014-3`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          data: data,
          isLoading: false
        })
      )
      .catch(error => this.setState({ error, isLoading: false }))
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
