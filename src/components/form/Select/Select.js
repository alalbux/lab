import React, { Component, Fragment } from 'react'
import {
  oneOfType,
  node,
  func,
  string
} from 'prop-types'
import styled from 'styled-components'
import Input from '../Input/Input'

const SelectWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;

  &:before {
    content: '';
    position: absolute;
    right: 16px;
    top: 13px;
    width: 5px;
    height: 5px;
    border: solid ${props => props.disabled ? '#AAAAAA' : '#4A4A4A'};
    border-width: 0 1.5px 1.5px 0;
    transform: rotate(45deg);
  }
`

const SelectInputNative = styled(() => <Input as='select' />)`
  box-shadow: none;
  background: transparent;
  background-image: none;
  border-radius: 0px;
  appearance: none;
  position: relative;
  padding-right: 32px !important;

  &:hover {
    border-bottom: 1px solid #EE0099;
  }
`

const SelectInput = styled(() => <Input as={() => class extends Component {
  state = {
    open: false,
    selected: {},
  }

  toggleOptions = () => this.setState({ open: !this.state.open })
  handleSelected = selected => {
    if (selected !== this.state.selected) {
      this.setState({ selected })
    }
  }

  render() {
    const { className, children, name, disabled } = this.props
    const { open, selected } = this.state

    return (
      <div className={className} onClick={this.toggleOptions}>
        {(selected && selected.children) || children[0].props.children}

        <input
          type='hidden'
          name={name}
          value={selected.value || ''}
        />

        {open && !disabled && (
          <Fragment>
            <OptionsWrapper>
              {children.map((option, index) => index !== 0 && (
                <Option
                  key={Math.random()}
                  onClick={f => this.handleSelected(option.props)}
                >
                  {option.props.children}
                </Option>
              ))}
            </OptionsWrapper>
          </Fragment>
        )}
      </div>
    )
  }
}} />)`
  padding-right: 32px !important;
  position: relative;
  cursor: pointer;

  -webkit-touch-callout: none;
  user-select: none;

  &:hover {
    border-bottom: 1px solid #EE0099;
  }

  ${props => props.disabled && `
    color: #EEEEEE !important;
    border-bottom: 1px solid #AAAAAA;
    cursor: default;

    &:hover {
      border-bottom: 1px solid #AAAAAA;
    }
  `}
`

const OptionsWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 38px;
  background-color: #FFFFFF;
  border: solid 1px #AAAAAA;
  padding: 4px 16px;
  z-index: 11;
`

const Option = styled.div`
  padding: 8px 0;
  color: #424242;
  cursor: pointer;

  &:hover { color: #000000 }
`

class Select extends Component {
  render() {
    const { native } = this.props
    return (
      <SelectWrapper {...this.props}>
        {native && <SelectInputNative {...this.props} fullWidth />}
        {!native && <SelectInput {...this.props} />}
      </SelectWrapper>
    )
  }
}

Select.propTypes = {
  children: oneOfType([node, func]).isRequired,
  name: string.isRequired
}

Select.displayName = 'Select'

export default Select
