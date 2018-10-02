import React from 'react'
import styled from 'styled-components'

const Input = styled.input `
  color: ${props => props.inputColor}
`

export default () => {
  return (
    <Input inputColor="blue" defaultValue="hello"></Input>
  )
}