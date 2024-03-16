import React from 'react'
import ReactPlayer from 'react-player'
import VideoCard from './VideoCard'
import { RxAvatar } from "react-icons/rx";
import { Link } from 'react-router-dom';
import Button from "./Button"

function WatchPage() {
  return (
     <>
    
<div className='flex flex-wrap'>
<video  className='rounded-2xl mt-2  w-[48rem] h-[27rem]'
      controls preload="auto" >
         <source src="https://player.vimeo.com/progressive_redirect/playback/886997843/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=0bdf99fb220267c15494b38516af6975b25a5b1c9372f4d3e40f293a978199e3" 
                type="video/mp4"/>
       
      </video>
     
      <div className='flex h-screen'>
         <VideoCard/>
      </div>

      </div>



      <div className=' relative w-[73rem] border border-black shadow-2xl  mr-3 mt-4 rounded-xl'>
         <ul className='flex flex-wrap'>
         <li className='p-2 overflow-hidden text-ellipsis font-bold '> 
        {/* {videoinfo.title} */}
        Cheeku Dosanjh / SoulCity By Echo RP🚀/ GTA 5 Roleplay #8bit #lifeinsoulcity
        </li>

        <li className='flex flex-row w-[5rem]'>
          {22} views 
        </li>

        <li>
          {2} hours ago
        </li>

         </ul>
         <div/>

         <div className='mt-3 '>
         <ul className='flex flex-row '>
            <li>
            <Link to="/">
      <img src='https://images.pexels.com/photos/1188083/pexels-photo-1188083.png?cs=srgb&dl=sea-dawn-nature-1188083.jpg&fm=jpg 
      'className='flex flex-row rounded-full h-[3rem] w-[3rem] p-1 mt-1'
            alt="avatar"/> 
            </Link>
            </li>

            <ul >

            <li className=' mt-2 mr-4 font-semibold'>
               <Link to="/">
               Channelname
               
               </Link>
            </li>
            <li className=' text-gray-400 w-[14rem]'>
               Followers
            </li>
           
            </ul>

            <Button className=' m-3 p-2 rounded-3xl w-[6rem]'>
               Follow
            </Button>

            </ul>
            
         </div>


         </div>

   </>


  )
}

export default WatchPage