import React, { useState } from 'react'
import BoxInput from './BoxInput'
import BoxList from './BoxList';


const generateFakeBox = (numOfBox) => {
    let boxs = [];
    for(let i = 0; i< numOfBox; i++) {
        boxs.push({
            id: i,
            content: `Box #${i}`
        })
    }

    return boxs;
}

function BoxGenerate() {
  const [boxs, setBoxs] = useState([]);

  const handleGenerate = (numOfBox) => {
      setBoxs(generateFakeBox(numOfBox));
  }
  
  return <>
   <BoxInput generateNotify={handleGenerate}/>
   <BoxList boxs={boxs} />
  </>
   
}

export default BoxGenerate