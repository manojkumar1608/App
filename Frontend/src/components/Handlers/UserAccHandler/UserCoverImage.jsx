import React from 'react'
import { useState } from 'react';
import {  useSelector } from 'react-redux';
import { RiImageEditFill } from "react-icons/ri";
import { useForm } from 'react-hook-form';
import axios from 'axios';

function UserCoverImage({ userData }) {
    const { register, handleSubmit } = useForm()
    const cuurentuser = useSelector((state) => state.auth.userData)
    const coverImage = userData?.coverImage.url;
    const [profilePic, setProfilePic] = useState(coverImage?.url);
    const [showModal, setShowModal] = useState(false);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePic(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const Submit = async (data) => {
        const response = await axios({
            method: 'PATCH',
            url: '/api/v1/users/cover-Image',
            data: {
                'coverImagefile': data.coverImage[0]
            },
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        if (response) {
            console.log(response);
            setShowModal(false)
            window.location.reload()
        }

    }


    return (
        <div>
            {userData.coverImage &&
                <div className='relative'>
                    <div className='w-[67rem] h-40 mx-11 mt-2 mb-1 p-1 rounded-xl'>
                        <img className="object-cover w-full h-full rounded-xl"
                            src={userData.coverImage.url} alt="Cover" />
                        {
                            userData?._id === cuurentuser?.data?._id &&
                            <div className='absolute right-20 bottom-0'>
                                <RiImageEditFill onClick={() => setShowModal(true)}
                                    className='size-9 hover:bg-gray-300 rounded-lg cursor-pointer' />
                            </div>
                        }
                    </div>
                </div>
            }

            {showModal && (

                <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-8 max-w-md w-full">
                        <form encType='multipart/form-data' onSubmit={handleSubmit(Submit)}>
                            <img
                                className='size-16 mx-auto rounded-lg'
                                src={profilePic} />
                            <h2 className="text-lg font-semibold mb-3 mt-2">Change Cover-Image</h2>
                            <input
                                type="file"
                                accept="image/*"
                                {...register("coverImage", { required: true })}
                                onChange={handleFileChange}
                                className="py-2 px-4 bg-blue-500 text-white rounded-lg cursor-pointer"
                            />
                            <div className='flex flex-row justify-between'>
                                <button
                                    className="mt-4 py-2 px-4 bg-red-700 text-white rounded-lg cursor-pointer"
                                    onClick={() => setShowModal(false)} // Close modal when cancel button is clicked
                                >
                                    Cancel
                                </button>
                                <button
                                    className="mt-4 py-1.5 px-4 bg-green-700 text-white rounded-lg cursor-pointer"
                                    type='submit'
                                >
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )


}
export default UserCoverImage