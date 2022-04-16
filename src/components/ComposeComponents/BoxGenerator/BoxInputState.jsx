import React, { useState } from 'react'
import styled from "../BoxGenerator/box.module.css";

function BoxInputState({generateTrigger}) {

  const [num, setNum] = useState('');
  
  const triggerGenerate = () => {  
    generateTrigger(num);
  }
  return (
    <div className={styled.box}>
        <span>Num of box</span>
        <input type="text" value={num} onChange={(e) => setNum(e.target.value)} />
        <button onClick={triggerGenerate} >Generate</button>
    </div>
  )
}

export default BoxInputState