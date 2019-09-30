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
  min-height: 70vh;
  padding: 16px;
  ${props => props.height && `height: ${props.height};`}
`

const Subtitle = styled(Title.H2)`
  margin-top: 16px;
`

const Header = ({children}) => (
  <HeaderContainer>
    <Flexbox vertical middle>
      <Title.H1>Laborit Cars</Title.H1>
      <Subtitle>A simple vehicle bookmarking app <i>❤</i></Subtitle>
      {children}
    </Flexbox>
  </HeaderContainer>
)

Header.propTypes = {
  children: oneOfType([node, func])
}

Header.displayName = 'Header'

export default Header
