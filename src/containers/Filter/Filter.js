import React, { Component } from 'react'
import styled from 'styled-components'
import {
  Card,
  CarCard,
  Text,
  Select,
  Flexbox
} from '../../components'

const FormContent = styled.form`
  width: 100%;
  margin: 54px 20px;
`
const FormItem = styled(Card)`
  max-width: 380px;
  text-align: center;
  margin: 24px;
  min-height: 100px;
`

const FormLabel = styled(Text)`
  text-align: center;
  margin-bottom: 24px;
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
      errorLoading: false
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
      .catch(error => this.setState({ error, errorLoading: true, isLoading: false }))
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
      .catch(error => this.setState({ error, errorLoading: true, isLoading: false }))
  }

  fetchListData (year) {
    const { brandValue, modelValue } = this.state
    fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandValue}/modelos/${modelValue}/anos/${year}`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          data: data,
          isDataShow: false,
          errorLoading: false
        })
      )
      .catch(error => this.setState({ error, errorLoading: true, isLoading: false }))
  }

  render () {
    const {
      isLoading,
      brand,
      model,
      year,
      errorLoading,
      data,
      brandValue,
      modelValue,
      yearValue
    } = this.state
    return (
      <FormContent>
        <Flexbox middle>
          <FormItem>
            <FormLabel>Selecione a marca do carro</FormLabel>
            {!isLoading ? (
              <Select
                name='brand'
                value={brandValue}
                onChange={e => this.handleBrandSelected(e.target.value)}>
                <option>Escolha uma opção</option>
                {brand.map(item => {
                  return (
                    <option value={item.codigo} key={item.codigo}>{item.nome}</option>
                  )
                })}
              </Select>
            ) : null}
          </FormItem>
          <FormItem>
            <FormLabel>Selecione o modelo</FormLabel>
            {!isLoading ? (
              <Select
                name='model'
                value={modelValue}
                onChange={e => this.handleModelSelected(e.target.value)}
              >
                <option>Escolha uma opção</option>
                {model.map(item => {
                  return (
                    <option value={item.codigo} key={item.codigo}>{item.nome}</option>
                  )
                })}
              </Select>
            ) : null}
          </FormItem>

          <FormItem>
            <FormLabel>Selecione o ano</FormLabel>
            {!isLoading ? (
              <Select
                name='year'
                value={yearValue}
                onChange={e => this.handleYearSelected(e.target.value)}
              >
                <option>Escolha uma opção</option>
                {year.map(item => {
                  return (
                    <option value={item.codigo} key={item.codigo}>{item.nome}</option>
                  )
                })}
              </Select>
            ) : null}
          </FormItem>
        </Flexbox>
        {!errorLoading ? (<CarCard car={data} />) : <p>Nenhum modelo encontrado</p>}
      </FormContent>
    )
  }
}

Filter.displayName = 'Filter'

export default Filter
