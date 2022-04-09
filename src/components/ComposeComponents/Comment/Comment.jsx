import React from 'react'
import UserInfor from '../UserInfor/UserInfor';
import Text from '../../Text/index';
import Date from '../../Date/index';


function Comment({comment}) {
  return (
    <div >
        <UserInfor author={comment.author} />
        <Text text={comment.text} />
        <Date date={comment.date}/>
    </div>
  )
}

export default Comment