import React from 'react'
import Avatar from '../../Avatar'

function UserInfor({author}) {
  return (
    <div className='userInfor'>
      <Avatar avatarUrl={author.avatarUrl} />
      <h3>{author.name}</h3>
    </div>
  )
}

export default UserInfor