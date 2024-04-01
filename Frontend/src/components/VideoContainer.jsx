import React from 'react'
import VideoCard from './VideoCard'

function VideoContainer({videoinfo}) {
  return (
    <div>
        <VideoCard videoinfo={videoinfo}/>
    </div>
  )
}

export default VideoContainer