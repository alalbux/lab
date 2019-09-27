import { oneOf, node, bool, string } from 'prop-types'
import styled, { css } from 'styled-components'

const Button = styled.button`
  background-color: #000000;
  border-radius: 5px;
  border: 1px solid #18ACC4;
  padding: 8px 16px;
  font-size: 16px;
  color: #18ACC4;
  font-weight: bold;
  text-align: ${props => props.align};
  line-height: 1.15;
  padding: ${props => props.padding || '8px 16px'};
  letter-spacing: 0.5px;
  cursor: pointer;
  box-shadow: none;
  outline: none;

  &:hover {
    background: #DE9E1F;
    color: #1F2D30;
  }

  ${props => props.active && css`
    path {
      fill: #ee0099!important;
    }
  `}

  ${props => props.disabled && `
    border: 2px solid #d1cdd2;
    cursor: default;
    background-color: #e6e6e6;
    color: #d1cdd2;
    cursor: not-allowed;
    box-shadow: none;
    &:hover { background-color: #e6e6e6 }
    &:active { background-color: #e6e6e6 }
  `}

  ${props => props.color && `
    color: ${props.color};
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
