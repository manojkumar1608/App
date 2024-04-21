import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TweetCard from '../utils/TweetHandling.jsx/TweetCard'
import { useForm } from 'react-hook-form'

function TweetsPage() {
    const { register, handleSubmit, reset, watch, formState } = useForm();
    const { errors, isDirty, isValid } = formState;

    const [update, setUpdate] = useState()
    const [tweets, settweets] = useState([])
    const [error, setError] = useState()

    useEffect(() => {
        async function gettweets() {
            try {
                const response = await axios.get('/api/v1/tweets/')
                const tweetsData = response.data.data
                if (tweetsData) {
                    settweets(tweetsData.docs)
                    console.log(tweetsData.docs)
                }

            } catch (error) {
                setError(error)
            }

        }
        gettweets()
    }, [update])
    console.log(tweets)

    const onFormSubmit = (data) =>{
        axios({
            method: 'POST',
            url: '/api/v1/tweets/',
            data: {
              'content': data.tweetContent
            }
          }).then(response => {
            console.log(response)
            setUpdate(response.data.data)
            reset(); 
          })
      }
    

    return tweets && (
        <>
            <div className="w-[30rem] mx-auto bg-gray-200 min-h-screen mt-3">
                {/* Navbar */}
                <nav className="bg-white fixed w-[30rem] top-[4rem] z-30 shadow-lg p-4 flex justify-between  items-center">
                    <a href="#" className="text-blue-400 text-2xl font-bold">Twitter</a>
                <div className='flex flex-row'>
                    <img src="https://source.unsplash.com/random" alt="Profile Avatar" className="w-10 h-10 rounded-full" />
                    <h2 className='mt-1 mx-2 text-lg font-semibold'>{'manojKumar'}</h2>
                    </div>
                    {/* Twitter Logo */}
                    {/* Search Bar */}
                    {/* <div className="flex items-center bg-gray-200 rounded-lg px-2 py-1">
                        <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m4-6a8 8 0 11-16 0 8 8 0 0116 0z"></path>
                        </svg>
                        <input type="text" placeholder="Search Twitter" className="outline-none bg-transparent placeholder-gray-500" />
                    </div> */}
                    {/* Profile Avatar */}
                  
                </nav>

                {/* Main Content */}
                <div className="container mx-auto p-4 mt-14">
                    {/* Tweet Composer */}
                    <form onSubmit={handleSubmit(onFormSubmit)}>
                        <div className=" bg-white shadow-md rounded-lg p-4 mb-4">
                            <textarea
                                {...register("tweetContent", { required: "Tweet content is required" })}
                                className="w-full border-none outline-none resize-none" rows="3" placeholder="What's happening?">

                            </textarea>

                            {errors.tweetContent && (
                                <p className="text-red-500 text-sm">{errors.tweetContent.message}</p>
                            )}

                            <div className="flex justify-between items-center mt-2">
                                <button
                                    className={`${formState.isDirty && formState.isValid
                                        ? "bg-blue-500 hover:bg-blue-700"
                                        : "bg-gray-300 cursor-not-allowed"
                                        } text-white font-semibold py-2 px-4 rounded`}
                                    disabled={!isValid}>
                                    Tweet</button>
                                <div>
                                    <label htmlFor="file-upload" className="cursor-pointer">
                                        <svg className="w-6 h-6 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                                        </svg>
                                    </label>
                                    <input id="file-upload" type="file" className="hidden" />
                                </div>
                            </div>
                        </div>
                    </form>

                    {/* Tweets */}
                    <div className='flex flex-col  ml-2 mt-2'>
                        {error && <p className='text-center text-3xl font-bold'>Something went wrong</p>}
                        {tweets.map((item) => (
                            <div key={item._id} className=''>
                                <TweetCard  {...item} />
                            </div>
                        ))

                        }
                    </div>



                </div>
            </div>

        </>)

}

export default TweetsPage