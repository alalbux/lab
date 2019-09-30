import { oneOf, node, bool, string } from 'prop-types'
import styled, { css } from 'styled-components'

const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: 8px 16px;
  color: #D3D3D3;
  font-weight: bold;
  text-align: ${props => props.align};
  line-height: 1.15;
  letter-spacing: 0.5px;
  cursor: pointer;
  box-shadow: none;
  outline: none;

  &:hover {
    color: #FF1493;
  }

  ${props => props.active && css`
    path {
      fill: #ee0099!important;
    }
  `}
`

Button.propTypes = {
  children: node,
  disabled: bool,
  active: bool,
  color: string,
  type: string,
  align: oneOf(['center', 'left', 'right'])
}

Button.defaultProps = {
  align: 'center',
  type: 'button'
}

Button.displayName = 'Button'

export default Button
