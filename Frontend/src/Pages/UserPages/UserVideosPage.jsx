import axios from 'axios'
import React, { useEffect, useState } from 'react'
import VideoCard from '../../components/Handlers/VideoHandler/VideoCard'

function Videos({channelData}) {
    const [videos , setVideos] = useState([])
    const [error , setError] = useState()
    useEffect(()=>{
        async function getuservideos(){
          
            try {
                const response = await axios({
                    method: 'POST',
                    url:'/api/v1/videos/user',
                    data:{
                        'userId': channelData._id
                    }
                })
                if(response){
            setVideos(response.data.data)
                }
        } catch (error) {
            setError(true)
            
        }
    }
    getuservideos()
    },[channelData])
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