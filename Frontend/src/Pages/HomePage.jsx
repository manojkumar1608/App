import React, { useEffect, useState } from 'react'
import axios from 'axios'
import VideoCard from '../components/Handlers/VideoHandler/VideoCard'
import Loadingpage from '../components/utilities/Loadingpage'

function HomePage() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    const [videos, setVideo] = useState([])
    useEffect(() => {

        async function getVideos() {
            try {
                const response = await axios.get('/api/v1/videos/')
                const videodata = response.data.data
                if (videodata) {
                    setVideo(videodata.docs)
                }

            } catch (error) {
                setError("Something went wrong Try Refreshing")
            }

        }
        getVideos()
        
        const Timeout = setTimeout(() =>{
        setLoading(false)
        },2000)
        return () => clearTimeout(Timeout) 
    }, [])
    return (
        <>
       
        
         <div className='flex flex-wrap ml-3.5'>
        {error && <p className='text-gray-700 text-center text-3xl font-bold'>{error}</p>}
        {videos.map((video) => (
            loading ? (
                <div key={video._id}>
                    <Loadingpage {...video}/>
                </div> ) :
           ( <div key={video._id} className=''>
                <VideoCard  {...video} />
            </div>)
            
        ))
}
         </div>
        

</>
    )
}


export default HomePage