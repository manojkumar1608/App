import React from 'react';
import Input from '../Input';
import  { BiSearchAlt2 } from "react-icons/bi"
import { useSelector,useDispatch } from 'react-redux';
import { isTogglemenu} from "../../store/SidebarSlice"
import { TbVideoPlus } from "react-icons/tb";
import  {logout as authlogout} from "../../store/authSlice"
import LogoutBtn from './LogoutBtn';
import { useNavigate } from 'react-router-dom';


function Header() {
  const authStatus = useSelector((state)=>state.auth.status)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const createHandler = ()=>{
      if(authStatus){
        navigate('/uploadvideo')
      }
    }
  
    return(
        <>
        <header>
        <div className='flex justify-between p-3 shadow-lg'>
            <div className='flex flex-row text-2xl mt-1'>
                {/*  sidebar */}
                    <img 
                    onClick={()=>dispatch(isTogglemenu())}
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
                {/* /* // */ }
                <div className="flex pl-[2rem] mx-[3rem] ">
                    <Input
                        className=" w-[19rem] border border-gray-500 rounded-l-full "
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
               

                {authStatus &&
                <div className=' flex  mx-16 m-1 pt-1 pr-3 border border-gray-500 rounded-xl'>
                  <button onClick={createHandler}>
                    <TbVideoPlus className='text-3xl  ml-4 inline-block'/><span className='ml-1 font-bold'>Create</span>
                  </button>
                  
                </div>}

                {authStatus ? <LogoutBtn/>:
                <div className='bg-red-500 flex mx-18 m-1 pt-1 pr-3 border border-gray-500 rounded-xl'>
                  <a   href='/login'>
                    <span className='p-2 pl-4 ml-1 font-bold'>Login/Signup</span>

                  </a>
                </div>}
               
               
                  
                </div>
                </header>
            </>
            )}
            export default Header
