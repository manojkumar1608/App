import axios from 'axios'
import React, { useEffect } from 'react'

function WatchHistoryPage() {
    useEffect(() =>{
      async function getWatchHistory(){
        const response = await axios.get('/api/v1/users/history')
        console.log(response)
      }
      getWatchHistory()
    },[])
  return (
    <div>WatchHistoryPage</div>
  )
}

export default WatchHistoryPage