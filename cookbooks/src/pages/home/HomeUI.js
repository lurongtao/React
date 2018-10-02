import React from 'react'

import { TabBar } from 'antd-mobile'

import { Cookbook } from '../cookbook'
import { Menu } from '../menu'
import { More } from '../more'

import cookbook from '../../assets/cookbook.png'
import cookbook_active from '../../assets/cookbook-active.png'
import menu from '../../assets/menu.png'
import menu_active from '../../assets/menu-active.png'
import more from '../../assets/more.png'
import more_active from '../../assets/more-active.png'

const HomeUI = (props) => {
  return (
    <div style={props.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
      <TabBar
        unselectedTintColor="#515151"
        tintColor="#000"
        barTintColor="white"
        hidden={props.hidden}
      >
        <TabBar.Item
          title="菜谱大全"
          key="cookbook"
          icon={<div style={{
            width: '22px',
            height: '22px',
            background: `url(${cookbook}) center center /  30px 30px no-repeat` }}
          />}
          selectedIcon={<div style={{
            width: '22px',
            height: '22px',
            background: `url(${cookbook_active}) center center /  30px 30px no-repeat` }}
          />}
          selected={props.selectedTab === 'cookbook'}
          onPress={() => {
            props.handlePress('cookbook')
          }}
        >
          <Cookbook></Cookbook>
        </TabBar.Item>
        <TabBar.Item
          title="分类"
          key="category"
          icon={<div style={{
            width: '22px',
            height: '22px',
            background: `url(${menu}) center center /  21px 21px no-repeat` }}
          />}
          selectedIcon={<div style={{
            width: '22px',
            height: '22px',
            background: `url(${menu_active}) center center /  21px 21px no-repeat` }}
          />}
          selected={props.selectedTab === 'category'}
          onPress={() => {
            props.handlePress('category')
          }}
        >
          <Menu></Menu>
        </TabBar.Item>
        <TabBar.Item
          title="更多"
          key="more"
          icon={<div style={{
            width: '22px',
            height: '22px',
            background: `url(${more}) center center /  21px 21px no-repeat` }}
          />}
          selectedIcon={<div style={{
            width: '22px',
            height: '22px',
            background: `url(${more_active}) center center /  21px 21px no-repeat` }}
          />}
          selected={props.selectedTab === 'more'}
          onPress={() => {
            props.handlePress('more')
          }}
        >
          <More></More>
        </TabBar.Item>
      </TabBar>
    </div>
  )
}

export default HomeUI