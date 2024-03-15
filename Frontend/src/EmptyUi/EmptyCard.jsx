import React from "react";
import { Link } from "react-router-dom";

const  EmptyCard = ()=>{
  
    
  return (
        <div  className="">
          <ul className=" flex flex-wrap ">
            <li className=" bg-gray-200 p-2 m-3 h-56 w-[22rem] rounded-xl ">
            <Link  to ="/" className="">
          {""}
        </Link>  
            </li>
          </ul>

      
        
         
        
        </div> 
    )
  }

  
export default EmptyCard