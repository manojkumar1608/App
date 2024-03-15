import React from 'react'
import { IoHome } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import {Link} from "react-router-dom"
import { MdSubscriptions } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md"
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { FaHistory } from "react-icons/fa";
import { LuHistory } from "react-icons/lu";
import { MdAccountCircle } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { GoVideo } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { VscFeedback } from "react-icons/vsc";
import { CgFlag } from "react-icons/cg";
import { MdOutlineHelpOutline } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useDispatch,useSelector } from 'react-redux';
import { closeMenu, isTogglemenu} from "../store/SidebarSlice"


function SideBar() {

    const menu = useSelector((state)=> state.Sidebar.isMenuOpen)
    const dispatch = useDispatch()

    
      if(menu){
        return (
          <>
          <div onClick={()=>dispatch(closeMenu())} className='h-full w-full none fixed top-0  bg-black bg-opacity-15'>
        
                <div  className = " relative bg-gray-50 z-30 p-5 shadow-xl w-60 h-screen overflow-y-auto rounded-xl ">
            <div className='flex flex-row text-2xl '>
                {/*  sidebar */}
                    <img 
                    onClick={()=>dispatch(closeMenu())}
                    className='h-[2rem] cursor-pointer' 
                    src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp" 
                    alt="sidebar" />

               {/* logo */}
               <a className="flex flex-row " href='/'>
                    <img className='h-[2rem] ml-1  '
                        src="https://cdn.pixabay.com/photo/2018/05/27/22/48/social-3434840_1280.png" alt="videoTube" />
                    <h3 className='font-bold font-' >PlayTube</h3>
                </a>
                </div>
            


              <ul className=' pt-2 '>
                <li className="py-2 flex hover:bg-gray-300 rounded-lg pl-2 font-semibold   ">
                <Link to="/" className="flex  ">
                  {""}
                  <IoHomeOutline className="mr-5 mt-1 text-xl" />
                  Home
                </Link>
              </li>
      
                <li className="py-2 flex hover:bg-gray-300 rounded-lg pl-2 font-semibold ">
                <Link to="/" className="flex">
                  {""}
                  <MdOutlineSubscriptions className="mr-5 mt-1 text-xl " />
                 Subscriptions
                </Link>
              </li>
      
              <hr className="mt-2 w-full border-gray-400"></hr>
              </ul>
      
              <ul>
                <li className="py-2 flex hover:bg-gray-300 rounded-lg pl-2 text-lg ">
                <Link to="/" className="flex font-bold mr-2">
                  {""}
                 You
                  <MdKeyboardDoubleArrowRight className="ml-4 mt-1 text-2xl" />
                </Link>    
              </li>
      
              <li className="py-2 flex hover:bg-gray-300 rounded-lg pl-2 font-semibold">
                <Link to="/" className="flex">
                  {""}
                  <VscAccount className="mr-5 mt-1 text-xl" />
                 Your channel
                </Link>
              </li>
      
              <li className="py-2 flex hover:bg-gray-300 rounded-lg pl-2 font-semibold">
                <Link to="/" className="flex">
                  {""}
                  <LuHistory className="mr-5 mt-1 text-xl" />
                 History
                </Link>
              </li>
      
              <li className="py-2 flex hover:bg-gray-300 rounded-lg pl-2 font-semibold">
                <Link to="/" className="flex">
                  {""}
                  <AiOutlineLike className="mr-5 mt-1 text-xl" />
                 Liked videos
                </Link>
              </li>
      
              <li className="py-2 flex hover:bg-gray-300 rounded-lg pl-2 font-semibold">
                <Link to="/" className="flex">
                  {""}
                  <GoVideo className="mr-5 mt-1 text-xl" />
                 Your videos
                </Link>
              </li>
      
            </ul>
      
              <hr className="mt-2 w-full border-gray-300"/>
              <h3  className='mt-3 font-bold text-lg '> Subscriptions </h3>
      
              <ul className='font-semibold'>
              <li className="py-2 flex hover:bg-gray-300 rounded-lg pl-2">
                <Link to="/" className="flex">
                  {" "}
                  <RxAvatar className="mr-5 mt-1 text-xl" />
                  Dev-World
                </Link>
              </li>
              <li className="py-2 flex hover:bg-gray-300 rounded-lg pl-2">
                <Link to="/" className="flex">
                  {" "}
                  <GoVideo className="mr-5 mt-1 text-xl" />
                  JavaScriptHub
                </Link>
              </li>
              <li className="py-2 flex hover:bg-gray-300 rounded-lg pl-2">
                <Link to="/" className="flex">
                  {" "}
                  <GoVideo className="mr-5 mt-1 text-xl" />
                  React.io
                </Link>
              </li>
              <li className="py-2 flex hover:bg-gray-300 rounded-lg pl-2">
                <Link to="/" className="flex">
                  {" "}
                  <GoVideo className="mr-5 mt-1 text-xl" />
                  Tseries
                </Link>
              </li>
              </ul>
      
              <hr className=' mt-3 w-full border-gray-300'/>
      
              <ul>
              <li className="py-2 flex hover:bg-gray-300 rounded-lg pl-2 font-semibold">
                <Link to="/" className="flex">
                  {" "}
                  <IoSettingsOutline className="mr-5 mt-1 text-xl" />
                  Settings
                </Link>
              </li>
              <li className="py-2 flex hover:bg-gray-300 rounded-lg pl-2 font-semibold">
                <Link to="/" className="flex">
                  {" "}
                  <CgFlag className="mr-5 mt-1 text-xl" />
                  Report
                </Link>
              </li>
              <li className="py-2 flex hover:bg-gray-300 rounded-lg pl-2 font-semibold">
                <Link to="/" className="flex">
                  {" "}
                  <MdOutlineHelpOutline className="mr-5 mt-1 text-xl" />
                  Help
                </Link>
              </li>
              <li className="py-2 flex hover:bg-gray-300 rounded-lg pl-2 font-semibold">
                <Link to="/" className="flex">
                  {" "}
                  <VscFeedback className="mr-5 mt-1 text-xl" />
                  Send Feedback
                </Link>
              </li>
              </ul>
              
            </div>
            </div>

            <div className='flex  w-[5rem]'>
            
        </div>
            </>
        )
      }
    return (
        <div className='flex  w-[5rem] '>
            <ul className=''>
            
                <li className='px-2 py-2 h-[3rem] mx-3 mb-2 flex rounded-lg  font-bold hover:bg-gray-300 w-[3rem]'>
                    <Link to="/" className="text-3xl">
                        <IoHome  />
                        {""}
                    </Link>
                </li>

                <li className='px-2 py-2 h-[3rem] mx-3 mb-2 flex rounded-lg  hover:bg-gray-300 w-[3rem]'>
                    <Link to="/" className="text-3xl">
                        {""}
                        <MdSubscriptions  />
                    </Link>
                </li>

                <li className=' px-2 py-2 mx-3 mb-2 flex rounded-lg  hover:bg-gray-300 h-[3rem] w-[3rem] '>
                    <Link to="/" className="text-3xl">
                        {""}
                        <AiFillLike   />
                    </Link>
                </li>

                <li className=' px-2 py-2 mx-3 mb-2 flex rounded-lg  hover:bg-gray-300 h-[3rem] w-[3rem] '>
                    <Link to="/" className="text-3xl">
                        {""}
                        <FaHistory   />
                    </Link>
                </li>

                <li className=' px-2 py-2 mx-3 mb-2 flex rounded-lg  hover:bg-gray-300 h-[3rem] w-[3rem] '>
                    <Link to="/" className="text-3xl">
                        {""}
                        <MdAccountCircle   />
                    </Link>
                </li>

            </ul>
          
        </div>
    )
    

}
export default SideBar