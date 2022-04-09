import React from 'react'

function Date({date}) {
  // console.log(date);
  const dateInfor = date.getFullYear()
  // console.log(props.date);
  return (
    <p>{dateInfor}</p>
  )
}

export default Date