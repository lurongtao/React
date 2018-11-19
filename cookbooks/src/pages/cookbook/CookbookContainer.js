import React, { Component } from 'react'

import { 
  Header,
  Image
} from './styledComponent.js'

import Search from 'components/common/search/Search'

import SwiperImg from 'images/swiper-1.png'

class CookbookContainer extends Component {
  render () {
    return (
      <main>
        <Header>菜谱大全</Header>
        <Image>
          <img src={SwiperImg} alt=""/>
        </Image>
        <Search></Search>
      </main>
    )
  }
}

export default CookbookContainer