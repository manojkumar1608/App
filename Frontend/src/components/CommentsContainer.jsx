import React from 'react'
import { useState } from 'react';
import Button from './Button'
import { MdOutlineArrowDropDownCircle } from "react-icons/md"
import { IoIosArrowDropup } from "react-icons/io";
import Input from "./Input"

 

  
  
  // <div className='w-full mt-4 flex cursor-pointer'> 
  //   <details >
  //   <summary className='flex font-bold p-2 text-xl border border-gray-600 rounded-full '>
  //    Comments
  //     <MdOutlineArrowDropDownCircle aria-pressed='true' className='text-3xl ml-2 active:-rotate-90'/> 
  //   </summary>
  //   <hr className='border-gray-900 w-[22rem] mt-2'/>

  //   <div className='flex flex-wrap'>

  //   <img 
  //   className='flex h-[2rem] w-[2rem]  mt-4 rounded-full'
  //   src='https://images.pexels.com/photos/1188083/pexels-photo-1188083.png?cs=srgb&dl=sea-dawn-nature-1188083.jpg&fm=jpg'
  //   alt='logo'>
      
  //   </img>
   

  //   <p className=' mt-3 ml-2 font-bold text-base'> @username </p>
  //   <p className='mt-3 ml-4 px-2 text-gray-600'> 2 hours ago </p>

  //   <Input 
  //   type='text'
  //   className="w-[20rem] border-black border-b-2 border-x-0 border-t-0">
  //   </Input>

  //   </div>


  //   </details>
  // </div>

    // CommentBox.js

const CommentBox = () => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    // Handle submitting the comment (e.g., send it to an API)
    console.log('Submitted comment:', comment);
  };

  return (
    <>
    <div className="p-4">
      <textarea
        className="w-full p-2 border border-black  mt-4 rounded-lg  "
        placeholder="Write a comment..."
        value={comment}
        onChange={handleCommentChange}
      />
      <button
        className="mt-2 px-4 py-2 bg-blue-900 text-white rounded-xl"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>



</>
  );
};


  

export default CommentBox