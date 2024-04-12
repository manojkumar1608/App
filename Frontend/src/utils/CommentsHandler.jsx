import React, { useState , useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'

function CommentsHandler({ video }) {
    const userData = useSelector((state) => state.auth.userData)

    const navigate = useNavigate()
    const [loading, setLoading] = useState()
    const [change , setchange] = useState()
    const [error , setError] = useState()
    const [newComment , setNewComment] = useState()
    const [comments, setVideoComments] = useState()

    const {handleSubmit, register} = useForm({
        defaultValues:{
            content:comments?.content
        }
    })
    useEffect(() => {
        setError("")
        try {
            if (video) {
                axios({
                    method: 'GET',
                    url: `/api/v1/comments/${video._id}`
                }).then(response => {
                    console.log(response)
                    setVideoComments(response.data.data)
                    if (userData) {
                        const commentsarr = response.data.data.aggregateLikes
                        const commented = commentsarr.filter((commentarr) => {
                            return userData.data._id === commentarr.owner
                        })
                        if (commented) {
                            setVideoComments(commented)
                        }
                    }
                })
                    .finally(() => setLoading(false))

            } else {
                navigate('/')
            }
        } catch (error) {
            // setError(error.response.statusText + ":" + "Something went wrong")
        }

    }, [userData, video, navigate, loading, change])

    const create = async (data) => {
        setError("")
        try {
            const commentData = await axios({
                method: 'POST',
                url:`/api/v1/comments/${video._id}`,
                data:{
                    'content' : data.content
                },
                
            })
            console.log(commentData)
            if(commentData){
                setchange(commentData.data)
            }
        } catch (error) {
            
        }

    }

    return (
        <form onSubmit={handleSubmit(create)}>
        <textarea
          className="w-full p-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:border-blue-500"
          placeholder="Write a comment..."
          {...register("content",{ required:true })}
        ></textarea>
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Post Comment
        </button>
      </form>
  )
}

export default CommentsHandler