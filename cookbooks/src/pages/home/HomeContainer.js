import React, { Component } from 'react'

import HomeUI from './HomeUI'

class HomeContainer extends Component {
  constructor (props) {
    super(props)
    this.handlePress = this.handlePress.bind(this)
    this.state = {
      selectedTab: 'cookbook',
      hidden: false,
      fullScreen: true,
      handlePress: this.handlePress
    }
  }

  render () {
    return (
      <HomeUI {...this.state} />
    )
  }

  handlePress (tab) {
    this.setState({
      selectedTab: tab
    })
  }
}

export default HomeContainer