import React from 'react'

import { TabBar } from 'antd-mobile'

import { Cookbook } from '../cookbook'
import { Menu } from '../menu'
import { Map } from '../map'
import { More } from '../more'

import cookbook from 'images/cookbook.png'
import cookbook_active from 'images/cookbook-active.png'
import menu from 'images/menu.png'
import menu_active from 'images/menu-active.png'
import map from 'images/location.png'
import map_active from 'images/location-active.png'
import more from 'images/more.png'
import more_active from 'images/more-active.png'

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
          title="大全"
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
          title="地图"
          key="more"
          icon={<div style={{
            width: '24px',
            height: '24px',
            background: `url(${map}) center center /  23px 23px no-repeat` }}
          />}
          selectedIcon={<div style={{
            width: '24px',
            height: '24px',
            background: `url(${map_active}) center center /  23px 23px no-repeat` }}
          />}
          selected={props.selectedTab === 'map'}
          onPress={() => {
            props.handlePress('map')
          }}
        >
          <Map></Map>
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