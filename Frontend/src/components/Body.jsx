import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

function Body() {
  return (
    <div className='app flex container w-full'>
        <SideBar/>
        <Outlet/>
    </div>
  )
}

export default Body