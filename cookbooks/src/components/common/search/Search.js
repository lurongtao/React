import React from 'react'

import {
  Search,
  SearchContent
} from './styledComponent'

import SearchImg from 'images/search.png'

export default (props) => {
  return (
    <Search>
      <SearchContent background={props.background}>
        <img src={SearchImg} alt=""/>
        <span>想吃什么搜这里，如排骨</span>
      </SearchContent>
    </Search>
  )
}