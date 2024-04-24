import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import UserHomePage from '../../Pages/UserPages/UserHomePage.jsx';
import Videos from '../../Pages/UserPages/Videos.jsx';
import Tweets from '../../Pages/UserPages/Tweets.jsx';
import Tabs from './Tabs.jsx';
import axios from 'axios'
 function YourAccount() {
  const [userData , setUserData] = useState()
  const { username } = useParams()
  const tabs = [
    { title: 'Home', content: <UserHomePage userData={userData} /> },
    { title: 'Videos', content: <Videos userData={userData}/> },
    { title: 'Tweets', content: <Tweets userData={userData} /> },
  ];

   useEffect(()=>{
  async function getchannel(){
try {
  const channelData = await axios({
    method: 'GET',
    url:`/api/v1/users/c/${username}`
  })
  if(channelData){
    setUserData(channelData.data.data)
  }
  
} catch (error) {
  
}
  }
  getchannel()
 },[])

  return userData &&(

<div>
  {userData.coverImage &&
  <div className='w-[67rem] h-40 bg-gray-400 mx-11 mt-2 mb-1 p-1 rounded-xl'>
  <img src={userData.coverImage} alt="Cover" className="object-cover w-full h-full rounded-xl" />
  </div>
 }
  <div className='flex flex-row w-1/2 mx-11 p-1 justify-start '>
  <div className=" mr-2 rounded-full border-4 border-white ">
 <img src={userData.avatar} alt="Avatar" className="w-40 h-40 rounded-full" />
   </div>
  <div className='mt-6 '>
  <h1 className=" text-3xl font-bold ">{userData.username}</h1>
       <h2 className="text-xl mb-2 font-semibold text-gray-400">@{userData.fullName} • {userData.email}</h2>
       <p className='font-semibold text-gray-400 '>Followers {userData.subscribersCount} • Following {userData.channelsubscribedCount}</p>
  </div>
  </div>
  <div className=" mt-3">
    <Tabs tabs={tabs} />
  </div>
</div>
  )
}

export default YourAccount