import React, { useEffect, useState } from 'react'
import Button from "./utilities/Button.jsx"
import { Link } from 'react-router-dom'
 function YourAccount() {
 

  return (
<>
<div className='relative w-full h-screen z-10 overflow-x-hidden'>

        <div className='absolute h-[11rem] p-2 top-2 right-[7rem] left-[4rem] bg-gray-200'>
         <img className=' '
         src= ''
         alt='Cover-Image'
         />
        </div>

        <div className='absolute grid grid-rows-3 grid-flow-col gap-4 top-[12rem] left-[4rem] mt-1 p-2'>

         <img className=' row-span-3 w-24 h-24 rounded-full"'
         src="https://cdn.pixabay.com/photo/2018/05/27/22/48/social-3434840_1280.png"
         alt='Cover-Image'
         />
          <h1 className='h-fit col-span-2 text-3xl '>ChannelName</h1>

          <div className='row-span-2 col-span-2'>
          <p className=''>@channel</p>
          <p className='inline-block'> followers </p> <span className='ml-2'> following </span> 
          </div>
          <Button className='row-span-3 col-span-3 w-[6rem] h-fit m-3 p-2 bg-gray-800  rounded-3xl hover:bg-gray-500'>
               Follow
            </Button>
         </div>
          
          <div  className='relative top-[20rem] left-[4rem] '>
            <button
            className='p-2 mr-2  border-none text-xl font-bold hover:underline'
            onClick={Home}>
              Home
            </button>
           
            <button 
            type='button'
            className='p-2 mr-2 border-none text-xl font-bold hover:underline'>
              Videos
            </button>
            <button 
            type='button'
            className='p-2 mr-2 border-none text-xl font-bold hover:underline'
            onClick={Tweets}>
              Tweets
            </button>
            <button 
            type='button'
            className='p-2 mr-2 border-none text-xl font-bold hover:underline'>
              Playlists
            </button>

          </div>

          <hr className='absolute w-screen h-2 top-[23rem] border-gray-300' />

          <div id='Home' className='absolute flex flex-wrap top-[24rem] '>
            {home}
          </div>


         </div>


        </>
  )
}

export default YourAccount