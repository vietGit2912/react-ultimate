import React, { useState } from 'react'
import BoxEmpty from './BoxEmpty';
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
   {boxs.length > 0 ? <BoxList boxs={boxs} /> : <BoxEmpty />}
  </>
   
}

export default BoxGenerate