import {
  oneOfType,
  node,
  func,
  string
} from 'prop-types'
import styled from 'styled-components'

const Select = styled.select`
  width: 100%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`

Select.propTypes = {
  children: oneOfType([node, func]).isRequired,
  name: string.isRequired
}

Select.displayName = 'Select'

export default Select
