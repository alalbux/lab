import React, { Component } from 'react'
import styled from 'styled-components'
import Text from '../../content/Text/Text'

const Wrapper = styled.li`
  display: flex;
  justify-content: start;
  align-content: center;
  border-bottom: 1px solid #eeeeee;
  width: 100%;
`

const ListItem = ({ children }) => (
  <Wrapper>
    <Text>{children}</Text>
  </Wrapper>
)

ListItem.displayName = 'ListItem'

export default ListItem
