import React from 'react';
import Input from './Input';
import  { BiSearchAlt2 } from "react-icons/bi"
import { useSelector,useDispatch } from 'react-redux';
import { isTogglemenu} from "../store/SidebarSlice"

function Header() {
    const dispatch = useDispatch()
    const Handletogglemenu = ()=>{
       dispatch(isTogglemenu())

    }
    return (
        <div className='flex flex-wrap'>
            <div className='flex flex-row'>
                {/*  sidebar */}
                    <img 
                    onClick={()=>Handletogglemenu()}
                    className='h-[2rem] mx-3 my-2' src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp" 
                    alt="sidebar" />

               {/* logo */}
                <a className="flex flex-wrap " href='/'>
                    <img className='h-[2rem] mx-3 my-2 '
                        src="https://cdn.pixabay.com/photo/2018/05/27/22/48/social-3434840_1280.png" alt="videoTube" />
                    <h3 className='my-2 text-xl font-bold ' >VideoTube</h3>
                </a>
                {/* /* // */ }
                {/* //search bar with search btn// */}
                <div className="flex col-span-10 pl-14">
                    <Input
                        className="text-center w-full mt-2  border border-gray-400 pr-[15rem] pl-[10rem] rounded-l-full"
                        label=""
                        placeholder="Search"
                    />
                    <button
                        className="border border-gray-400 px-5 py-2 bg-gray-100 rounded-r-full mt-2"
                        type="button"
                    >
                         <BiSearchAlt2 />
                    </button>
                    {/* // */}
                    
                </div>
            </div>


        </div>
    )
}

export default Header
