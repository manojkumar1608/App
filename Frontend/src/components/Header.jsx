import React from 'react';
import Input from './Input';
import  { BiSearchAlt2 } from "react-icons/bi"
import { useSelector,useDispatch } from 'react-redux';
import { isTogglemenu} from "../store/SidebarSlice"
import { TbVideoPlus } from "react-icons/tb";
import Button from './Button';
import { IoHome } from "react-icons/io5";
import { MdSubscriptions } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { FaHistory } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";


function Header() {
    const menu = useSelector((state)=>state.Sidebar.isMenuOpen)
    const dispatch = useDispatch()
    return(
        <>
        <div className='flex flex-row  p-3 shadow-lg'>
            <div className='flex flex-row text-2xl mt-1'>
                {/*  sidebar */}
                    <img 
                    onClick={()=>dispatch(isTogglemenu())}
                    className='h-[2rem] cursor-pointer mx-3' 
                    src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp" 
                    alt="sidebar" />

               {/* logo */}
               <a className="flex flex-row " href='/'>
                    <img className='h-[2rem] '
                        src="https://cdn.pixabay.com/photo/2018/05/27/22/48/social-3434840_1280.png" alt="videoTube" />
                    <h3 className='font-bold font-' >PlayTube</h3>
                </a>
                </div>
                {/* //search bar with search btn// */}
                {/* /* // */ }
                <div className="flex pl-[2rem] mx-[3rem] ">
                    <Input
                        className=" w-[30rem] border border-gray-500 rounded-l-full "
                        type="text"
                        placeholder="Search..."
                    />
                    <button
                        className="border border-gray-500 px-5  bg-gray-300 rounded-r-full "
                        type="button"
                    >
                         <BiSearchAlt2 />
                    </button>
                    
                    {/* // */}
                  
                </div>
                <div className=' flex mx-16 m-1 pt-1 pr-3 border border-gray-500 rounded-xl'>
                  <a  href=''>
                    <TbVideoPlus className='text-3xl  ml-4 inline-block'/><span className='ml-1 font-bold'>Create</span>


                  </a>
                </div>
                
               

                  
                </div>
            </>
            )}
            export default Header
