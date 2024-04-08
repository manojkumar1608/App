import React from "react"

const EmptyVideo = () => {
    <div className="flex flex-wrap m-5 ">
      <iframe
        className="bg-gray-200"   
        width="1000"
        height="500"  
        src=""
        title="YouTube video player"
        // frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
}
export default EmptyVideo

{/* <div>
<div className='flex flex-col'>

<div className='p-2 w-96 '>
  <Link to={`/watch/${_id}`} className='hover:bg-gray-400 '>
    <img className='w-96 h-56 rounded-xl hover:opacity-60 transition-opacity duration-300 border'
      src={thumbnail.url}
      alt='thumbnail'>
    </img>
  </Link>
        </div>

      <div className='flex flex-wrap'>
    <Link to={`/`} className='inline-block w-fit hover:bg-gray-300 rounded-lg'>
      <img src={user.avatar}
        className=' rounded-full h-[3rem] w-[3rem] mr-2 p-1'
        alt="avatar" />
    </Link>

    <Link to={`/watch/${_id}`} >
      <p className=' hover:bg-gray-200 rounded-xl text-center h-fit overflow-hidden text-ellipsis font-bold '>
        {title}
      </p>
    </Link>
</div>

    <Link to={"/channelpage"} >
    <p className='inline font-bold text-xl text-gray-500' >
      {user.username}</p>
    </Link>


    <li className='w-[4.5rem]'>
      {views} views
    </li>
    <li className='' >
      { } hours ago
    </li>
  

</div>
</div> */}

