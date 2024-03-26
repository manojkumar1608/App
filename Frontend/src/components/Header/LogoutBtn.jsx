import React from 'react'
import {logout as authlogout} from '../../store/authSlice'

function LogoutBtn() {
    const logoutHandler = ()=>{
        dispatch(authlogout())
    }

  return (
    <div className='bg-red-500 flex mx-18 m-1 pt-1 pr-3 border border-gray-500 rounded-xl'>
                  <a onClick={logoutHandler} href=''>
                    <span className='p-2 pl-4 ml-1 font-bold'>Logout</span>

                  </a>
                </div>
  )
}

export default LogoutBtn