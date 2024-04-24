import axios from 'axios'
import React, { useEffect, useState } from 'react'
import VideoCard from '../../utils/VideoHandler/VideoCard'
function LikedVideos() {
    const [videos , setVideos] = useState([])
    const [error , setError] = useState()
    useEffect(() =>{
        async function getLikedVideos() {
            try {
                const response = await axios.get('/api/v1/likes/L/videos')
                if(response){
                setVideos(response.data.data.videos)
                }else{
                    setError("Something went wrong while fetching videos TRY REFRESHING")
                }
            } catch (error) {
                setError("Something went wrong while fetching videos TRY REFRESHING")
            }

        }
        getLikedVideos()
    },[])
    console.log(videos)
  return (
    <div className='flex flex-wrap'>
            {error && <p className='text-center text-3xl font-bold'>{error}</p>}
            {videos.map((item) => (
                // console.log({...item.videos})
                <div key={item.videos?._id} className=''>
                    <VideoCard {...item.videos} />
                </div>
            ))
}
            
            </div>
  )
}

export default LikedVideos