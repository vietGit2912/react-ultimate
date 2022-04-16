import React from 'react'
import styled from '../BoxGenerator/box.module.css'
import Box from './Box'
function BoxList({boxs}) {
  
  return (
    <ul className={styled.boxList}>
        {boxs.map((box) => {
            return  <Box key={box.id} content={box.content} />
            
        })}
    </ul>
  )
}

export default BoxList