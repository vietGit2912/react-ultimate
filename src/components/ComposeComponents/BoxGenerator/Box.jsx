import React from 'react'

function Box({content}) {
    return (
      <li onClick={() => alert(content)}>{content}</li>
    )
  }

export default Box