import React from 'react'
import Text from '../Text/Text'

const typeTitle = (element, { displayName, ...textProps }) =>
  ({ children, ...props }) => { // eslint-disable-line
    const Title = Text.withComponent(element)
    Title.displayName = displayName

    return (
      <Title {...textProps} {...props}>
        {children}
      </Title>
    )
  }

const H1 = typeTitle('h1', {
  displayName: 'Title.H1',
  fontSize: 44,
  fontWeight: 'bold',
  lineHeight: 1,
  color: '#1F2D30'
})

H1.displayName = 'H1'

const H2 = typeTitle('h2', {
  displayName: 'Title.H2',
  fontSize: 24,
  fontWeight: 'normal',
  lineHeight: 1.22,
  color: '#1F2D30'
})

H2.displayName = 'H2'

const H3 = typeTitle('h3', {
  displayName: 'Title.H3',
  fontSize: 21,
  fontWeight: 'bold',
  lineHeight: 0.95,
  color: '#1F2D30'
})

H3.displayName = 'H3'

const H4 = typeTitle('h4', {
  displayName: 'Title.H4',
  fontSize: 18,
  fontWeight: 'bold',
  lineHeight: 1.39,
  color: '#1F2D30'
})

H4.displayName = 'H4'

const Title = { H1, H2, H3, H4 }

export default Title
