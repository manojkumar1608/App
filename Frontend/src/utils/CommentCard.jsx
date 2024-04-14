import React, { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { useSelector } from 'react-redux';
function CommentCard({ content ,createdAt, owner }) {
    const[user , setUser] = useState()
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
    return user ?(
    <div className="flex flex-wrap  p-3 mb-4">
                        {/* Avatar */}
                        <div className="mr-3 ">
                            <img
                                className='size-12 rounded-full'
                                src={user.avatar} />
                        </div>

                        {/* Comment content */}
                        <div>
                            <p className="inline-block text-xl text-gray-800 font-semibold mr-2">{user.username}</p>
                             <span className='text-gray-400'>{createdAt} </span>
                            <p className="text-lg text-black mb-1">{content}</p>
                    <div className="mt-3 space-x-6">
                        <button className="text-sm text-gray-500 focus:outline-none hover:text-gray-700">
                        <BiLike className='inline-block size-6'/> <span>{20}</span>
                        </button>
                        <button className="text-sm text-gray-500 focus:outline-none hover:text-gray-700">
                        <BiDislike className='inline-block size-6'/> <span>{}</span>
                        </button>
                        <button className="text-sm text-gray-500 focus:outline-none hover:text-gray-700">
                            Reply
                        </button>
                        </div>
                    </div> 
                    </div>
  ):null;
}

export default CommentCard