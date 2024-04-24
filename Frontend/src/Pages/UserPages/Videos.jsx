import axios from 'axios'
import React, { useEffect, useState } from 'react'
import VideoCard from '../../utils/VideoHandler/VideoCard'

function Videos({userData}) {
    const [videos , setVideos] = useState([])
    const [error , setError] = useState()
    useEffect(()=>{
        console.log(userData._id)
        async function getuservideos(){
            try {
                const response = await axios({
                    method: 'POST',
                    url:'/api/v1/videos/user',
                    data:{
                        'userId': userData._id
                    }
                })
            setVideos(response.data.data)
        } catch (error) {
            setError(true)
            
        }
    }
    getuservideos()
    },[])
  return (
    <div className='flex flex-wrap '>
            {error && <p className='text-center text-3xl font-bold'>Something went wrong Try Refreshing</p>}
            {videos.map((item) => (
                <div key={item._id} className=''>
                    <VideoCard  {...item} />
                </div>
            ))
}
            
            </div>
        
  )
}

export default Videos