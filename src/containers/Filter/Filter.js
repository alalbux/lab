import React, { Component } from 'react'
import styled from 'styled-components'
import {
  Text,
  Select,
  Flexbox
} from '../../components'

const FormContent = styled.form`
  width: 100%;
  margin-bottom: 24px;
`
const FormItem = styled.div`
  width: 150px;
`

class Filter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      brandValue: '',
      modelValue: '',
      yearValue: '',
      opened: false,
      brand: [],
      model: [],
      year: [],
      isLoading: false
    }
  }


  componentDidMount() {
    this.fetchBrandData()
  }

  fetchBrandData() {
    fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          brand: data,
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }))
  }

  handleBrandSelected(value) {
    this.setState({ brandValue: value })
    this.fetchModelData(value)
  }

  handleModelSelected(value) {
    this.setState({ brandValue: value })
  }

  handleYearSelected(value) {
    this.setState({ yearValue: value })
  }

  fetchModelData(brandID) {
    console.log(brandID)
    fetch(`https://parallelum.com.br/fipe/api/v1/carros/marcas/${brandID}/modelos`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          model: data.modelos,
          year: data.anos,
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }))
  }

  render() {
    const {
      isLoading,
      brand,
      model,
      year,
      error,
      brandValue,
      modelValue,
      yearValue
    } = this.state
    return (
      <div>
        <FormContent>
          <Flexbox row justify='space-between'>
            <FormItem>
              <Text>Marca</Text>
              {error ? <p>Nenhuma opção encontrada</p> : null}
              {!isLoading ? (
                <Select
                  name='brand'
                  value={brandValue}
                  onChange={e => this.handleBrandSelected(e.target.value)}>
                  {brand.map(item => {
                    return (
                      <option value={item.codigo} key={item.codigo}>{item.nome}</option>
                    )
                  })}
                </Select>
              ) : (
                  <h3>Loading...</h3>
                )}
            </FormItem>
            <div>
              <Text>Modelo</Text>
              {error ? <p>Nenhuma opção encontrada</p> : null}
              {!isLoading ? (
                <Select
                  name='model'
                  value={modelValue}
                  onChange={e => this.handleModelSelected(e.target.value)}
                >
                  {model.map(item => {
                    return (
                      <option value={item.codigo}>{item.nome}</option>
                    )
                  })}
                </Select>
              ) : (
                  <h3>Loading...</h3>
                )}
            </div>
            <div>
              <Text>Ano</Text>
              {error ? <Select><option>selecione a marca e o modelo</option></Select> : null}
              {!isLoading ? (
                <Select
                  name='year'
                  value={yearValue}
                  onChange={e => this.handleYearSelected(e.target.value)}
                >
                  {year.map(item => {
                    return (
                      <option value={item.codigo}>{item.nome}</option>
                    )
                  })}
                </Select>
              ) : (
                  <h3>Loading...</h3>
                )}
            </div>
          </Flexbox>
        </FormContent>
      </div>
    )
  }
}


Filter.displayName = 'Filter'

export default Filter
