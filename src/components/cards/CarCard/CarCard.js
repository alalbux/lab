import React from 'react'
import { shape, string } from 'prop-types'
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
  max-width: 390px;
  margin: 0 auto;
  min-height: 200px;
  margin: 16px auto;
`

const CardInfoContainer = styled.div`
  width: 100%;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`

const CarInfo = styled(Flexbox)`
  width: 100%;
  margin-top: 34px;
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

const Info = styled(Text)`
  text-align: center;
  margin: 0 16px;
  display: inline-block;
`

const Image = styled.div`
  width: 180px;
  padding: 16px;
`

const ValueContainer = styled.div`
  width: 100%;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`

const ValueLabel = styled(Text)`
  font-size: 24px;
  font-weight: bold;
`

const ReferenceInfo = styled(Text)`
  margin: 16px;
`

const FavButton = styled(Button)`
  padding: 8px;
  width: 50px;
  font-size: 35px;
  margin: 0 auto;
`

const CarCard = ({ car }) => (
  <CarCardContainer>
    <Flexbox middle wrap>
      <Image>
        <CardIcon />
      </Image>
      <CardInfoContainer>
        <BrandCar>{car.Marca}</BrandCar>
        <ModelCar>{car.Modelo}</ModelCar>
        <CarInfo horizontal justify='center' wrap>
          <Info><Label>Combustível:</Label> {car.Combustivel}</Info>
          <Info><Label>Ano:</Label> {car.AnoModelo}</Info>
          <Info><Label>Código:</Label> {car.CodigoFipe}</Info>
        </CarInfo>
      </CardInfoContainer>
      <ValueContainer>
        <ValueLabel>{car.Valor}</ValueLabel>
        <ReferenceInfo><Label>Mês de referência:</Label> {car.MesReferencia}</ReferenceInfo>
        <FavButton align='right'>❤</FavButton>
      </ValueContainer>
    </Flexbox>
  </CarCardContainer>
)

CarCard.propTypes = {
  car: shape({
    Marca: string,
    Modelo: string,
    Combustivel: string,
    AnoModelo: string,
    CodigoFipe: string,
    Valor: string,
    MesReferencia: string
  })
}

CarCard.displayName = 'CarCard'

export default CarCard
