import React from 'react'
import ReactPlayer from 'react-player'
import VideoCard from './VideoCard'
import { RxAvatar } from "react-icons/rx";
import { Link } from 'react-router-dom';
import Button from "./Button"
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import CommentBox from './CommentsContainer';


function WatchPage() {
  return (
     <>
    
<div className='flex flex-wrap '>
<video  className='rounded-2xl mt-2  w-[48rem] h-[27rem]'
      controls preload="auto" >
         <source src="https://player.vimeo.com/progressive_redirect/playback/886997843/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=0bdf99fb220267c15494b38516af6975b25a5b1c9372f4d3e40f293a978199e3" 
                type="video/mp4"/>
       
      </video>
     
      <div className='flex h-screen'>
         <VideoCard/>

      </div>

      </div>



      <div className='w-1/2 p-2 border-t-2 border-gray-500  shadow-lg shadow-gray-500 ml-1 mr-1 mt-2 rounded-xl'>
         <ul className='flex flex-wrap rounded-2xl shadow-sm hover:bg-gray-200'>
         <li className='p-2 overflow-hidden text-ellipsis font-bold '> 
        {/* {videoinfo.title} */}
        Cheeku Dosanjh / SoulCity By Echo RP🚀/ GTA 5 Roleplay #8bit #lifeinsoulcity
        </li>

        <li className='w-[5rem] ml-2'>
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
      'className='flex flex-row rounded-full h-[3rem] w-[3rem] p-1 mt-1 mr-2'
            alt="avatar"/> 
            </Link>
            </li>

            <ul >

            <li className=' mt-2 mr-4 font-semibold'>
               <Link to="/">
               Channelname
               
               </Link>
            </li>

            <li className=' text-gray-400 w-[13rem]'>
               Followers
            </li>
           
            </ul>

            <Button className='w-[6rem] m-3 p-2 bg-gray-800  rounded-3xl hover:bg-gray-500'>
               Follow
            </Button>


            </ul>

           <div className='flex flex-row mt-2 ml-2 bg-gray-800 w-[10rem] rounded-full'>

            <Button className=' flex w-[6rem] bg-gray-800 rounded-r-xl hover:bg-gray-500'>

            <BiLike className='text-2xl mr-2 '/>
            <h2 className='font-medium '>{200}</h2>

            </Button>
            <div className='flex mt-1 h-8 w-0.5 bg-gray-500 '>

            </div>

            <Button className=' flex w-[4rem] bg-gray-800 rounded-l-xl hover:bg-gray-500'>
               
               <BiDislike className='text-2xl'/>

            </Button>
            </div>
            
         </div>

         <div>
            <CommentBox/>
         </div>


         </div>

   </>


  )
}

export default WatchPage