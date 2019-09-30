import React, { Component } from 'react'
import styled from 'styled-components'
import {
  Card
} from '../../index'

import CardIcon from './CarIcon'

import Button from '../../content/Button/Button'
import Flexbox from '../../layout/Flexbox/Flexbox'
import Title from '../../content/Title/Title'
import Text from '../../content/Text/Text'

const CarCardContainer = styled(Card)`
  text-align: center;
  width: 100%;
  max-width: 850px;
  margin: 0 auto;
  min-height: 200px;
  margin: 16px auto;
`

const CardInfoContainer = styled.div`
  width: 500px;
`

const CardInfo = styled(Flexbox)`
  margin-top: 34px;
  width: 300px;
`

const Label = styled.span`
  display: block;
  font-weight: bold;
  font-size: 14px;
`

const BrandCar = styled(Title.H3)`
  text-align: left;
  font-size: 30px;
  margin-bottom: 8px;
`

const ModelCar = styled(Text)`
  font-size: 14px;
`

const Image = styled.div`
  width: 180px;
  padding: 36px;
`

const ValueContainer = styled.div`
  width: 200px;
`

const ValueLabel = styled(Text)`
  text-align: right;
  font-size: 24px;
  font-weight: bold;
`

const ReferenceInfo = styled(Text)`
  text-align: right;
  margin: 16px;
`

const FavButton = styled(Button)`
  padding: 8px;
  width: 30px;
  font-size: 35px;
  margin: 0 auto;
  margin-right: 15px;
`


const CarCard = ({ data }) => (
  <CarCardContainer>
    <Flexbox middle>
      <Image>
        <CardIcon />
      </Image>
      <CardInfoContainer>
        <BrandCar>{data.Marca}</BrandCar>
        <ModelCar>{data.Modelo}</ModelCar>
        <CardInfo spacing='between'>
          <Text><Label>Combustível:</Label> {data.Combustivel}</Text>
          <Text><Label>Ano:</Label> {data.AnoModelo}</Text>
          <Text><Label>Código:</Label> {data.CodigoFipe}</Text>
        </CardInfo>
      </CardInfoContainer>
      <ValueContainer>
        <Flexbox vertical spacing='between'>
          <ValueLabel>{data.Valor}</ValueLabel>
          <ReferenceInfo><Label>Mês de referência:</Label> {data.MesReferencia}</ReferenceInfo>
          <FavButton align='right'>❤</FavButton>
        </Flexbox>
      </ValueContainer>
    </Flexbox>
  </CarCardContainer>
)


export default CarCard
