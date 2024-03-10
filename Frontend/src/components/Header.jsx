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
        <div className='grid grid-flow-col p-3 shadow-lg'>
            <div className='flex col-span-1 text-2xl mt-1'>
                {/*  sidebar */}
                    <img 
                    onClick={()=>Handletogglemenu()}
                    className='h-[2rem] cursor-pointer mx-3' 
                    src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp" 
                    alt="sidebar" />

               {/* logo */}
                <a className="flex flex-row " href='/'>
                    <img className='h-[2rem] '
                        src="https://cdn.pixabay.com/photo/2018/05/27/22/48/social-3434840_1280.png" alt="videoTube" />
                    <h3 className='font-bold font-' >PlayTube</h3>
                </a>
                {/* /* // */ }
                {/* //search bar with search btn// */}
                </div>
                <div className="flex col-span-10 pl-[5rem] ">
                    <Input
                        className=" w-[28rem] border border-gray-400 p-1 pl-3 rounded-l-full "
                        type="text"
                        placeholder="Search..."
                    />
                    <button
                        className="border border-gray-400 px-5 py-2 bg-gray-100 rounded-r-full "
                        type="button"
                    >
                         <BiSearchAlt2 />
                    </button>
                    {/* // */}
                    
                </div>
            </div>


    )
}

export default Header
