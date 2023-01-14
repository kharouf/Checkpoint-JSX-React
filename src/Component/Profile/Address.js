import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import '../../App.css'

import React from 'react'

function Address() {
  return (
    <div className='location'> 
    <h4><FontAwesomeIcon icon={faMapLocationDot} /></h4>
    <h4> 583 Rue Ibn Khaldoun Ghannouche Gabès </h4> 
    </div>
  )
}

export default Address