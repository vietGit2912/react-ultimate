import React from 'react'
import { useState } from 'react'

function State() {
  const [messageObj, setMessageObj] = useState({message: '', id: 1})
  const [messObj2, setMessObj2] = useState({
    author: '',
    message: {
      id:1,
      text: ''
    }
  })

  const id = 1;

  function onChangeHandler(event) {
    const val = event.target.value;
    setMessageObj(prevState => {
        console.log(prevState);
        return {
            ...prevState,
            message: val
        }
    })
  }

  function onChangeHandler2(event) {
    const val = event.target.value;
    console.log(messObj2.message);
    setMessObj2(prevState => ({
        ...prevState,
        message: {
          ...prevState.message,
          text: val
        }
    }))
  }

  const handleClick = (param) => () => { //curry function 
    console.log(param);
  }
  return (
    <div>
        <h4>useState</h4>
        <input type='text' value={messageObj.message} onChange={onChangeHandler}/>
        <input type='text' value={messObj2.message.text} onChange={onChangeHandler2} />
        <button type='button' onClick={handleClick(id)} >Btn test</button>
    </div>
  )
}

export default State