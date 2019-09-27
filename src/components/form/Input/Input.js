import styled from 'styled-components'

const Input = styled.input`
  ${props => props.fullWidth && 'width: 100%;'}
  font-size: 16px;
  color: #000000;
  border: 1px solid #AAAAAA;
  padding: 8px 0;
  background: none;

  &[disabled] {
    color: #D1CDD2;
    background: none;
  }

  &:focus {
    outline: none;
  }

  &::placeholder { color: #424242 }
  &::-webkit-input-placeholder { color: #424242 }
  &::-moz-placeholder { color: #424242 }
  &:-ms-input-placeholder { color: #424242 }
  &:-moz-placeholder { color: #424242 }

  ${props => !props.invalid && !props.valid && `{
    &:focus { border: 1px solid #EE0099; }
  }`}

  ${props => props.invalid && `{
    border-color: #FF0931;
  }`}

  ${props => props.showValid && props.touched && props.valid && `{
    border-color: #50e3c2;
  }`}
`

Input.displayName = 'Input'

export default Input
