import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import UserHomePage from '../../../Pages/UserPages/UserHomePage.jsx'
import Videos from '../../../Pages/UserPages/UserVideosPage.jsx'
import Tweets from '../../../Pages/UserPages/UserTweetsPage.jsx'
import Tabs from './Tabs.jsx';
import axios from 'axios'
import { BiLogIn } from "react-icons/bi";
import Button from '../../utilities/Button.jsx'
import { RiImageEditFill } from "react-icons/ri";
import { useSelector } from 'react-redux'
import ChangeAvatarHandling from './UserAvatar.jsx'
import UserAvatar from './UserAvatar.jsx'
import UserCoverImage from './UserCoverImage.jsx'

 function YourAccount() {
  const cuurentuser = useSelector((state)=> state.auth.userData)
  const [userData , setUserData] = useState()
  
  const [error , setError] = useState()
  const { username } = useParams()
  const tabs = [
    { title: 'Home', content: <UserHomePage userData={userData}/> },
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
  setError('Something went wrong Ty Refreshing')
  
}
  }
  getchannel()
 },[])

 

  return userData ?(
<div>
{error && <p className='text-center text-3xl font-bold'>{error}</p>}

 <UserCoverImage userData={userData}/>

  <div className='flex flex-row w-1/2 mx-11 p-1 justify-start '>
    
    <UserAvatar userData={userData} />

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
  ):(
    <div className='w-full h-screen bg-gradient-to-r from-gray-200 to-gray-500'>
    <div className='flex  justify-center '>
        <BiLogIn className='text-7xl mt-10 mr-2' />
        <h1 className='text-3xl font-bold mt-12'>Login to get Your Channel</h1>
    </div>
    <div className='flex justify-center '>
        <Link to={'/login'}>
            <Button
                type='button'
                className='bg-red-700 rounded-lg'>
                Login
            </Button>
        </Link>

    </div>

   
</div>
  )
}

export default YourAccount