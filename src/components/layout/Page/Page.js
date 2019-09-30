import React from 'react'
import { oneOfType, node, func } from 'prop-types'
import styled from 'styled-components'
import Flexbox from '../Flexbox/Flexbox'

const PageContainer = styled.div`
  background-color: #FFFFFF;
  max-width: 1360px;
  padding: 36px;
  width: 100%;
  margin: 0 auto;
  height: 100%;
`

const Page = ({ children }) => (
  <PageContainer>
    {children}
  </PageContainer>
)

Page.propTypes = {
  children: oneOfType([node, func])
}

Page.displayName = 'Page'

export default Page
