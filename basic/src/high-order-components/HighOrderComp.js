import React from 'react'
export default (NormalComp) => {
  const title = 'hello'
  const showTitle = () => {
    console.log(title)
  }
  // 高阶组件（函数）需要返回一个新的组件
  return () => {
    return <NormalComp title={title} showTitle={showTitle} />
  }
}