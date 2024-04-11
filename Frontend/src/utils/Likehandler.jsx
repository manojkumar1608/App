import React, { useEffect ,useState } from 'react'
import {useSelector} from 'react-redux'
import Button from '../components/Button'
import  { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
function Likehandler({video}) {
  const [loading, setLoading] = useState(true)
  let [Like , setLike] = useState(null)
  const [change, setChange] = useState()
  let [disLike , setDisLike] = useState()
  const userData = useSelector((state)=>state.auth.userData)
  const navigate  = useNavigate()
  
  
  useEffect(() =>{ 
      if( userData){
        axios({
          method: 'GET',
                url: '/api/v1/likes/videos'
            }).then(response =>{
                const videosarr =response.data.data.videos
                const result = videosarr.filter((videoarr)=>{
                    return videoarr._id === video._id
                })
                if(result){
                  const video = result
                    setLike(video)
                }
            })   
             .finally(() => setLoading(false))

        }else{
            navigate('/')
        }
        
    
    
    },[userData , video, navigate ,loading ,change , ])

    const LikeHandler = () => {
        if (video._id) {
           axios.post(`/api/v1/likes/toggle/v/${video._id}`)
              .then(response => {
                setChange(response.data)
              })
        }if(change.data.deleteLike){
          setDisLike(false)
        }
       
        
     }
     
     const DislikeHandler = () =>{
       setDisLike(disLike = !disLike)
       if(Like.length > 0){
            axios.post(`/api/v1/likes/toggle/v/${video._id}`)
            .then(response => {
                setChange(response.data)
              })
            }
        }
     
  console.log(Like)
  return !loading ? (
    <div className='flex flex-row'>
               <div className='flex mt-2 ml-2 bg-gray-800 border-r rounded-full'>
                  {
                    Like.length > 0 ?(
                        <Button onClick={LikeHandler}
                           className='flex bg-gray-800 rounded-r-xl hover:bg-gray-500'>
                           <BiSolidLike className='text-2xl ' />
                           <h2 className='font-medium ml-2 '>{200}</h2>
                        </Button>) : <Button onClick={LikeHandler}
                           className=' flex bg-gray-800 rounded-r-xl hover:bg-gray-500'>
                        <BiLike className='text-2xl ' />
                        <h2 className='font-medium ml-1 '>{200}</h2>
                     </Button>

                  }
                  </div>
                  <div className='flex  mt-2  bg-gray-800  rounded-full '>

                  { 
                   !Like.legnth > 0 && disLike ? (
                     <Button onClick={DislikeHandler}
                      className=' flex bg-gray-800 rounded-l-xl hover:bg-gray-500'>
                        <BiSolidDislike className='text-2xl' />
                     </Button>) :  <Button onClick={DislikeHandler}
                      className=' flex bg-gray-800 rounded-l-xl hover:bg-gray-500'>
                        <BiDislike className='text-2xl' />
                     </Button>
                  }
               </div>
               </div>
  ):null
}

export default Likehandler