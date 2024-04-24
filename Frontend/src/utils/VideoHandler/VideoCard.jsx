import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'



function VideoCard({ _id, title, thumbnail, owner, views, createdAt, updatedAt }) {

  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  

  useEffect(() => {
    if (owner) {
      axios({
        method: 'POST',
        url: '/api/v1/users/getuserbyId',
        data: {
          userId: owner
        }
      }).then((response) => {
        if (response) {
          const userData = response.data.data
          setUser(userData)
        } else {
          navigate('/')
        }
      })
    } else {
      navigate('/')
    }
  }, [owner, navigate ])

  return user ? (
    <>
   
      <div className="w-[23rem] m-1.5 mt-3 rounded-xl object-cover">
        <Link to={`/watch/${_id}`}>
    <img  src={thumbnail.url} alt="Video Thumbnail" className="w-96 h-56 border bg-gray-100 rounded-xl object-cover"/>
        </Link>
        
        
    <div className='flex flex-row'>

      <Link to={`/acc/${user.username}`}>
    <img src={user.avatar} alt="avatar" className="rounded-full w-[3rem] h-[3rem] mt-2 object-cover"/>
      </Link>
       
    <div className="p-2 ml-1">

      <Link to={`/watch/${_id}`}>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </Link>

        <Link to={`/acc/${user.username}`}>
        <p className="text-md text-gray-600">{user.username} </p> 
        </Link>

        <p>  {views} views • 2 days ago</p>
    </div>
    

    
    </div>
</div>






    </>
  ) : null
}

export default VideoCard