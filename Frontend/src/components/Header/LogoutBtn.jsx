import React from 'react'
import {logout as authlogout} from '../../store/authSlice'
import axios from 'axios'
import  { useDispatch }  from 'react-redux'
import { Link }  from 'react-router-dom'
import Button from '../Button'
function  LogoutBtn() {
  const dispatch = useDispatch()
    const logoutHandler = async()=>{
      const res = await axios.post('/api/v1/users/logout')
      console.log(res)
      if(res)
        dispatch(authlogout())
    }

  return (
    <div className=''>
               
      <Button onClick={logoutHandler}
         className='w-24 text-gray-200 border bg-gradient-to-r from-red-500 to-red-900 border-gray-900 rounded-xl font-bold'>Logout

        </Button>

  </div>
  )
}

export default LogoutBtn