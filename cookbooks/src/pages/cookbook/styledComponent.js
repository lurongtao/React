import styled from 'styled-components'

const Header = styled.header `
  height: 44px;
  background: #ee7530;
  font-size: 16px;
  color: #fff;
  text-align: center;
  line-height: 44px;
`

const Image = styled.div `
  font-size: 0;
  padding-bottom: 66.66667%;
  position: relative;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`

export {
  Header,
  Image
}