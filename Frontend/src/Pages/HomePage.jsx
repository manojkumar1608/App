import React, { useEffect, useState } from 'react'
import axios from 'axios'
import VideoCard from '../components/VideoCard'


function HomePage() {
    const [ error , setError ] = useState()
const [videos ,  setVideo ] = useState([])
useEffect(()=>{
       async function getVideos(){
        try {
            const response = await axios.get('/api/v1/videos/')
            const videodata = response.data.data
            if(videodata){
                setVideo(videodata.docs)
            }
            
        } catch (error) {
            setError(error)
        }
       
       }
       getVideos()
},[])

  return (
    <div className='flex'>
        {error && <p className='text-center text-3xl font-bold'>Something went wrong</p>}
        {videos.map((video)=>(
            <div key={video._id} className=''>
                <VideoCard  {...video} />
            </div>
        ))

        }
    </div>
  )
}


export default HomePage