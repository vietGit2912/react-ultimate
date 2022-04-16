import React, { useState } from 'react'
import BoxEmpty from './BoxEmpty';
import BoxInput from './BoxInput'
import BoxInputState from './BoxInputState';
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

  const handleGenerateByState = (numState) => {
      console.log(numState);
      setBoxs(generateFakeBox(numState));
  }
  
  return <>
   <BoxInput generateNotify={handleGenerate}/>
   {/* <BoxInputState generateTrigger={handleGenerateByState} /> */}
   {boxs.length > 0 ? <BoxList boxs={boxs} /> : <BoxEmpty />}
  </>
   
}

export default BoxGenerate