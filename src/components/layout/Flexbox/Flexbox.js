import {
  bool,
  oneOf,
  string
} from 'prop-types'
import styled from 'styled-components'

const Flexbox = styled.div`
  display: flex;

  ${props => props.horizontal && `
    width: 100%;
    flex-direction: row;
  `}
  ${props => props.vertical && `
    width: 100%;
    height: 100%;
    flex-direction: column;
  `}

  ${props => props.middle && `
    align-items: center;
    justify-content: center;
  `}

  ${props => props.end && `
    align-items: end;
    justify-content: flex-end;
  `}

  ${props => props.justify && `
    justify-content: ${props.justify};
  `}

  ${props => props.spacing && `
    justify-content: space-${props.spacing}
  `}

  ${props => props.colSize && `
    & > * {
      width: ${props.colSize};
    }
  `}
`

Flexbox.propTypes = {
  horizontal: bool,
  vertical: bool,
  middle: bool,
  end: bool,
  spacing: oneOf(['around', 'between']),
  colSize: string
}

Flexbox.displayName = 'Flexbox'

export default Flexbox
