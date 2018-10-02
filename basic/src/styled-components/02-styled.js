import styled from 'styled-components'

const Wrapper = styled.div `
  width: 100px;
  height: 100px;
  border: solid 1px #000;
`

const Hello = styled.h1.attrs({id: 0}) `
  color: red;
  ::before {
    content: '🚀';
  }
  :hover {
    color: red;
  }
  & {
    color: blue;
  }
`

export {
  Wrapper,
  Hello
}