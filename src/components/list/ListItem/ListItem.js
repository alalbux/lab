import React, { Component } from 'react'
import styled from 'styled-components'
import Text from '../../content/Text/Text'

const Wrapper = styled.li`
  display: flex;
  justify-content: start;
  align-content: center;
  border-bottom: 1px solid #eeeeee;
`

const ListItem = styled(class extends Component {
  render() {
    return (
      <Wrapper>
        <Text>Item list</Text>
      </Wrapper>
    )
  }
})`
div {
  width: 100%;
}
`

ListItem.displayName = 'ListItem'

export default ListItem
