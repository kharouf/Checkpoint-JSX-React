import React from 'react'

import img from '../../img.jpg';
import '../../App.css'

function ProfilePhoto() {
  return (
    <div className='img-profil '>
  <img src={img} alt="profile" />
    </div>
  )
}

export default ProfilePhoto