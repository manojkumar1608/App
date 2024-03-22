import React, { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { RxAvatar } from "react-icons/rx";


function VideoCard({videoinfo}) {

  
  return (
    <>
    <div className='flex  flex-wrap '>
    <div className='p-2 w-96 '>
      <Link to="/watch">
      <img className='rounded-xl hover:opacity-60 transition-opacity duration-300'
      src='https://images.pexels.com/photos/1188083/pexels-photo-1188083.png?cs=srgb&dl=sea-dawn-nature-1188083.jpg&fm=jpg'
      alt='thumbnail'>
      
      </img>
        </Link>

      <ul className='flex mt-1 '>

        <Link to="">
      <img src='https://images.pexels.com/photos/1188083/pexels-photo-1188083.png?cs=srgb&dl=sea-dawn-nature-1188083.jpg&fm=jpg 
      'className='flex flex-row rounded-full h-[3rem] w-[3.5rem] mr-9 p-1'
            alt="avatar"/>
            
            </Link>
            
        <li className='p-1 overflow-hidden text-ellipsis font-bold '> 
        <Link to="/watch">
         {/* {videoinfo.title} */}
         Cheeku Dosanjh / SoulCity By Echo RP🚀/ GTA 5 Roleplay #8bit #lifeinsoulcity
        </Link>

        </li>

        </ul>

        <div className='px-3 mx-9'>

          <Link to="/channelpage" className='' >
            {/* {videoinfo?.owner} */}
            Channelname
          </Link>
        </div>

        <ul className='flex flex-wrap ml-[3rem]'>
        
          <li className='w-[5rem] flex'>
          {22} views 
        </li>

        <li>
          {2} hours ago
        </li>
      </ul>
      
    </div>
    <div className='p-2 w-96 '>
      <Link to="/watch">
      <img className='rounded-xl hover:opacity-60 transition-opacity duration-300'
      src='https://images.pexels.com/photos/1188083/pexels-photo-1188083.png?cs=srgb&dl=sea-dawn-nature-1188083.jpg&fm=jpg'
      alt='thumbnail'>
      
      </img>
        </Link>

      <ul className='flex mt-1 '>

        <Link to="">
      <img src='https://images.pexels.com/photos/1188083/pexels-photo-1188083.png?cs=srgb&dl=sea-dawn-nature-1188083.jpg&fm=jpg 
      'className='flex flex-row rounded-full h-[3rem] w-[3.5rem] mr-9 p-1'
            alt="avatar"/>
            
            </Link>
            
        <li className='p-1 overflow-hidden text-ellipsis font-bold '> 
        <Link to="/watch">
         {/* {videoinfo.title} */}
         Cheeku Dosanjh / SoulCity By Echo RP🚀/ GTA 5 Roleplay #8bit #lifeinsoulcity
        </Link>

        </li>

        </ul>

        <div className='px-3 mx-9'>

          <Link to="/channelpage" className='' >
            {/* {videoinfo?.owner} */}
            Channelname
          </Link>
        </div>

        <ul className='flex flex-wrap ml-[3rem]'>
        
          <li className='w-[5rem] flex'>
          {22} views 
        </li>

        <li>
          {2} hours ago
        </li>
      </ul>
      
    </div>
    <div className='p-2 w-96 '>
      <Link to="/watch">
      <img className='rounded-xl hover:opacity-60 transition-opacity duration-300'
      src='https://images.pexels.com/photos/1188083/pexels-photo-1188083.png?cs=srgb&dl=sea-dawn-nature-1188083.jpg&fm=jpg'
      alt='thumbnail'>
      
      </img>
        </Link>

      <ul className='flex mt-1 '>

        <Link to="">
      <img src='https://images.pexels.com/photos/1188083/pexels-photo-1188083.png?cs=srgb&dl=sea-dawn-nature-1188083.jpg&fm=jpg 
      'className='flex flex-row rounded-full h-[3rem] w-[3.5rem] mr-9 p-1'
            alt="avatar"/>
            
            </Link>
            
        <li className='p-1 overflow-hidden text-ellipsis font-bold '> 
        <Link to="/watch">
         {/* {videoinfo.title} */}
         Cheeku Dosanjh / SoulCity By Echo RP🚀/ GTA 5 Roleplay #8bit #lifeinsoulcity
        </Link>

        </li>

        </ul>

        <div className='px-3 mx-9'>

          <Link to="/channelpage" className='' >
            {/* {videoinfo?.owner} */}
            Channelname
          </Link>
        </div>

        <ul className='flex flex-wrap ml-[3rem]'>
        
          <li className='w-[5rem] flex'>
          {22} views 
        </li>

        <li>
          {2} hours ago
        </li>
      </ul>
      
    </div>
    <div className='p-2 w-96 '>
      <Link to="/watch">
      <img className='rounded-xl hover:opacity-60 transition-opacity duration-300'
      src='https://images.pexels.com/photos/1188083/pexels-photo-1188083.png?cs=srgb&dl=sea-dawn-nature-1188083.jpg&fm=jpg'
      alt='thumbnail'>
      
      </img>
        </Link>

      <ul className='flex mt-1 '>

        <Link to="">
      <img src='https://images.pexels.com/photos/1188083/pexels-photo-1188083.png?cs=srgb&dl=sea-dawn-nature-1188083.jpg&fm=jpg 
      'className='flex flex-row rounded-full h-[3rem] w-[3.5rem] mr-9 p-1'
            alt="avatar"/>
            
            </Link>
            
        <li className='p-1 overflow-hidden text-ellipsis font-bold '> 
        <Link to="/watch">
         {/* {videoinfo.title} */}
         Cheeku Dosanjh / SoulCity By Echo RP🚀/ GTA 5 Roleplay #8bit #lifeinsoulcity
        </Link>

        </li>

        </ul>

        <div className='px-3 mx-9'>

          <Link to="/channelpage" className='' >
            {/* {videoinfo?.owner} */}
            Channelname
          </Link>
        </div>

        <ul className='flex flex-wrap ml-[3rem]'>
        
          <li className='w-[5rem] flex'>
          {22} views 
        </li>

        <li>
          {2} hours ago
        </li>
      </ul>
      
    </div>
    
    </div>
    
    </>
  )
}

export default VideoCard