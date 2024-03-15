import React from 'react'
import SideBar from './SideBar'
import EmptyCard from '../EmptyUi/EmptyCard.jsx'
import VideoCard from './VideoCard.jsx'
import { Outlet } from 'react-router-dom'

function Body() {
  return (
    <>
    <div className='flex '>
      <SideBar/>
      <Outlet/>
    </div>
    
        </>
  )
}

export default Body