import React from 'react'
import axios from 'axios'
function Likes({video}) {
    const Likes = () => {
        axios({
            method:'GET',
            url:`/api/v1/likes/likes/${video._id}`
        }).then(response =>{
            console.log(response)
        })

    }
  return (
    <div onClick={Likes}></div>
  )
}

export default Likes