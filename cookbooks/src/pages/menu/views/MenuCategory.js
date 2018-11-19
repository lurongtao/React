import React, { Component } from 'react'

import { 
  MenuWrapper,
  MenuNav,
  MenuNavItem,
  MenuList
} from './styledComponent'

import wrapAnimation from 'components/highorder/wrapAnimation'

class MenuCategory extends Component {
  render () {
    return (
      <MenuWrapper>
        <MenuNav>
          <MenuNavItem active={true}>
            <span>肉类</span>
          </MenuNavItem>
          <MenuNavItem>
            <span>aaa</span>
          </MenuNavItem>
          <MenuNavItem>
            <span>aaa</span>
          </MenuNavItem>
          <MenuNavItem>
            <span>aaa</span>
          </MenuNavItem>
          <MenuNavItem>
            <span>aaa</span>
          </MenuNavItem>
          <MenuNavItem>
            <span>aaa</span>
          </MenuNavItem>
        </MenuNav>
        <MenuList>bb</MenuList>
      </MenuWrapper>
    )
  }
}

export default wrapAnimation(MenuCategory)