import styled from 'styled-components'
import Border from 'components/styled/border'

const Main = styled.main `
  height: 100%;
  display: flex;
  background: #fff;
  flex-direction: column;
`

const Header = styled.header `
  height: 44px;
  background: #ee7530;
  font-size: 16px;
  color: #fff;
  text-align: center;
  line-height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Nav = Border({
  component: styled.nav `
    width: 1.42rem;
    height: .3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  `,
  width: '1px',
  color: '#fff',
  radius: 15
})

const Bar = styled.div `
  position: absolute;
  z-index: 1;
  line-height: .3rem;
  text-align: center;
  width: 50%;
  top: 0;
  font-size: .14rem;
  left: ${props => !props.right ? 0 : ''};
  right: ${props => props.right ? 0 : ''};
  color: ${props => props.active ? '#ee7530' : '#fff'};
`

const Slide = styled.div `
  position: absolute;
  z-index: 0;
  border-radius: .15rem;
  width: .71rem;
  height: .3rem;
  background: #fff;
  top: 0;
  left: ${ props => props.dir === 'left' ? 0 : '71px' };
  transition: all .2s ease-in;
`

const RouteWrapper = styled.div `
  flex: 1;
  position: relative;
`

const MenuWrapper = Border({
  component: styled.div `
    width: 100%;
    position: absolute !important;
    display: flex;
    height: 100%;
    overflow: hidden;
  `,
  width: '1px 0 0 0',
  color: '#ddd'
})

const MenuNav = styled.ul `
  width: .92rem;
`

const MenuNavItem = styled.li `
  height: .48rem;
  text-align: center;
  background: ${ props => props.active ? '#fff' : '#f3f3f3' };
  span {
    display: inline-block;
    height: 100%;
    line-height: .48rem;
    color: ${ props => !props.active || '#eb7932' };
    border-bottom: solid .02rem ${ props => props.active ? '#eb7932' : '#f3f3f3' };
  }
`

const MenuList = styled.div `
  flex: 1;
  padding: .16rem;
`

export {
  Main,
  Header,
  Nav,
  Bar,
  Slide,
  RouteWrapper,
  MenuWrapper,
  MenuNav,
  MenuNavItem,
  MenuList
}