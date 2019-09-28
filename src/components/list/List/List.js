import { oneOfType, node, arrayOf } from 'prop-types'
import styled from 'styled-components'

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
`

List.propTypes = {
  children: oneOfType([node, arrayOf(node)]).isRequired
}

List.displayName = 'List'

export default List
