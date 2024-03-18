import React from 'react'
import Button from './Button'
import { MdOutlineArrowDropDownCircle } from "react-icons/md"
import { IoIosArrowDropup } from "react-icons/io";
function CommentsContainer({data}){

 

  
  return (
  <div className='w-full mt-4 flex cursor-pointer'> 
    <details >
    <summary className='flex font-bold p-2 text-xl border border-gray-600 rounded-full '>
     Comments
      <MdOutlineArrowDropDownCircle aria-pressed='true' className='text-3xl ml-2 active:-rotate-90'/> 
    </summary>
    <hr className='border-gray-900 w-[22rem] mt-2'/>
    <img 
    className=' h-[2.5rem] w-[2.5rem] col-span-1 mt-4 rounded-full'
    src='https://images.pexels.com/photos/1188083/pexels-photo-1188083.png?cs=srgb&dl=sea-dawn-nature-1188083.jpg&fm=jpg'
    alt='logo'>
      
    </img>


    </details>
  </div>
  )
}

export default CommentsContainer