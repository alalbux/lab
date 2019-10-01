import React from 'react'
import { oneOfType, node, func } from 'prop-types'
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

ListItem.propTypes = {
  children: oneOfType([node, func])
}

ListItem.displayName = 'ListItem'

export default ListItem
