import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TweetFormCard = ({ tweet }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tweetData, setTweetData] = useState();
  const { register, handleSubmit, reset, watch, formState } = useForm();
  const { errors, isDirty, isValid } = formState;
  const navigate = useNavigate()
  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setTweetContent('');
  }
  const onFormSubmit = (data) => {
    if (tweet) {
      axios({
        method: 'POST',
        url: '/api/v1/tweet',
        data: {
          'content': data.newtweetContent
        }
      }).then(response => {
        console.log(response)
      }).catch()
    } else {
      axios({
        method: 'POST',
        url: '/api/v1/tweets/',
        data: {
          'content': data.tweetContent
        }
      }).then(response => {
        setTweetData(response.data.data)
        reset(); 
      })
    }
    if(tweetData){
      setIsOpen(false)
    }

  };

  return (
    <>
        { 
        tweet ?(
          <div>     
          <button onClick={openModal}
            className=' font-bold text-sm '>
            <img className='size-8 mx-7 rounded-'
              src="https://cdn-icons-png.flaticon.com/128/14417/14417460.png"
              alt="" />Edit
          </button>
        </div>
        ):(
          <div>     
          <button onClick={openModal}
            className=' font-bold text-sm '>
            <img className='size-8 mx-7 rounded-'
              src="https://cdn-icons-png.flaticon.com/128/14417/14417460.png"
              alt="" />Tweet
          </button>
        </div>
        )
}
      {
        isOpen &&
        <>
          <div className="flex justify-center items-center h-screen">
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
              <div className="w-[24rem] bg-white p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Create Tweet</h2>
                  <button onClick={closeModal}>
                    <svg
                      className="w-6 h-6 text-gray-600 hover:text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-md">
                  <form onSubmit={handleSubmit(onFormSubmit)}>
                    <textarea
                      {...register("tweetContent", { required: "Tweet content is required" })}
                      className="w-full resize-none border rounded-md p-2 "
                      placeholder="What's happening?"
                    ></textarea>
                    {errors.tweetContent && (
                      <p className="text-red-500 text-sm">{errors.tweetContent.message}</p>
                    )}
                    <div className="flex justify-end items-center mt-5">
                      <button
                        type="submit"
                        className={`${formState.isDirty && formState.isValid
                            ? "bg-blue-500 hover:bg-blue-700"
                            : "bg-gray-300 cursor-not-allowed"
                          } text-white font-semibold py-2 px-4 rounded`}
                        disabled={!isValid}
                      >
                        Tweet
                      </button>
                      <button className="text-white font-semibold py-2 px-4 ml-5 rounded bg-red-600 hover:bg-red-700"
                      onClick={closeModal}>
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      }
    </>);
};

export default TweetFormCard;
