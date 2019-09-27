import React from 'react'
import { oneOfType, node, func } from 'prop-types'
import styled from 'styled-components'

import Flexbox from '../Flexbox'
import H1 from '../../content/Title/H1'

const HeaderContainer = styled.div`
  padding-bottom: 32px;
  background: #ffffff;
  color: #007A8D;
  font-weight: 600;
  width: 100%;
  margin: 0 auto;
  padding: 16px 0;
  ${props => props.height && `height: ${props.height};`}
`

const Header = () => (
  <HeaderContainer>
    <Flexbox>
        <H1>Laborit Cars</H1>
    </Flexbox>
  </HeaderContainer>
)

Header.propTypes = {
  children: oneOfType([node, func])
}

Header.displayName = 'Header'

export default Header
