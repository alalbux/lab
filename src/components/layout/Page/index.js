import React from 'react'
import { oneOfType, node, func } from 'prop-types'
import styled from 'styled-components'

const PageContainer = styled.div`
  background-color: #FFFFFF;
  max-width: 1360px;
  padding: 0 16px;
  width: 100%;
  margin: 0 auto;
  height: 100%;
`

const PageContent = styled.div`
  display: flex;
`

const Page = ({ children }) => (
  <PageContainer>
    <PageContent>
      {children}
    </PageContent>
  </PageContainer>
)

Page.propTypes = {
  children: oneOfType([node, func])
}

Page.displayName = 'Page'

export default Page
