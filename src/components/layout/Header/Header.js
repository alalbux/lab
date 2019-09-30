import React from 'react'
import { oneOfType, node, func } from 'prop-types'
import styled from 'styled-components'

import Flexbox from '../Flexbox/Flexbox'
import Title from '../../content/Title/Title'
const HeaderContainer = styled.div`
  background: linear-gradient(
    40deg,
    #f14444 0%,
    #f2b65d 48.96%,
    #ef3556 100%
  );
  text-align: center;
  color: #ffffff;
  font-weight: 600;
  width: 100%;
  margin: 0 auto;
  min-height: 50vh;
  padding: 36px;
`

const Subtitle = styled(Title.H2)`
  margin-top: 16px;
`

const Header = ({children}) => (
  <HeaderContainer>
    <Flexbox vertical middle>
      <Title.H1>Laborit Cars</Title.H1>
      <Subtitle>É uma simples busca de modelos de carros <i>❤</i></Subtitle>
      {children}
    </Flexbox>
  </HeaderContainer>
)

Header.propTypes = {
  children: oneOfType([node, func])
}

Header.displayName = 'Header'

export default Header
