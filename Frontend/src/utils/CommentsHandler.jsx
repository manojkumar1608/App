import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import CommentCard from './CommentCard'
import Button from '../components/Button'

function CommentsHandler({ video }) {
    const userData = useSelector((state) => state.auth.userData)
    const navigate = useNavigate()
    const [loading, setLoading] = useState()
    const [change, setchange] = useState()
    const [error, setError] = useState()
    const [currentUserComments, setcurrentUsercomments] = useState()
    const [VideoComments, setVideoComments] = useState()

    const { handleSubmit, register } = useForm({
        defaultValues: {
            content: VideoComments?.content
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
                    setVideoComments(response.data.data.Comments)
                    if (userData) {
                        const commentsarr = response.data.data.Comments
                        const commented = commentsarr.filter((commentarr) => {
                            return userData.data._id === commentarr.owner
                        })
                        if (commented) {
                            setcurrentUsercomments(commented)
                        }
                    }
                })
                    .finally(() => setLoading(false))

            } else {
                navigate('/')
            }
        } catch (error) {
            console.log(error.response)
            // setError(error.response.statusText + ":" + "Something went wrong")
        }

    }, [userData, video, navigate, loading, change])

    if (error) {
        setTimeout(() => {
            setError(false)
        }, 5000)
    }
    
       

    const create = async (data) => {
        setError("")
        try {
            if (!data.content || data.content?.trim() === "") {
                setError("No Data :Comment is required")
            }
            const commentData = await axios({
                method: 'POST',
                url: `/api/v1/comments/${video._id}`,
                data: {
                    'content': data.content
                },

            })
            if (commentData) { 
                setchange(commentData.data)
             
        }
        } catch (error) {

        }

    }

    return VideoComments ? (
        <>
            {error && <p className=" text-[#f90909]  bg-gray-200 rounded-xl mt-1 mb-2 text-center text-lg font-mono">{error}</p>}

            <form onSubmit={handleSubmit(create)}>
                <input
                type='text'
                    className="w-full p-2 mb-3 border-b-2 border-black text-ellipsis"
                    placeholder="Write a comment..."                    
                    {...register("content", { required: true })}
                />
                <Button
                    type="submit"
                    className=' text-gray-200 border bg-gradient-to-r from-red-600 to-red-950 border-gray-900 rounded-xl font-bold '>
                    Comment
                </Button>
            </form>
            <p className='mt-3 text-xl font-bold'>{VideoComments.length} Comments</p>
            <hr className='border border-gray-300 my-2' />

            {
            currentUserComments &&(
                currentUserComments.map((comment)=>(
                <div key={comment._id} className='mt-1'>
                  <CommentCard {...comment} />
                </div>
                ))
            )
            }

            {
                VideoComments.map((comment) => (
                    <div key={comment._id} className='mt-1'>
                        <CommentCard {...comment} />
                    </div>
                ))

            }

        </>
    ) : null
}

export default CommentsHandler