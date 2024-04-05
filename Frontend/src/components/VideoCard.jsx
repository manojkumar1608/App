import React, { useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { RxAvatar } from "react-icons/rx";


function VideoCard({_id,title,avatar,thumbnail,owner,views,createdAt,updatedAt}) {
  const navigate = useNavigate()
const videoId = _id
useEffect(()=>{
  try {
    async function getUser(){
      try {
          const response = await axios.get(`/api/v1/users/`)
          console.log(response)
          // const videodata = response.data.data
          // if(videodata){
          //     setVideo(videodata.docs)
          // }
          
      } catch (error) {
          // setError(error)
      }
     
     }
     getUser()
  } catch (error) {
    
  }
})
  return (
    <>
    <div className='flex  flex-wrap '>
    
    <div className='p-2 w-96  '>
    <Link to={`/watch/${videoId}`} className='hover:bg-gray-400 '>
      <img className='rounded-xl hover:opacity-60 transition-opacity duration-300'
      src={thumbnail.url}
      alt='thumbnail'>
      
      </img>
        </Link>
      
      <div className='flex mt-1 '>

        <Link to={`/`} className='hover:bg-gray-200 rounded-lg'>
      <img src={''} 
      className='flex flex-row rounded-full h-[3rem] w-[3.5rem] mr-9 p-1'
            alt="avatar"/>
            </Link>
            
            <Link to={`/watch/${videoId}`} className='hover:bg-gray-200 rounded-xl'>
        <p className='p-1 overflow-hidden text-ellipsis font-bold '> 
         {title}
         </p>
            </Link>
        </div>

        <div className='px-3 mx-9'>
          <Link to={"/channelpage"} className='' >
            {owner}
          </Link>
        </div>

        <div className='flex flex-wrap ml-[3rem]'>
        
          <li className='w-[4.5rem] flex'>
          {views} views 
          </li>
        <li >
          {} hours ago
        </li>
      </div>
      </div>
   
    </div>
    
   


      
   
    
    </>
  )
}

export default VideoCard