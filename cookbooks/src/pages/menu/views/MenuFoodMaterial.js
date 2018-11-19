import React, { Component } from 'react'

import { MenuWrapper } from './styledComponent'

import wrapAnimation from 'components/highorder/wrapAnimation'

class MenuFoodMaterial extends Component {
  render () {
    return (
      <MenuWrapper>
        MenuFoodMaterial
      </MenuWrapper>
    )
  }
}

export default wrapAnimation(MenuFoodMaterial)