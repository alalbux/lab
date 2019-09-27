import styled from 'styled-components'

const Card = styled.div`
  position: relative;
  border-radius: ${props => props.rounded || '3px'};
  background-color: #ffffff;
  box-shadow: 2px 1px 14px 11px rgba(0, 0, 0, 0.04);
  display: block;
  margin: 8px 0;
  padding: 16px;
  width: 100%;
  min-height: 450px;
  /* max-width: 380px; */
  height: auto;
  ${props => props.height && `height: ${props.height};`}
  ${props => props.onClick && `cursor: pointer;`}
  ${props => props.border && `border: ${props.border};`}
`

Card.displayName = 'Card'

export default Card
