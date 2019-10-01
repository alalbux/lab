import React, { Component } from 'react'
import styled from 'styled-components'
import {
  Card,
  CarCard,
  Select,
  Flexbox
} from '../../components'

const FormContent = styled.form`
  width: 100%;
  margin: 54px 20px;
`
const FormItem = styled(Card)`
  width: 100%;
  max-width: 280px;
  text-align: center;
  margin: 24px;
  min-height: 50px;
`

class Filter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      brandValue: '',
      modelValue: '',
      yearValue: '',
      opened: false,
      brand: [],
      model: [],
      year: [],
      data: [],
      isLoading: false,
      isDataShow: true,
      errorLoadData: false
    }
  }

  componentDidMount () {
    this.fetchBrandData()
  }

  fetchBrandData () {
    fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          brand: data,
          isLoading: false
        })
      )
      .catch(error => this.setState({ error, isLoading: false }))
  }

  handleBrandSelected (value) {
    this.setState({ brandValue: value })
    this.fetchModelData(value)
  }

  handleModelSelected (value) {
    this.setState({ modelValue: value })
  }

  handleYearSelected (value) {
    this.setState({ yearValue: value })
    this.fetchListData(value)
  }

  fetchModelData (brandID) {
    fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandID}/modelos`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          model: data.modelos,
          year: data.anos,
          isLoading: false,
          errorLoading: false
        })
      )
      .catch(error => this.setState({ error, isLoading: false }))
  }

  fetchListData (year) {
    const { brandValue, modelValue } = this.state
    fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandValue}/modelos/${modelValue}/anos/${year}`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          data: data,
          isDataShow: false,
          errorLoadData: true
        })
      )
      .catch(error => this.setState({ error, errorLoadData: false, isLoading: false }))
  }

  render () {
    const {
      isLoading,
      brand,
      model,
      year,
      errorLoadData,
      data,
      brandValue,
      modelValue,
      yearValue
    } = this.state
    return (
      <FormContent>
        <Flexbox vertical middle wrap>
          <Flexbox horizontal justify='center' wrap>
            <FormItem>
              {!isLoading ? (
                <Select
                  name='brand'
                  value={brandValue}
                  onChange={e => this.handleBrandSelected(e.target.value)}>
                  <option>Selecione a marca</option>
                  {brand.map(item => {
                    return (
                      <option value={item.codigo} key={item.codigo}>{item.nome}</option>
                    )
                  })}
                </Select>
              ) : null}
            </FormItem>
            <FormItem>
              {!isLoading ? (
                <Select
                  name='model'
                  value={modelValue}
                  onChange={e => this.handleModelSelected(e.target.value)}
                >
                  <option>Selecione o modelo</option>
                  {model.map(item => {
                    return (
                      <option value={item.codigo} key={item.codigo}>{item.nome}</option>
                    )
                  })}
                </Select>
              ) : null}
            </FormItem>

            <FormItem>
              {!isLoading ? (
                <Select
                  name='year'
                  value={yearValue}
                  onChange={e => this.handleYearSelected(e.target.value)}
                >
                  <option>Selecione o ano</option>
                  {year.map(item => {
                    return (
                      <option value={item.codigo} key={item.codigo}>{item.nome}</option>
                    )
                  })}
                </Select>
              ) : null}
            </FormItem>
          </Flexbox>
          {errorLoadData ? (<CarCard car={data} />) : null}
        </Flexbox>
      </FormContent>
    )
  }
}

Filter.displayName = 'Filter'

export default Filter
