import React, { useState } from 'react';
import Input from '../Input';
import { BiSearchAlt2 } from "react-icons/bi"
import { useSelector, useDispatch } from 'react-redux';
import { isTogglemenu } from "../../store/SidebarSlice"
import LogoutBtn from './LogoutBtn';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button';
import UploadTweetHandling from '../../utils/TweetHandling.jsx/TweetFormCard';


function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const [error , setError] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const HandleCreateVideo = () => {
    if(authStatus){
      navigate('/uploadvideo')
    }else{
      setError(' Login to upload video  ')
    }
   
  }
  const HandleCreateTweet = () => {
    if(authStatus){
      navigate('/Tweet')
    }else{
      setError(' Login to Tweet your thoughts')
    }

  }
  
  
  if (error) {
    setTimeout(() => {
      setError(false)
    }, 4000)
  }
  return (
    <>
      <header>
        <div className='flex relative p-3 shadow-sm shadow-gray-300'>
          <div className='flex flex-row text-2xl mt-1'>
            {/*  sidebar */}
            <img
              onClick={() => dispatch(isTogglemenu())}
              className='h-[2rem] cursor-pointer mx-3'
              src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
              alt="sidebar" />

            {/* logo */}
            <a className="flex flex-row " href='/'>
              <img className='h-10 w-12 bg-transparent rounded-3xl '
                src="https://cdn-icons-png.flaticon.com/512/8894/8894556.png" alt="videoTube" />
              <h3 className='font-bold font-' >PlayTube</h3>
            </a>
          </div>
          {/* //search bar with search btn// */}
          {/* /* // */}
          <div className="flex mx-28">
            <Input
              className="h-10  border border-gray-500 rounded-l-full "
              type="text"
              placeholder="Search..."
            />
            <button
              className="h-10 border border-gray-500 px-5  bg-gray-300 rounded-r-full "
              type="button"
            >
              <BiSearchAlt2 />
            </button>

            

            {/* // */}

          </div>
          <div className='absolute flex flex-wrap right-2 gap-5 '>
            
            <div className='flex flex-wrap'>
              <div>
              <button onClick={HandleCreateVideo}
              className='text-sm font-bold'>
                <img className='size-8  mx-7 '
                src="https://cdn-icons-png.flaticon.com/128/4120/4120760.png" 
                alt="" />Create
              </button>
              </div>
              <UploadTweetHandling/>


            {authStatus ?
             <LogoutBtn /> :

              <Link to='/login'>
                <Button
                  className=' text-gray-200 border bg-gradient-to-r from-red-700 to-gray-950 rounded-xl font-bold '>
                  Login/Signup
                </Button>
              </Link>
            }
          </div>

        </div>
        </div>
      </header>
      {error &&  <p className=" text-[#f90909]  bg-gray-200 rounded-xl mt-6 mb-2 text-center text-lg font-mono">{error} </p>}
    </>
  )
}
export default Header
