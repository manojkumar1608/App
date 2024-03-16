import React, { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { RxAvatar } from "react-icons/rx";


function VideoCard({videoinfo}) {

  
  return (
    <>
    <div className='flex  flex-wrap '>
    <div className='p-2 w-96 '>
      <img className='rounded-xl hover:opacity-60 transition-opacity duration-300'
      src='https://images.pexels.com/photos/1188083/pexels-photo-1188083.png?cs=srgb&dl=sea-dawn-nature-1188083.jpg&fm=jpg'
      alt='thumbnail'>
      
      </img>

      <ul className='flex mt-1'>

        <Link>
      <img src='https://images.pexels.com/photos/1188083/pexels-photo-1188083.png?cs=srgb&dl=sea-dawn-nature-1188083.jpg&fm=jpg 
      'className='flex flex-row rounded-full h-[3rem] w-[3.5rem] mr-9 p-1'
            alt="avatar"/>
            </Link>
            
        <li className='p-2 overflow-hidden text-ellipsis font-bold '> 
        {/* {videoinfo.title} */}
        Cheeku Dosanjh / SoulCity By Echo RP🚀/ GTA 5 Roleplay #8bit #lifeinsoulcity
        </li>

        </ul>


        <ul className='ml-[3rem]'>
          
        <li className='flex flex-col'>
          <Link to="/channelpage" className='' >
            {/* {videoinfo?.owner} */}
            Channelname
          </Link>
          </li>
          <li className='flex justify-evenly'>
          {videoinfo?.views} views {}<RxAvatar/>{}hours ago
        </li>
      </ul>
      
    </div>
    <div className='p-2 w-96 '>
      <img className='rounded-xl hover:opacity-60 transition-opacity duration-300'
      src='https://images.pexels.com/photos/1188083/pexels-photo-1188083.png?cs=srgb&dl=sea-dawn-nature-1188083.jpg&fm=jpg'
      alt='thumbnail'>
      
      </img>

      <ul className='flex mt-1'>

        <Link>
      <img src='https://images.pexels.com/photos/1188083/pexels-photo-1188083.png?cs=srgb&dl=sea-dawn-nature-1188083.jpg&fm=jpg 
      'className='flex flex-row rounded-full h-[3rem] w-[3.5rem] mr-9 p-1'
            alt="avatar"/>
            </Link>
            
        <li className='p-2 overflow-hidden text-ellipsis font-bold '> 
        {/* {videoinfo.title} */}
        Cheeku Dosanjh / SoulCity By Echo RP🚀/ GTA 5 Roleplay #8bit #lifeinsoulcity
        </li>

        </ul>


        <ul className='ml-[3rem]'>
          
        <li className='flex flex-col'>
          <Link to="/channelpage" className='' >
            {/* {videoinfo?.owner} */}
            Channelname
          </Link>
          </li>
          <li className='flex justify-evenly'>
          {videoinfo?.views} views {}<RxAvatar/>{}hours ago
        </li>
      </ul>
      
    </div>
    <div className='p-2 w-96 '>
      <img className='rounded-xl hover:opacity-60 transition-opacity duration-300'
      src='https://images.pexels.com/photos/1188083/pexels-photo-1188083.png?cs=srgb&dl=sea-dawn-nature-1188083.jpg&fm=jpg'
      alt='thumbnail'>
      
      </img>

      <ul className='flex mt-1'>

        <Link>
      <img src='https://images.pexels.com/photos/1188083/pexels-photo-1188083.png?cs=srgb&dl=sea-dawn-nature-1188083.jpg&fm=jpg 
      'className='flex flex-row rounded-full h-[3rem] w-[3.5rem] mr-9 p-1'
            alt="avatar"/>
            </Link>
            
        <li className='p-2 overflow-hidden text-ellipsis font-bold '> 
        {/* {videoinfo.title} */}
        Cheeku Dosanjh / SoulCity By Echo RP🚀/ GTA 5 Roleplay #8bit #lifeinsoulcity
        </li>

        </ul>


        <ul className='ml-[3rem]'>
          
        <li className='flex flex-col'>
          <Link to="/channelpage" className='' >
            {/* {videoinfo?.owner} */}
            Channelname
          </Link>
          </li>
          <li className='flex justify-evenly'>
          {videoinfo?.views} views {}<RxAvatar/>{}hours ago
        </li>
      </ul>
      
    </div>
    <div className='p-2 w-96 '>
      <img className='rounded-xl hover:opacity-60 transition-opacity duration-300'
      src='https://images.pexels.com/photos/1188083/pexels-photo-1188083.png?cs=srgb&dl=sea-dawn-nature-1188083.jpg&fm=jpg'
      alt='thumbnail'>
      
      </img>

      <ul className='flex mt-1'>

        <Link>
      <img src='https://images.pexels.com/photos/1188083/pexels-photo-1188083.png?cs=srgb&dl=sea-dawn-nature-1188083.jpg&fm=jpg 
      'className='flex flex-row rounded-full h-[3rem] w-[3.5rem] mr-9 p-1'
            alt="avatar"/>
            </Link>
            
        <li className='p-2 overflow-hidden text-ellipsis font-bold '> 
        {/* {videoinfo.title} */}
        Cheeku Dosanjh / SoulCity By Echo RP🚀/ GTA 5 Roleplay #8bit #lifeinsoulcity
        </li>

        </ul>


        <ul className='ml-[3rem]'>
          
        <li className='flex flex-col'>
          <Link to="/channelpage" className='' >
            {/* {videoinfo?.owner} */}
            Channelname
          </Link>
          </li>
          <li className='flex justify-evenly'>
          {videoinfo?.views} views {}<RxAvatar/>{}hours ago
        </li>
      </ul>
      
    </div>
    
   
    </div>
    
    </>
  )
}

export default VideoCard