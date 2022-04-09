import React from 'react'

function Date({date}) {
  console.log(date);
  const dateInfor = date.getFullYear()+'-'+(date.getMonth()+1) +'-'+(date.getDay()+1)
  // console.log(props.date);
  return (
    <p>{dateInfor}</p>
  )
}

export default Date