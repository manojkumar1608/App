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
                    const videos = response.data.data.videos
                    const result = videos.filter((video)=>{ //filtering video objects which are empty in the response array
                        return video.videos
                    })
                setVideos(result)

                }else{
                    setError("Something went wrong while fetching videos TRY REFRESHING")
                }
            } catch (error) {
                setError("Something went wrong while fetching videos TRY REFRESHING")
            }

        }
        getLikedVideos()
    },[])
  return (
    <> 
     <header className="bg-gradient-to-t from-gray-200 to-gray-400 text-white py-2 rounded-lg mt-1">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl text-gray-700 font-bold">Your Liked videos</h1>
      </div>
    </header>
    <div className='flex flex-wrap'>
            {error && <p className='text-center text-3xl font-bold'>{error}</p>}
            {videos.map((item) => (
                <div key={item._id} className=''>
                    <VideoCard {...item.videos} />
                </div>
            ))
}
            
            </div>
            </>
            )
}

export default LikedVideos