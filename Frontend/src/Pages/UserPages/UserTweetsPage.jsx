import React, { useState , useEffect } from 'react'
import TweetCard from '../../components/Handlers/TweetHandling.jsx/TweetCard'
import axios from 'axios'
function Tweets({userData}) {
  const [tweets, setTweets] = useState([])
  const [error, setError] = useState()
  useEffect(() => {
    async function getUserTweets() {
      try {
        const response = await axios.get(`/api/v1/tweets/user/${userData._id}`)
        const tweetsData = response.data.data

        if (tweetsData) {
          setTweets(tweetsData)
        }
      } catch (error) {
        setError(error)
      }
    }
    getUserTweets()
  }, [])
  return (
    <div className='flex flex-col w-[30rem] mx-auto bg-gray-100 rounded-xl'>
    {error && <p className='text-center text-3xl font-bold'>Something went wrong</p>}
    {tweets.map((item) => (
        <div key={item._id} className=''>
            <TweetCard tweet = {item} />
        </div>
        ))
      }
</div>
)

}

export default Tweets