import React from 'react'
import authSlice from '../store/authSlice'
import { useSelector } from 'react-redux'
import axios from "axios"
import { useState ,useEffect } from 'react'
import Button from "./Button.jsx"

 function YourAccount() {
  const [user,setUser] = useState([])
  const [account ,setAccount] = useState([])
  // const userData = useSelector((state)=>state.auth.userData)
  // if(userData) return "Create or Login to get details..."

 useEffect(()=>{
  async function Accountdata(){
    try {
      const response = await axios.get('8000/api/v1/c/:six')
      const data = response.json
      console.log(data)
      setAccount(data)
    } catch (error) {
      throw new Error(error.message)
    }
  };
  Accountdata()
 },[])
 

  return (
<>
<div className='float-right'>

        <div className=' flex flex-row'>
         <img className=' object-contain h-[12rem] w-[60rem] p-3 m-2 '
         src= 'https://cdn.pixabay.com/photo/2018/05/27/22/48/social-3434840_1280.png'
         alt='Cover-Image'
         />
        </div>

        <div className='w-24 h-24 mt-[3rem] flex flex-row'>
         <img className=' w-24 h-24 rounded-full"'
         src="https://cdn.pixabay.com/photo/2018/05/27/22/48/social-3434840_1280.png"
         alt='Cover-Image'
         />
         <div className='flex flex-col w-[10rem]'>
         <h2 className=' '>Hello</h2>
         <h3 className=''>@hello . 20 . 20</h3>

          </div>
         </div>
         <div className=' float-right'>
         <Button 
         className=' mt-2 '
         type='button'

         >Subscribe
         </Button>
         </div>

         </div>


        </>
  )
}

export default YourAccount