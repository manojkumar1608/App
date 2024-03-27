import React from 'react'
import {logout as authlogout} from '../../store/authSlice'
import axios from 'axios'
import { Link }  from 'react-router-dom'
function  LogoutBtn() {
    const logoutHandler = async()=>{
      const res = await axios.post('/api/v1/users/logout')
      console.log(res.message)
      if(res)
        dispatch(authlogout())
    }

  return (
    <div className='bg-red-500 flex mx-18 m-1 pt-1 pr-3 border border-gray-500 rounded-xl'>
      <a href='/' >             
      <button onClick={logoutHandler}
         className='p-2 pl-4 ml-1 font-bold'>Logout

        </button>
      
      </a>

                </div>
  )
}

export default LogoutBtn