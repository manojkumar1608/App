import React, { useEffect, useState } from 'react'
import axios from 'axios'
import VideoCard from '../components/VideoCard'
import container from '../components/Container/container'

function HomePage() {
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
                setError(error)
            }

        }
        getVideos()
    }, [])
    return (
        <div className='w-full '>
        <div className='flex flex-wrap '>
            {error && <p className='text-center text-3xl font-bold'>Something went wrong Try Refreshing</p>}
            {videos.map((video) => (
                <div key={video._id} className=''>
                    <VideoCard  {...video} />
                </div>
            ))

            }
        </div>
        </div>
    )
}


export default HomePage