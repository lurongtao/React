import React from 'react'
import HighOrderComp from './HighOrderComp'

const normalComp = (props) => {
 return (
   <div>{props.title}</div>
 ) 
}

export default HighOrderComp(normalComp)