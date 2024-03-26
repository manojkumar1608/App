import React from 'react'
import { Link } from 'react-router-dom'


function Logo() {
  return (
    <Link 
    className="flex flex-row " to={'/'} >
    <img className='h-[2rem] '
        src="https://cdn.pixabay.com/photo/2018/05/27/22/48/social-3434840_1280.png" alt="videoTube" />
    <h3 className='font-bold font-' >PlayTube</h3>
    </Link> 
  )
}

export default Logo