import React from 'react'
import authSlice from '../store/authSlice'
import { useSelector } from 'react-redux'
import axios from "axios"
import { useState ,useEffect } from 'react'

 function DashBoard() {
  const [user,setUser] = useState([])
  const [stats ,setStats] = useState([])
  const userData = useSelector((state)=>state.auth.userData)
  if(userData) return "Create or Login to get details..."
  useEffect(()=>{
    const getuserdata = async () =>{
      try {
        const response = await axios.get('8000/api/v1/users/current-user')
       setUser(response.data)

      } catch (error) {
        throw new Error(error.message)
      }
    };
    getuserdata()
    }
  ,[])

 useEffect(()=>{
  async function dashboarddata(){
    try {
      const response = await axios.get('8000/api/v1/dashboard/stats')
      setStats(response.data)
      
    } catch (error) {
      throw new Error(error.message)
    }
  };
  dashboarddata()
 },[])
 

  return (
<>
    
      
        <div className='  '>
         <img className=' object-contain h-[12rem] w-[60rem] p-3 m-2 '
         src= 'https://cdn.pixabay.com/photo/2018/05/27/22/48/social-3434840_1280.png'
         alt='Cover-Image'
         />
        </div>

        <div className=' flex flex-row '>
         <img className=' w-24 h-24 rounded-full"'
         src="https://cdn.pixabay.com/photo/2018/05/27/22/48/social-3434840_1280.png"
         alt='Cover-Image'
         />
         <h2 className='text-3xl ml-3 '>Hello</h2>
        </div>


        </>
  )
}

export default DashBoard