import React from 'react'

function Button({text, ...props}) {
  return (
    <div>
        <button {...props}>{text}</button>
    </div>
  )
}

export default Button