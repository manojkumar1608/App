import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const  EmptyCard = ()=>{
  const menu = useSelector((state)=>state.Sidebar.isTogglemenu)
  if(!menu)
  return (
        <div className=" flex flex-row ">

        <Link to ="/" className="  bg-gray-200 p-2 m-3 h-56 w-[22rem] rounded-xl">
          {""}
        </Link>  
        <Link to ="/" className="  bg-gray-200 p-2 m-3 h-56 w-[22rem] rounded-xl">
          {""}
        </Link>  
        <Link to ="/" className="  bg-gray-200 p-2 m-3 h-56 w-[22rem] rounded-xl">
          {""}
        </Link>  
         
        
        </div> 
    )
  
 
}
export default EmptyCard