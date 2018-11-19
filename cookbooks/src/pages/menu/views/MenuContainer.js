import React, { Component } from 'react'

import {
  withRouter,
  Route,
} from 'react-router-dom'

import {
  Main,
  Header,
  Nav,
  Bar,
  Slide,
  RouteWrapper
} from './styledComponent.js'

import Search from 'components/common/search/Search'
import MenuCategory from './MenuCategory'
import MenuFoodMaterial from './MenuFoodMaterial'

class MenuContainer extends Component {
  constructor () {
    super()
    this.state = {
      dir: 'left',
      activeBar: 'left'
    }
  }
  render () {
    return (
      <Main>
        <Header>
          <Nav>
            <Bar onClick={() => this.handleBarClick('left')} active={this.state.activeBar==='left'}>分类</Bar>
            <Bar onClick={() => this.handleBarClick('right')} active={this.state.activeBar==='right'} right={true}>食材</Bar>
            <Slide dir={this.state.dir}></Slide>
          </Nav>
        </Header>
        <Search background="#efefef"></Search>
        <RouteWrapper>
          <Route path="/" exact children={props => <MenuCategory {...props} />}></Route>
          <Route path="/category" children={props => <MenuCategory {...props} />}></Route>
          <Route path="/foodmaterial" children={props => <MenuFoodMaterial {...props} />}></Route>
        </RouteWrapper>
      </Main>
    )
  }

  handleBarClick (dir) {
    this.setState({
      dir
    }, () => {
      let { history } = this.props
      let state = dir === 'left'
        ? {
          enterActive: 'fadeInLeft',
          exitActive: 'fadeOutRight'
        } : {
          enterActive: 'fadeInRight',
          exitActive: 'fadeOutLeft'
        }

      history.push(
        dir === 'left' ? 'category' : 'foodmaterial',
        state
      )
    })
    
    setTimeout(() => {
      this.setState({
        activeBar: dir
      })
    }, 200)
  }
}

export default withRouter(MenuContainer)