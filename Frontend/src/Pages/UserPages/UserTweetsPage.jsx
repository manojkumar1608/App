import React, { useState , useEffect } from 'react'
import TweetCard from '../../components/Handlers/TweetHandling.jsx/TweetCard'
import axios from 'axios'
import LoadingTweetCard from '../../components/utilities/LoadingTweetCard'
import { useNavigate } from 'react-router-dom'
function Tweets({channelData}) {
  const [tweets, setTweets] = useState([])
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  useEffect(() => {
    async function getUserTweets() {
      try {
        const response = await axios.get(`/api/v1/tweets/user/${channelData._id}`)
        const tweetsData = response.data.data

        if (tweetsData) {
          setTweets(tweetsData)
        }
      } catch (error) {
        setError(error)
      }
    }
    getUserTweets()
    const Timeout = setTimeout(() =>{
      setLoading(false)
      },1500)
      return () => clearTimeout(Timeout)
  }, [channelData])
  return (
    tweets?.length > 0 ?(
    <div className='flex flex-col w-[30rem] mx-auto bg-gray-100 rounded-xl'>
    {error && <p className='text-center text-3xl font-bold'>Something went wrong</p>}
    {tweets.map((item) => (
       loading ?(
        <div key={item._id} className=''>
        <LoadingTweetCard tweet = {item} />
    </div>):(
        <div key={item._id} className=''>
            <TweetCard tweet = {item} />
        </div>)
        ))
      }
</div>):(
    <div className='w-full h-screen bg-gray-100 rounded-xl m-2 mr-2 mx-auto'>
    <div className="flex flex-col items-center h-screen ">
<div className="text-4xl font-bold mb-4 text-gray-700">Nothing to show here</div>
<img onClick={()=>navigate('/Tweets')}
src="https://cdn-icons-png.flaticon.com/128/5764/5764384.png" alt="Nothing Found"
className="w-48 h-48 mb-4 cursor-pointer hover:bg-gray-200 rounded-xl" />
<div className="text-2xl font-bold text-gray-700">Start Uploading Tweets</div>
</div>
</div>
)
)

}

export default Tweets