import React, { useEffect, useState } from 'react'
import VideoCard from '../components/VideoCard'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Button from "../components/Button"
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import CommentBox from '../components/CommentsContainer';
import { useSelector } from 'react-redux';
import axios from 'axios';
import HomePage from './HomePage';
import { RiDropdownList } from "react-icons/ri";


function WatchPage() {
   const { videoId } = useParams()
   const navigate = useNavigate()
   const [video, setVideo] = useState(null)
   let [clicked, setClicked] = useState(false)
   const [user, setUser] = useState(null)

   const userData = useSelector((state) => state.auth.userData)
   const isAuthor = video && userData ? userData.data._id === video.owner : false
   useEffect(() => {
      if (videoId) {
         axios({
           method: 'GET',
           url: `/api/v1/videos/${videoId}`,
          
         }).then((response) => {
           if (response) {
             const videoData = response.data.data.video
             console.log(videoData)
             setVideo(videoData)
             const owner = videoData.owner
             if(owner){
               axios({
                  method: 'POST',
                  url:'/api/v1/users/getuserbyId',
                  data:{
                     userId : owner
                  }
               }).then(response => {
                  const userData = response.data.data
                  setUser(userData)
               })
             }else{
               navigate('/')
             }
           }else{
            navigate('/')
           }
         }) 
       }else{
         navigate('/')
       }      
   }, [ videoId,navigate,])

   const deleteVideo = () => {
      axios.delete(`/api/v1/videos/${videoId}`).then((status) => {
          if (status) {
              navigate("/");
          }
      });
  };
  const handledes = () => {
setClicked(clicked = !clicked)
  }
  console.log(clicked )

   return video && user && (
      <>
         <div className='flex flex-col'>
            <video className='rounded-2xl mt-2  w-[47rem] h-[27rem]'
               controls preload="auto"  >
               <source src={video.videoFile.url}
                  type="video/mp4" />
            </video>


            <div className='flex flex-row text-sm'>
               <HomePage/>
            </div>
         </div>




         <div className='min-w-[26rem] p-2 border-t-2 border-gray-500  shadow-lg shadow-gray-400  mr-1 mt-2 rounded-xl'>
               <p className='p-2 overflow-hidden text-ellipsis font-bold text-xl bg-gray-100 rounded-xl'>
                  {video.title}
               </p>

                  <p className='mx-2 my-1 font-semibold text-gray-700'>  {video.views} views • 2 days ago</p>

                  <div onClick = {handledes}
                  className='flex flex-row  w-full my-3 bg-gray-200 rounded-xl text-lg font-bold shadow-md shadow-gray-300 hover:cursor-pointer'>
              <p 
              className='w-80 ml-2 my-1'>
                 Description 
              </p>
                 <RiDropdownList className='mt-2 ml-9 text-2xl'/>
              </div>

              {clicked && (
               <div className=' min-h-48 bg-gray-200 rounded-xl '>
                 <p className='ml-2 p-2 mt-2 font-semibold'> {video.description} </p>
               </div>
              )}
             
              

            <div />

            <div className='mt-3 '>
               <div className='flex flex-row '>
                     <Link to="/" >
                        <img src={user.avatar}
      className='flex flex-row rounded-full h-[3.5rem] w-[3.5rem] p-1 mt-1 mr-1  '
                           alt="avatar" />
                     </Link>

                     <div>
                     <p className='text-xl mt-2 mr-4 font-semibold'>
                        <Link to="/">
                           {user.username}

                        </Link>
                     </p>

                     <p className=' text-gray-400 w-[11rem]'>
                        Followers
                     </p>
                     </div>

                  {
                     
                     !isAuthor ? (
                     <Button className='w-[6rem] m-3 p-2 bg-gray-800  rounded-3xl hover:bg-gray-500'>
                        Follow
                     </Button>):
                     ( <div className="flex flex-row mt-4">
                     <Link to={`/edit-video/${video._id}`}>
                         <Button bgColor=" bg-gradient-to-r from-green-600 to-green-950 mr-3 rounded-xl font-semibold" >
                             Edit
                         </Button>
                     </Link>
                     <Button bgColor=" bg-gradient-to-r from-red-600 to-red-950" className="h-fit font-semibold rounded-xl"
                      onClick={deleteVideo}>
                         Delete
                     </Button>
                 </div>)
                     
                     
                  }

               </div>

               <div className='flex flex-row mt-2 ml-2 bg-gray-800 w-[10rem] rounded-full'>

                  <Button className=' flex w-[6rem] bg-gray-800 rounded-r-xl hover:bg-gray-500'>

                     <BiLike className='text-2xl mr-2 ' />
                     <h2 className='font-medium '>{200}</h2>

                  </Button>
                  <div className='flex mt-1 h-8 w-0.5 bg-gray-500 '>

                  </div>

                  <Button className=' flex w-[4rem] bg-gray-800 rounded-l-xl hover:bg-gray-500'>

                     <BiDislike className='text-2xl' />

                  </Button>
               </div>

            </div>

            <div>
               <CommentBox />
            </div>


         </div>

      </>

   )

}

export default WatchPage