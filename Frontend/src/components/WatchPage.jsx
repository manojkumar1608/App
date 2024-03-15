import React from 'react'

function WatchPage() {
  return (
      <div className="flex flex-wrap m-2">
    <iframe
      className="bg-gray-200 rounded-xl"   
      width="750"
      height="400"  
      src='https://www.youtube.com/live/EAJPrB0hXVQ?si=6enU1DClY9Fj4frJ'
      title="YouTube video player"
      // frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  </div>
  )
}

export default WatchPage