import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { closeMenu ,isTogglemenu} from "../store/SidebarSlice";

const  EmptyCard = ()=>{
  
  return (
        <div  className=" flex  flex-wrap ">

        <Link  to ="/" className="  bg-gray-200 p-2 m-3 h-56 w-[22rem] rounded-xl">
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