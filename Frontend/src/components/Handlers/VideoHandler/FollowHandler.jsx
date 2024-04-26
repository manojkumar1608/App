import React, { useEffect, useState } from 'react'
import Button from '../../utilities/Button'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
function FollowHandler({ video }) {
    const [user, setUser] = useState() // user details after fetching through video.owner i.e getuserbyId
    const [Subscribed, setSubscribed] = useState()   //checking whether current user is subscribed or not when watch page rendered
    const [Subscribers, setTotalSubscribers] = useState()  //the total followers of video owner i/e currently playing
    const [SubscribedTo, setSubscribedTo] = useState()  // the video owner subscribed/followed to..its shown as followers
    const [update, setUpdate] = useState()  //updated subscriberscount after toggle ..which makes useEffect to run again by triggering dependency 


    const userData = useSelector((state) => state.auth.userData)
    const isAuthor = video && userData ? userData.data._id === video.owner : false
    const navigate = useNavigate()

    useEffect(() => {
        async function getSubscribers() {
            const owner = video.owner
            if (owner) {
                axios({
                    method: 'POST',
                    url: '/api/v1/users/getuserbyId',
                    data: {
                        userId: owner
                    }
                }).then(response => {
                    const userData = response.data.data
                    setUser(userData)
                })
            }
            if (video) {
                const response = await axios({
                    method: 'POST',
                    url: `/api/v1/subscriptions/u/:subscriberId}`,
                    data: {
                        'channelId': video.owner
                    }
                })
                if (response) {
                    setTotalSubscribers(response.data.data)
                }

                if (userData) {
                    const subscribers = response.data.data
                    const CurrentUserSubscribed = subscribers.filter((subscriber) => {
                        return subscriber.subscribers[0]?._id === userData.data._id
                    })
                    if (CurrentUserSubscribed) {
                        setSubscribed(CurrentUserSubscribed)
                    }
                }

            }
            if (video) {
                const response = await axios({
                    method: 'POST',
                    url: `/api/v1/subscriptions/s/:channelId}`,
                    data: {
                        'channelId': video.owner
                    }
                })
                if (response) {
                    setSubscribedTo(response.data.data)
                }
            }
        } getSubscribers()
    }, [update, video])
    const ToggleFollowBtn = async () => {
        const response = await axios.post(`/api/v1/subscriptions/c/${video.owner}`)
        setSubscribed(response.data.data)
        setUpdate(response.data.data)
    }

    const deleteVideo = () => {
        axios.delete(`/api/v1/videos/${video._id}`)
            .then((status) => {
                if (status) {
                    navigate("/");
                }
            });
    };
    return Subscribed && SubscribedTo && (
        <>
            <div className='flex flex-row '>
                <Link to="/" >
                    <img src={user?.avatar}
                        className='flex flex-row rounded-full h-[3.5rem] w-[3.5rem] p-1 mt-1 mr-1 '
                        alt="avatar" />
                </Link>

                <div>
                    <p className='text-xl mt-2 mr-4 font-semibold'>
                        <Link to="/">
                            {user?.username}
                        </Link>
                    </p>

                    <p className=' text-gray-500 w-[12rem]'>
                        {Subscribers?.length} Followers  • {SubscribedTo?.length} Following
                    </p>
                </div>

                {
                    !isAuthor ? (
                        Subscribed.length > 0 ? (
                            <Button onClick={ToggleFollowBtn}
                                className=' w-[6rem] m-3 ml-7 p-2 pl-3 border border-black bg-gray-300 text-gray-900 font-semibold rounded-2xl transition ease-in hover:-translate-y-1 hover:scale-110 hover:bg-red-700 delay-300 duration-150'>
                                Following
                            </Button>) : (
                            <Button onClick={ToggleFollowBtn}
                                className=' w-[6rem] m-3 ml-7 px-2  bg-gray-700 border border-black font-semibold rounded-2xl transition ease-in delay-300 duration-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-800'>
                                Follow
                            </Button>)
                    ) : (
                        <div className="flex flex-row mt-4">
                            <Link to={`/edit-video/${video._id}`}>
                                <Button bgColor=" bg-gradient-to-r from-green-600 to-green-950 mr-1 rounded-xl font-semibold" >
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor=" bg-gradient-to-r from-red-600 to-red-950" className="h-fit font-semibold rounded-xl"
                                onClick={deleteVideo}>
                                Delete
                            </Button>
                        </div>)
                }
            </div>
        </>
    )



}

export default FollowHandler