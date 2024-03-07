import React from 'react'
import { useSelector } from 'react-redux'
import { IoHome } from "react-icons/io5";
import {Link} from "react-router-dom"
import { MdSubscriptions } from "react-icons/md";

function SideBar() {
    const menu = useSelector((state)=> state.Sidebar.isMenuOpen)
    console.log(menu)
    if(!menu) {
    return (
        <div className='flex flex-col'>
            <ul >
            
                <li className=' h-12 py-2  flex hover:bg-gray-200 rounded-lg pl-2 font-bold '>
                    <Link to="/" className="flex">
                        {""}
                        <IoHome icon= {IoHome} size='xl' className='mt-4 ml-2 '/>
                    </Link>
                    

                </li>
            <li className=" h-12 py-2 flex hover:bg-gray-200 rounded-lg pl-2 font-bold">
          <Link to="/" className="flex">
            {" "}
            <MdSubscriptions  icon={MdSubscriptions} size = '1x' className='mt-4 ml-2'/> 
          </Link>
          </li>
       
                
                
            </ul>
          
          
        </div>
    )
    };


  return (
    <div className = "flex h-screen w-1/5 bg-gray-400 border border-black rounded-xl">

        
    </div>
  )
}

export default SideBar