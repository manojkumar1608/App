import React, { useState } from 'react';
import { BiSearchAlt2 } from "react-icons/bi"
import { useSelector, useDispatch } from 'react-redux';
import { isTogglemenu } from "../../store/SidebarSlice"
import LogoutBtn from './LogoutBtn';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../utilities/Button';
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineSubscriptions } from "react-icons/md"
import { AiOutlineLike } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";
import TweetFormCard from '../Handlers/TweetHandling.jsx/TweetFormCard';


function Header() {
  const userData = useSelector((state) => state.auth.userData)
  const [error, setError] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const HandleCreateVideo = () => {
    if (userData) {
      navigate('/uploadvideo')
    } else {
      navigate('login')
    }
  }
 
  if (error) {
    setTimeout(() => {
      setError(false)
    }, 4000)
  }
  return (
    <>
    <div>
    <nav className="w-full flex fixed top-0 z-40 px-4 py-2 bg-gray-100 shadow-sm justify-between items-center">
      {/* <!-- Hamburger menu icon for small screens --> */}
      {/* <button className="block lg:hidden text-white focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button> */}

      {/* <!-- Logo --> */}
      <div className='flex flex-row'>
        <RxHamburgerMenu
          onClick={() => dispatch(isTogglemenu())}
          className='size-6 mt-2 mx-3 cursor-pointer'
           />

        <a className="flex flex-row" href='/'>
          <img className='h-10 w-12 inline-block'
            src="https://cdn-icons-png.flaticon.com/512/8894/8894556.png" alt="videoTube" />
          <h3 className='text-[1.6rem] font-bold text-gray-950 mt-0.5' >PlayTube</h3>
        </a>
      </div>

      {/* <!-- Search bar --> */}
      <div className="hidden lg:block">
        <input type="text" placeholder="Search..." className="h-12 border p-2 border-gray-500 rounded-2xl mr-2 " />
        <button className="h-11 w-11 p-4  bg-gray-300 rounded-full ">
          <BiSearchAlt2 className='size-4' /></button>
      </div>

      {/* <!-- Login/logout button --> */}
      <div className='flex flex-wrap justify-end text-gray-950 mt-2'>
        <button onClick={HandleCreateVideo}
          className='text-sm font-bold'>
          <img className='size-8  mx-7 '
            src="https://cdn-icons-png.flaticon.com/128/4120/4120760.png"
            alt="" />Create
        </button>
        <TweetFormCard/>
        {userData ?
          <LogoutBtn /> :

          <Link to='/login'>
            <Button
              className=' text-gray-200 border bg-gradient-to-r from-red-700 to-gray-950 rounded-xl font-bold '>
              Login/Signup
            </Button>
          </Link>
        }
        </div>
      </nav>
    <div className=''>
            <ul className='flex flex-col fixed top-[5rem]  shadow-sm w-[5rem]'>
            
                    <Link to="/">
                <li className='flex flex-col items-center py-2 rounded-lg font-bold hover:bg-gray-200 '>
                        <AiOutlineHome className="text-3xl" />
                    <p className='mt-1 mb-1 text-xs font-medium text-gray-500'>Home</p>
                    </li>
                    </Link>

                    <Link to="/Tweets" >
                <li className='flex flex-col py-2 rounded-lg items-center font-bold hover:bg-gray-200 '>
                        <RiTwitterXLine className="inline-block text-3xl" />
                    <p className='mt-1 mb-1 text-xs font-medium text-gray-500'>Twitter</p>
                </li>
                    </Link>

                    <Link to="/Following" >
                <li className='flex flex-col items-center py-2  rounded-lg  hover:bg-gray-200 '>
                        <MdOutlineSubscriptions className="text-3xl"/>
                    <p className='mt-1 mb-1 text-xs font-medium text-gray-500'>Following</p>
                </li>
                    </Link>

                    <Link to="/LikedVideos" >
                <li className='flex flex-col items-center py-2  rounded-lg  hover:bg-gray-200  '>
                        <AiOutlineLike className="text-3xl"  />
                    <p className='mt-1 mb-1 text-xs font-medium text-gray-500'>Liked Videos</p>
                </li>
                    </Link>

                    <Link to={`/user/${userData?.data?.username}`} >
                <li className='flex flex-col items-center py-2  rounded-lg  hover:bg-gray-200  '>
                        <VscAccount className="text-3xl"  />
                    <p className='mt-1 mb-1 text-xs font-medium text-gray-500'>You</p>
                </li>
                    </Link>

            </ul>
    
          
        </div>
        
    </div>
</>)
}
export default Header
